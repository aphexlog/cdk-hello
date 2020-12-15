#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkHelloStack } from '../lib/cdk-hello-stack';

const app = new cdk.App();
new CdkHelloStack(app, 'CdkHelloStack');
