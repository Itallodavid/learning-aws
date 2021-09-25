import { ILambdaHandler } from '../../interfaces/lambda.handler';
import { handlerPath } from '../../utils/handlerResolver';

export default <ILambdaHandler> {
  handler: handlerPath(__dirname),
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
      },
    },
  ],
};
