import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
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

export class TypescriptStack extends Stack {
  constructor(scope: Construct, id: string, props?: Props) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, 'BlankTypescript', {
      entry: './typescript/blank-typescript/handler.ts',
      handler: 'handler',
      functionName: 'blank-typescript-template',
      description: 'Blank Lambda template using Typescript',
      architecture: lambda.Architecture.ARM_64,
      runtime: lambda.Runtime.NODEJS_24_X,
      memorySize: LambdaMemory.QUARTER_VCPU,
      timeout: Duration.seconds(15),
      loggingFormat: lambda.LoggingFormat.JSON,
      applicationLogLevelV2: lambda.ApplicationLogLevel.DEBUG,
      systemLogLevelV2: lambda.SystemLogLevel.INFO,
    });
  }
}
