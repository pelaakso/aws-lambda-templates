![Build status](https://github.com/pelaakso/aws-lambda-templates/actions/workflows/build-infra.yml/badge.svg?branch=main)
![Build status](https://github.com/pelaakso/aws-lambda-templates/actions/workflows/build-java.yml/badge.svg?branch=main)

# AWS Lambda templates

Blank AWS Lambda starter templates for Java and TypeScript, plus AWS CDK infrastructure to deploy them.

## Included templates

### Java templates (`java/`)

- `blank-java`: minimal Java Lambda template (Maven + Gradle build support)
- `blank-java-with-powertools`: Java Lambda template with Powertools for AWS Lambda (Java)
- SnapStart variant is deployed for `blank-java` through CDK

See module-level docs:

- [java/blank-java](./java/blank-java/README.md)
- [java/blank-java-with-powertools](./java/blank-java-with-powertools/README.md)

### TypeScript template (`infra/typescript/`)

- `blank-typescript`: minimal TypeScript Lambda template bundled by CDK `NodejsFunction`

See template docs:

- [infra/typescript/blank-typescript](./infra/typescript/blank-typescript/README.md)

### Infrastructure (`infra/`)

CDK app that deploys:

- Java stack with:
  - `blank-java-template-mvn`
  - `blank-java-template-gradle`
  - `blank-java-template-snapstart-mvn` (alias: `current`)
  - `blank-java-template-with-powertools-mvn`
  - `blank-java-template-with-powertools-gradle`
- TypeScript stack with:
  - `blank-typescript-template`

Current stack configuration uses:

- ARM64 architecture
- Java 25 runtime for Java templates
- Node.js 24.x runtime for TypeScript template
- 512 MB memory and 15-second timeout defaults

## Build and test

### Java

Run from `java/`:

- `jenv exec ./gradlew build`
- `jenv exec mvn clean install`

Run one module with Gradle:

- `jenv exec ./gradlew :blank-java:test`

Run one module with Maven:

- `jenv exec mvn -pl :blank-java -am clean package`

### Infrastructure / TypeScript

Run from `infra/`:

- `pnpm install`
- `pnpm run build`
- `pnpm run test`
- `pnpm run cdk -- synth`

## Deploy

From `infra/`, use CDK commands such as:

- `pnpm run cdk -- diff`
- `pnpm run cdk -- deploy`

Before deploy, review and adjust account/region settings in `infra/bin/infra.ts` for your environment.
