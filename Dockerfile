FROM openjdk:11

WORKDIR /app

COPY main/sample.class .
COPY main /app/main

CMD ["java", "sample"]
