#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { HelloCdkStack } from "../lib/hello-cdk-stack";

const app = new cdk.App();
new HelloCdkStack(app, "HelloCdkStack", {
  env: { account: "940863285927", region: "ap-northeast-1" },
});
