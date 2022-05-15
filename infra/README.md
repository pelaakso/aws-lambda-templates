# Infra for AWS Lambda templates

Using:

* TypeScript
* Node 16.x (at the time of writing the version supported by AWS Lambda)

## Useful commands

* `npm run all`         run all steps
* `npm run watch`       watch for changes and compile
* `npm run test`        perform the jest unit tests
* `npm run snap -- -u`  accept and update snapshot tests
* `cdk deploy`          deploy this stack to your default AWS account/region
* `cdk diff`            compare deployed stack with current state
* `cdk synth`           emits the synthesized CloudFormation template
