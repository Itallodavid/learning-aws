export interface ILambdaHandler {
  handler: string
  events: { http: any }[],
  [k: string]: any
}
