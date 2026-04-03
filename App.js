import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    jobid: "",
    jobrole: "",
    company: "",
    experience: "",
    location: "",
    salary: "",
  });

  // FETCH JOBS
  const fetchJobs = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/user")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE JOB
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/user", form);

      alert("Job Created Successfully!");

      // clear form
      setForm({
        jobid: "",
        jobrole: "",
        company: "",
        experience: "",
        location: "",
        salary: "",
      });

      // refresh list
      fetchJobs();

    } catch (err) {
      console.log(err);
      alert("Error creating job");
    }
  };

  // FILTER
  const filteredJobs = data.filter((job) =>
    job.jobrole.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Portal</h1>

      {/* CREATE JOB */}
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="jobid" value={form.jobid} placeholder="Job ID" required onChange={handleChange} />
        <input name="jobrole" value={form.jobrole} placeholder="Role" required onChange={handleChange} />
        <input name="company" value={form.company} placeholder="Company" required onChange={handleChange} />
        <input name="experience" value={form.experience} placeholder="Experience" required onChange={handleChange} />
        <input name="location" value={form.location} placeholder="Location" required onChange={handleChange} />
        <input name="salary" value={form.salary} placeholder="Salary" required onChange={handleChange} />
        <button type="submit">Create</button>
      </form>

      <hr />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search job role..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* JOB LIST */}
      <h2>Available Jobs</h2>
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>
            <strong>{job.jobrole}</strong><br />
            Company: {job.company}<br />
            Location: {job.location}<br />
            Salary: {job.salary}<br />
            <button onClick={() => alert("Applied Successfully!")}>
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
