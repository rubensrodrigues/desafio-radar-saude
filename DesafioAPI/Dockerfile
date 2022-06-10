FROM openjdk:11

WORKDIR /app

CMD [ "mvn clean install" ]

COPY target/DesafioAPI-0.0.1-SNAPSHOT.jar /app/DesafioAPI.jar

ENTRYPOINT ["java", "-jar", "DesafioAPI.jar"]