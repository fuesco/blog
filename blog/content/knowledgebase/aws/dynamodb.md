---
title: AWS DynamoDB
path: "/knowledge/aws-csa/dynamodb"
excerpt: Learn about AWS DynamoDB.
---

## Cheat Sheet

- **DynamoDB** is a fully managed **NoSQL** key/value and document database.
- Applications that contain large amounts of data but require predictable read and write performance while scaling is a good fit for DynamoDB.
- DynamoDB scales with whatever **read and write capacity you specify** per second.
- DynamoDB can be set to have **Eventually Consistent Reads(default)** and **Strong Consistent Reads**.
  - **Eventually Consistent Reads(default)**: data is returned immediately but data can be inconsistent. Copies of data will be generally consistent in 1 second.
  - **Strong Consistent Reads**: will wait until data is consistent. Data will never be inconsistent but latency will be higher. Copies of dta will be consistent with a guarantee of 1 second.
- DynamoDB stores 3 copies of data on SSD drives across 3 regions.

> Learn more on [AWS DynamoDB](https://aws.amazon.com/dynamodb/)