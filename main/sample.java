public class sample {

    public static void main(String[] args) {

        int marks[] = {85, 90, 75, 88, 92};  
        int x=0;
        int total = 0;

        for (int i = 0; i < marks.length; i++) {
            total += marks[i];
        }

        double average = (double) total / marks.length;

        System.out.println("Total Marks = " + total);
        System.out.println("Average Marks = " + average);
    }
}

