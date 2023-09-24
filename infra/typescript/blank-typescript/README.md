# Blank TypeScript AWS Lambda template

A blank "no-op" template for TypeScript based AWS Lambda function.
This template includes no dependencies.

The handler method accepts a string or a JSON object, see Invoke section on how to specify input payload for the function.

References

* [Building with TypeScript](https://docs.aws.amazon.com/lambda/latest/dg/lambda-typescript.html) in AWS Lambda Developer Guide.

## Build

No special build step is required.
This is handled by the CDK using the NodejsFunction construct.

## Deploy

Using the CDK infra in this repo.

## Invoke

```
aws --profile your-profile lambda invoke --function-name blank-typescript-template --payload '"value"' ~/tmp/lambda-output.txt
```
