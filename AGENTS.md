# Repository Guidelines

## Repository Overview

This is a collection of AWS Lambda templates in Java and TypeScript, with AWS CDK infrastructure for deployment. The repository contains blank starter templates that serve as base projects for Lambda development.

## Project Structure & Module Organization

This repo ships blank AWS Lambda templates for Java and TypeScript plus the CDK app that deploys them.
Java modules live in `java/`; shared build logic sits in `java/build.gradle`, sources in `src/main/java`, and tests in `src/test/java`.
AWS CDK code is in `infra/`, where `bin/infra.ts` bootstraps stacks in `infra/lib/`, and the sample handler is under `infra/typescript/blank-typescript`.

## Build, Test, and Development Commands

- `jenv exec ./gradlew build` (run from `java/`) compiles every template and executes the JUnit suite.
- `jenv exec mvn clean install` (run from `java/`) compiles every template and executes the JUnit suite using Maven.
- `jenv exec ./gradlew :blank-java:test` focuses on a single Java module; swap the project name as needed.
- `jenv exec mvn -pl :blank-java -am clean package` confirms Maven consumers can build the template.
- `pnpm install` sets up dependencies inside `infra/`.
- `pnpm run build` type-checks the CDK project; `pnpm run test` runs Jest.
- `pnpm run cdk -- synth` validates the stacks; add `diff` before deploys.
- `pnpm run clean`, `jenv exec ./gradlew clean` and `jenv exec mvn clean` removes generated artifacts such as `build/`, `target/`, and `cdk.out/`.

## Coding Style & Naming Conventions

Java follows 4-space indentation, PascalCase classes, camelCase members, and packages under `be.petey952.awslambdatemplates.*`.
Name Lambda handlers with a `Handler` suffix to match existing modules.
TypeScript uses ESLint + Prettier; run `pnpm run all` before committing.
Keep Lambda directories kebab-case for parity across languages.

## Testing Guidelines

JUnit 5 powers Java tests; place new suites in `src/test/java` with filenames ending in `Test`.
Store reusable fixtures in `src/test/resources` and cover both success and failure paths for each handler.
The CDK project uses Jest; refresh snapshots with `pnpm run snap` and avoid committing stale `__snapshots__` folders.
Add tests before requesting review, especially for new Lambda logic.

## Commit & Pull Request Guidelines

Commits typically follow `<topic>/<area>: summary`, e.g. `Deps/infra: bump jest`.
Keep changes scoped, reference GitHub issues with `#123`, and note build or test output in the body when touching infrastructure.
Pull requests should outline intent, list validation commands, and call out deployment prerequisites (AWS profiles, env vars).
Include screenshots or console snippets when behavior or generated CloudFormation changes.

## Security & Deployment Tips

Never commit credentials or `.env` files; rely on named AWS profiles and CDK context parameters for secrets.
Review IAM updates with `pnpm run cdk -- diff` before deployment and favor least-privilege policies in `infra/lib/*.ts`.
After deploying, inspect CloudWatch or runtime logs to confirm expected behavior.

## Documentation References

### AWS Services

- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)
- [AWS CDK v2 API Reference](https://docs.aws.amazon.com/cdk/api/v2/)
- [AWS Lambda Powertools for Java](https://docs.powertools.aws.dev/lambda/java/latest/)
- [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html)

### Build Tools & Frameworks

- [Maven Central Repository](https://search.maven.org/)
- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [Node.js 24 Documentation](https://nodejs.org/docs/latest-v24.x/api/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Testing & Quality

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [AssertJ Documentation](https://assertj.github.io/doc/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
