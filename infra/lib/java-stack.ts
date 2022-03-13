import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class JavaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'BlankJava', {
      code: lambda.Code.fromAsset('../java/blank-java/target/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: 'be.petey952.blankjava.Handler',
      runtime: lambda.Runtime.JAVA_11,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 512,
      timeout: Duration.seconds(15),
      functionName: 'blank-java-template-mvn',
      description: 'Blank Lambda template using Java, Maven build',
    });

    new lambda.Function(this, 'BlankJavaWithPowertools', {
      code: lambda.Code.fromAsset(
        '../java/blank-java-with-powertools/target/blank-java-with-powertools-0.0.1-SNAPSHOT-package.zip'
      ),
      handler: 'be.petey952.blankjavapowertools.Handler',
      runtime: lambda.Runtime.JAVA_11,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 512,
      timeout: Duration.seconds(15),
      environment: {
        POWERTOOLS_SERVICE_NAME: 'BlankJavaTemplateWithPowertools',
      },
      functionName: 'blank-java-template-with-powertools-mvn',
      description: 'Blank Lambda template using Java with Powertools, Maven build',
    });

    new lambda.Function(this, 'BlankJavaGradle', {
      code: lambda.Code.fromAsset('../java/blank-java/build/distributions/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: 'be.petey952.blankjava.Handler',
      runtime: lambda.Runtime.JAVA_11,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 512,
      timeout: Duration.seconds(15),
      functionName: 'blank-java-template-gradle',
      description: 'Blank Lambda template using Java, Gradle build',
    });

    new lambda.Function(this, 'BlankJavaWithPowertoolsGradle', {
      code: lambda.Code.fromAsset(
        '../java/blank-java-with-powertools/build/distributions/blank-java-with-powertools-0.0.1-SNAPSHOT-package.zip'
      ),
      handler: 'be.petey952.blankjavapowertools.Handler',
      runtime: lambda.Runtime.JAVA_11,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 512,
      timeout: Duration.seconds(15),
      environment: {
        POWERTOOLS_SERVICE_NAME: 'BlankJavaTemplateWithPowertoolsGradle',
      },
      functionName: 'blank-java-template-with-powertools-gradle',
      description: 'Blank Lambda template using Java with Powertools, Gradle build',
    });
  }
}
