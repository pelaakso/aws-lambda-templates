# Blank Java AWS Lambda template

A blank "no-op" template for Java based AWS Lambda function.
This template includes only minimal dependencies to build a Java based function.

* `aws-lambda-java-core`: core classes
* `aws-lambda-java-events`: predefined Java classes for various events that a Lambda function can receive
* `aws-lambda-java-log4j2`: for logging

The handler method accepts a string, see Invoke section on how to specify input payload for the function.

References

* [Working with Java](https://docs.aws.amazon.com/lambda/latest/dg/lambda-java.html) in AWS Lambda Developer Guide.

## Build

`mvn clean package` in `java` directory.

## Deploy

Using the CDK infra in this repo.

## Invoke

aws --profile your-profile lambda invoke --function-name blank-java-template --payload '"value"' ~/tmp/lambda-output.txt
