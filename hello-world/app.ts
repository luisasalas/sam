import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import * as router from 'aws-lambda-router'


export const lambdaHandler = (event: APIGatewayProxyEvent, eventContext: Context): Promise<APIGatewayProxyResult> => {
    debugger
    return router.handler({
        proxyIntegration: {
            routes: [
                {
                    // request-path-pattern with a path variable:
                    path: '/hello',
                    method: 'GET',
                    // we can use the path param 'id' in the action call:
                    action: (request, context) => {
                        debugger
                        return {
                            statusCode: 200,
                            body: JSON.stringify({})
                        };
                    }
                },
                {
                    // request-path-pattern with a path variable in Open API style:
                    path: '/section/{id}',
                    method: 'GET',
                    // we can use the path param 'id' in the action call:
                    action: (request, context) => {
                        return {
                            statusCode: 200,
                            body: JSON.stringify({})
                        };
                    }
                }
            ]
        }
    })(event as any, eventContext)
};
