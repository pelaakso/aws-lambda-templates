import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

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
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 512,
      timeout: Duration.seconds(15),
    });
  }
}
