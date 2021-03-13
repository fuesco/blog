---
title: AWS Elastic File System (EFS)
path: "/knowledge/aws-csa/efs"
excerpt: Learn about AWS Elastic File System (EFS).
---

## Cheat Sheet

- **Elastic File System** (EFS) supports the Network File System version 4 (NFSv4) protocol.
- You can **GB of storage per month**.
- Volumes scan scale to **petabyte** size storage.
- Can support thousands of concurrent connections over NFS.
- Your data is stored across multiple AZs within a region.
- Can mount multiple EC2 instance to a single EFS (as long as they are in the same VPC).
- Creates **Mount Points** in all you VPC subnets so you can mount from anywhere within the VPC.
- Provides **Read After Write** consistency.
- freeCodeCamp [YouTube](https://www.youtube.com/watch?v=Ia-UEYYR44s&t=15827s)