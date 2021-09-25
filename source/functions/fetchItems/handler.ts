import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

export const main: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => ({
  body: `Hello ${process.env.TABLE_NAME}, ${event.body} welcome to the exciting Serverless world!`,
  statusCode: 200,
});
