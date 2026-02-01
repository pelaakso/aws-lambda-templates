import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaMemory } from './constants';

export interface Props extends StackProps {
  /**
   * Is this stack being created as part of a unit test?
   * If so, a dummy code asset is used so that real code assets don't need to exist.
   *
   * @default - It is assumed that stack is not created as part of unit test and real asset path is used.
   */
  readonly isUnitTest?: boolean;
}

export class JavaStack extends Stack {
  constructor(scope: Construct, id: string, props?: Props) {
    super(scope, id, props);

    const architecture = lambda.Architecture.ARM_64;
    const mavenRuntime = lambda.Runtime.JAVA_25;
    const gradleRuntime = lambda.Runtime.JAVA_25;

    new lambda.Function(this, 'BlankJava', {
      code: props?.isUnitTest
        ? lambda.Code.fromAsset('./test/resources/dummy-code.zip')
        : lambda.Code.fromAsset('../java/blank-java/target/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: 'be.petey952.blankjava.Handler',
      runtime: mavenRuntime,
      architecture,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      environment: {
        JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1',
      },
      functionName: 'blank-java-template-mvn',
      description: 'Blank Lambda template using Java, Maven build',
    });

    const fnBlankSnapStartMvn = new lambda.Function(this, 'BlankJavaSnapStart', {
      code: props?.isUnitTest
        ? lambda.Code.fromAsset('./test/resources/dummy-code.zip')
        : lambda.Code.fromAsset('../java/blank-java/target/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: 'be.petey952.blankjava.Handler',
      runtime: mavenRuntime,
      architecture,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      //environment: {
      //  JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1',
      //},
      currentVersionOptions: {
        removalPolicy: RemovalPolicy.RETAIN,
      },
      snapStart: lambda.SnapStartConf.ON_PUBLISHED_VERSIONS,
      functionName: 'blank-java-template-snapstart-mvn',
      description: 'Blank Lambda template using Java and SnapStart, Maven build',
    });
    // used to make sure each CDK synthesis produces a different Version
    const version = fnBlankSnapStartMvn.currentVersion;
    new lambda.Alias(this, 'BlankJavaSnapStartAlias', {
      aliasName: 'current',
      version,
      description: '"current" alias refers to latest version of the function',
    });

    new lambda.Function(this, 'BlankJavaWithPowertools', {
      code: props?.isUnitTest
        ? lambda.Code.fromAsset('./test/resources/dummy-code.zip')
        : lambda.Code.fromAsset(
            '../java/blank-java-with-powertools/target/blank-java-with-powertools-0.0.1-SNAPSHOT-package.zip',
          ),
      handler: 'be.petey952.blankjavapowertools.Handler',
      runtime: mavenRuntime,
      architecture,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      environment: {
        JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1',
        POWERTOOLS_SERVICE_NAME: 'BlankJavaTemplateWithPowertools',
      },
      functionName: 'blank-java-template-with-powertools-mvn',
      description: 'Blank Lambda template using Java with Powertools, Maven build',
    });

    new lambda.Function(this, 'BlankJavaGradle', {
      code: props?.isUnitTest
        ? lambda.Code.fromAsset('./test/resources/dummy-code.zip')
        : lambda.Code.fromAsset('../java/blank-java/build/distributions/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: 'be.petey952.blankjava.Handler',
      runtime: gradleRuntime,
      architecture,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      environment: {
        JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1',
      },
      functionName: 'blank-java-template-gradle',
      description: 'Blank Lambda template using Java, Gradle build',
    });

    new lambda.Function(this, 'BlankJavaWithPowertoolsGradle', {
      code: props?.isUnitTest
        ? lambda.Code.fromAsset('./test/resources/dummy-code.zip')
        : lambda.Code.fromAsset(
            '../java/blank-java-with-powertools/build/distributions/blank-java-with-powertools-0.0.1-SNAPSHOT-package.zip',
          ),
      handler: 'be.petey952.blankjavapowertools.Handler',
      runtime: gradleRuntime,
      architecture,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      environment: {
        JAVA_TOOL_OPTIONS: '-XX:+TieredCompilation -XX:TieredStopAtLevel=1',
        POWERTOOLS_SERVICE_NAME: 'BlankJavaTemplateWithPowertoolsGradle',
      },
      functionName: 'blank-java-template-with-powertools-gradle',
      description: 'Blank Lambda template using Java with Powertools, Gradle build',
    });
  }
}
