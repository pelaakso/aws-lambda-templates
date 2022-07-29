import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as Java from '../lib/java-stack';
import { expect, test } from 'vitest';

test('Java stack snapshot', () => {
  const stack = new cdk.Stack();

  const myStack = new Java.JavaStack(stack, 'MyTestStack', {
    env: { account: '140966923789', region: 'eu-central-1' },
    isUnitTest: true,
  });

  const template = Template.fromStack(myStack);

  // Replace all 64 byte asset hashes, because they are likely to change from build to build.
  // For example 02eaccf2c7a5bca24a1360de04a6ec227dfbebb07d930a867f0fe8ee5fc32f4d.zip
  expect.addSnapshotSerializer({
    test: (val) => (typeof val === 'string' && val.match(/[0-9a-f]{64}.zip/) ? true : false),
    print: (val) => {
      if (typeof val === 'string') {
        return val.replace(/[0-9a-f]{64}.zip/, '64-byte-asset-hash-removed.zip');
      }
      return `${val}`;
    },
  });

  expect(template).toMatchSnapshot();
});
