---
title: AWS VPC Endpoints
path: "/knowledge/aws/vpc/endpoints"
excerpt: Learn more about AWS VPC Endpoints.
---

## AWS VPC Endpoints Cheat Sheet

> AWS [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/)

> Content [Credits](https://www.youtube.com/watch?v=Ia-UEYYR44s)

- VPC Endpoints help keep traffic between AWS Services **within the AWS network**.

- There are two kinds of VPC Endpoints (Interface & Gateway).

- Interface Endpoints **cost money**. Gateway Endpoints are **free**.

- Interface Endpoints use an Elastic Network Interface (ENI) with Private IP (AWS PrivateLink).

- Gateway Endpoints is a target for a specific route in your route table.

- Interface Endpoints support many AWS services.

- Gateway Endpoints only support DynamoDB and S3.