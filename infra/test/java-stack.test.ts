import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as Java from '../lib/java-stack';

test('Java stack snapshot', () => {
  const stack = new cdk.Stack();

  const myStack = new Java.JavaStack(stack, 'MyTestStack', {
    env: { account: '140966923789', region: 'eu-central-1' },
  });

  const template = Template.fromStack(myStack);
  expect(template).toMatchSnapshot();
});
