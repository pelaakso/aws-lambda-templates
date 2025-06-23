# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collection of AWS Lambda templates in Java and TypeScript, with AWS CDK infrastructure for deployment. The repository contains blank starter templates that serve as base projects for Lambda development.

## Project Structure

- `java/` - Java Lambda templates with Maven and Gradle builds
  - `blank-java/` - Basic Java Lambda template
  - `blank-java-with-powertools/` - Java Lambda with AWS Powertools integration
- `infra/` - AWS CDK infrastructure code (TypeScript)
  - `lib/` - CDK stack definitions
  - `typescript/blank-typescript/` - TypeScript Lambda template
- `.github/workflows/` - CI/CD pipelines for building and testing

## Development Commands

### Infrastructure (TypeScript/CDK)

Run these commands from the `infra/` directory:

```bash
# Install dependencies
npm ci

# Run all checks (lint, format, test)
npm run all

# Individual commands
npm run build          # TypeScript compilation check
npx eslint .          # Linting
npx prettier --check . # Code formatting check
npm run test          # Run Jest tests
npm run snap          # Update Jest snapshots

# CDK operations
npx cdk synth         # Synthesize CloudFormation
npx cdk deploy        # Deploy to AWS
```

### Java Development

Run these commands from the `java/` directory:

```bash
# Maven build (builds all modules)
jenv exec mvn clean package

# Gradle build
jenv exec ./gradlew build

# Individual module builds
cd blank-java && jenv exec mvn clean package
cd blank-java-with-powertools && jenv exec mvn clean package
```

## Architecture

### CDK Infrastructure

- **JavaStack** (`infra/lib/java-stack.ts`) - Deploys multiple Java Lambda variants:
  - Standard Lambda with Maven build
  - SnapStart-enabled Lambda for faster cold starts
  - Powertools-enabled Lambda for observability
  - Gradle build variants
- **TypescriptStack** (`infra/lib/typescript-stack.ts`) - Deploys TypeScript Lambda using NodejsFunction construct

### Lambda Configuration Patterns

- All Lambdas use ARM64 architecture and Java 21/Node.js 22
- Memory allocation uses constants from `infra/lib/constants.ts` (QUARTER_VCPU = 512MB)
- Standard 15-second timeout
- Environment variables for Java optimization: `JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1'`
- JSON logging format with structured log levels

### Java Templates Structure

- Multi-module Maven project with parent POM managing dependencies
- Gradle wrapper for alternative build system
- AWS Lambda Core, Events, and Powertools dependencies pre-configured
- Log4j2 logging with SLF4J facade
- JUnit 5 and AssertJ for testing

### Build Artifacts

- Java: ZIP files in `target/` (Maven) or `build/distributions/` (Gradle)
- TypeScript: Bundled automatically by CDK NodejsFunction construct

## CI/CD

The project uses GitHub Actions with two workflows:

- `build-infra.yml` - Tests infrastructure code (runs on `infra/` changes)
- `build-java.yml` - Tests Java code with both Maven and Gradle (runs on `java/` changes)

## Testing Strategy

- CDK: Snapshot tests verify CloudFormation template generation
- Java: Unit tests using JUnit 5 with mock Lambda contexts
- Infrastructure tests use dummy assets to avoid requiring built Lambda packages

## Key Dependencies

- AWS CDK v2 for infrastructure
- AWS Lambda Java Core/Events/Powertools
- Node.js 22+ and Java 21 runtimes
- ESLint/Prettier for TypeScript code quality
- Maven/Gradle for Java builds

## Documentation References

### AWS Services

- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)
- [AWS CDK v2 API Reference](https://docs.aws.amazon.com/cdk/api/v2/)
- [AWS Lambda Powertools for Java](https://docs.powertools.aws.dev/lambda/java/latest/)
- [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html)

### Build Tools & Frameworks

- [Maven Central Repository](https://search.maven.org/)
- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [Node.js 22 Documentation](https://nodejs.org/docs/latest-v22.x/api/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Testing & Quality

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [AssertJ Documentation](https://assertj.github.io/doc/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
