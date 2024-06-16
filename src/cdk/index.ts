#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StaticSite } from "./static-site";

const app = new cdk.App();
new StaticSite(app, "NodejsAwsShopReactStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stackName: "NodejsAwsShopReactStack",
  description: "The AWS CDK stack for the Node.js AWS Shop Frontend",
  tags: {
    project: "nodejs-aws-shop",
    stack: "frontend",
  },
});

app.synth();
