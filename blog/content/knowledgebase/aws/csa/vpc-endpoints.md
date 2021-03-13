---
title: AWS VPC Endpoints
path: "/knowledge/aws-csa/vpc-endpoints"
excerpt: Learn more about AWS VPC Endpoints.
---

## Cheat Sheet

- VPC Endpoints help keep traffic between AWS Services **within the AWS network**.
- There are two kinds of VPC Endpoints (Interface & Gateway).
- Interface Endpoints **cost money**. Gateway Endpoints are **free**.
- Interface Endpoints use an Elastic Network Interface (ENI) with Private IP (AWS PrivateLink).
- Gateway Endpoints is a target for a specific route in your route table.
- Interface Endpoints support many AWS services.
- Gateway Endpoints only support DynamoDB and S3.

> Learn more on [AWS VPC](https://aws.amazon.com/vpc/)