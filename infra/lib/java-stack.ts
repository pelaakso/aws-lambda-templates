import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class JavaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'BlankJava', {
      code: lambda.Code.fromAsset('../java/blank-java/target/blank-java-0.0.1-SNAPSHOT-package.zip'),
      handler: '',
      runtime: lambda.Runtime.JAVA_11,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 512,
      timeout: Duration.seconds(15),
      functionName: 'blank-java-template',
      description: 'Blank Lambda template using Java',
    });
  }
}
