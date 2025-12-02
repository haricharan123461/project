FROM openjdk:17-jdk-slim

WORKDIR /app

COPY main/sample.class .
COPY main /app/main

CMD ["java", "sample"]
