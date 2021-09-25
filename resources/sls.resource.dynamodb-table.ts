export const TodoTable = <const> {
  Type: 'AWS::DynamoDB::Table',
  Properties: {
    TableName: process.env.TABLE_NAME,
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
  },
};
