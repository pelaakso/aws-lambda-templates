import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const input = typeof event === 'string' ? event : JSON.stringify(event);
  console.debug(`Lambda input event: ${input}`);
  console.debug(`Lambda input context: ${JSON.stringify(context)}`);

  console.info(`Function ${context.functionName}:${context.functionVersion} handler was called`);

  // Print out environment variables
  console.debug('Environment variables:');
  console.debug(JSON.stringify(process.env, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: '200 OK',
    }),
  };
};
