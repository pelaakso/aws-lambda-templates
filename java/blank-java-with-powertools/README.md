# Blank Java AWS Lambda template with Powertools

A blank "no-op" template for Java based AWS Lambda function.
This template includes "Lambda Powertools Java" dependencies.
The template is configured for Powertools Java v2 and uses the Log4j2 backend (`powertools-logging-log4j`) with SLF4J logger API in handler code.

The handler method accepts a string, see Invoke section on how to specify input payload for the function.

References

- [Working with Java](https://docs.aws.amazon.com/lambda/latest/dg/lambda-java.html) in AWS Lambda Developer Guide.
- [Powertools for AWS Lambda (Java)](https://docs.aws.amazon.com/powertools/java/latest/)

## Build

`mvn clean package` or `./gradlew clean build` in `java` directory.

Tested with Gradle 9.3.0.

## Deploy

Using the CDK infra in this repo.

## Invoke

Invoke requires AWS CLI v2.

```
aws --profile your-profile lambda invoke --function-name blank-java-template-with-powertools-mvn --payload '"value"' --cli-binary-format raw-in-base64-out ~/tmp/lambda-output.txt
aws --profile your-profile lambda invoke --function-name blank-java-template-with-powertools-gradle --payload '"value"' --cli-binary-format raw-in-base64-out ~/tmp/lambda-output.txt
```
