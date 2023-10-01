import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const input = typeof event === 'string' ? event : JSON.stringify(event);
  console.log(`Lambda input event: ${input}`);
  console.log(`Lambda input context: ${JSON.stringify(context)}`);

  console.log(`Function ${context.functionName}:${context.functionVersion} handler was called`);

  // Print out environment variables
  console.log('Environment variables:');
  console.log(JSON.stringify(process.env, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: '200 OK',
    }),
  };
};
