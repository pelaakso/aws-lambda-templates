# Blank Java AWS Lambda template with Powertools

A blank "no-op" template for Java based AWS Lambda function.
This template includes "Lambda Powertools Java" dependencies.

The handler method accepts a string, see Invoke section on how to specify input payload for the function.

References

- [Working with Java](https://docs.aws.amazon.com/lambda/latest/dg/lambda-java.html) in AWS Lambda Developer Guide.
- [Lambda Powertools Java](https://awslabs.github.io/aws-lambda-powertools-java/)

## Build

`mvn clean package` or `./gradlew clean build` in `java` directory.

Tested with Gradle 8.13.

## Deploy

Using the CDK infra in this repo.

## Invoke

Invoke requires AWS CLI v2.

```
aws --profile your-profile lambda invoke --function-name blank-java-template-with-powertools-mvn --payload '"value"' --cli-binary-format raw-in-base64-out ~/tmp/lambda-output.txt
aws --profile your-profile lambda invoke --function-name blank-java-template-with-powertools-gradle --payload '"value"' --cli-binary-format raw-in-base64-out ~/tmp/lambda-output.txt
```
