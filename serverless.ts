import type { AWS } from '@serverless/typescript';

import * as Resources from '@resources/sls.resources';
import * as environment from '@resources/sls.environment';
import * as functions from '@functions/*';

const serverlessConfiguration: AWS = {
  service: 'learning-aws',
  frameworkVersion: '2',
  package: {
    individually: true,
  },
  custom: {
    'serverless-offline': {
      httpPort: 3003,
    },
    dynamodb: {
      start: {
        port: 5000,
        inMemory: true,
        migrate: true,
      },
      stages: 'dev',
    },
  },
  plugins: ['serverless-bundle', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'us-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment,
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions,
  resources: {
    Resources,
  },
};

module.exports = serverlessConfiguration;
