// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
aws_app_analytics : 'enable',
aws_cloud_logic : 'enable',
aws_cloud_logic_custom : '[{"id":"gp12j8xl14","name":"Pets","description":"","endpoint":"https://gp12j8xl14.execute-api.eu-west-2.amazonaws.com/Development","region":"eu-west-2","paths":["/items","/items/123"]}]',
aws_cognito_identity_pool_id : 'eu-west-2:9b334d12-bebd-40fa-a1a9-52aed543e5ab',
aws_cognito_region : 'eu-west-2',
aws_content_delivery : 'enable',
aws_content_delivery_bucket : 'reactnativestarter-hosting-mobilehub-31181827',
aws_content_delivery_bucket_region : 'eu-west-2',
aws_content_delivery_cloudfront : 'enable',
aws_content_delivery_cloudfront_domain : 'd3gif2lzf4mp7v.cloudfront.net',
aws_dynamodb : 'enable',
aws_dynamodb_all_tables_region : 'eu-west-2',
aws_dynamodb_table_schemas : '[{"tableName":"reactnativestarter-mobilehub-31181827-pets","attributes":[{"name":"userId","type":"S"},{"name":"petId","type":"S"}],"indexes":[],"region":"eu-west-2","hashKey":"userId","rangeKey":"petId"}]',
aws_mobile_analytics_app_id : '9c952958a853473d81361372ee21f0e2',
aws_project_id : 'e15aab4c-2467-4426-8c33-76766bbe784e',
aws_project_name : 'reactnative-starter',
aws_project_region : 'eu-west-2',
aws_resource_bucket_name : 'reactnativestarter-deployments-mobilehub-31181827',
aws_resource_name_prefix : 'reactnativestarter-mobilehub-31181827',
aws_sign_in_enabled : 'enable',
aws_user_files : 'enable',
aws_user_files_s3_bucket : 'reactnativestarter-userfiles-mobilehub-31181827',
aws_user_files_s3_bucket_region : 'eu-west-2',
aws_user_pools : 'enable',
aws_user_pools_id : 'eu-west-2_8CQQBEbe2',
aws_user_pools_mfa_type : 'ON',
aws_user_pools_web_client_id : '56gi9lisrumr64s9ve1lusnrjs',
aws_user_settings : 'enable',
}

export default awsmobile;
var AWS = require('aws-sdk');
AWS.config.region = awsmobile.aws_project_region;
AWS.config.update({customUserAgent: 'MobileHub v0.1'});