---
title: AWS Snowball
path: "/knowledge/aws-csa/snowball"
excerpt: Learn more about AWS Snowball.
---

## Cheat Sheet

- **Snowball** and **Snowball Edge** is a rugged container which contains a storage device.
- **Snowmobile** is a 45-foot long ruggedized shipping container, pulled by a semi-truck.
- Snowball and Snowball Edge is for **peta-scale** migration. Snowmobile is for **exabyte-scale** migration.
- **Low Cost** thousands of dollars to transfer 100TB over high speed internet, Snowball is **1/5th**.
- **Speed** 100TB over 100 days to transfer over high speed internet, Snowball takes **less than a week**.
- Snowball comes in two sizes:
  - 50TB (42TB usable)
  - 80TB (72TB usable)
- Snowball Edge comes in two sizes:
  - 100TB (83TB usable)
  - 100TB Clustered (45TB per node)
- Snowmobile comes in one size: **100PB**.
- You can both export and import data using Snowball or Snowmobile.
- You can import into S3 or Glacier.
- Snowball Edge can undertake local processing and edge-computing workloads.
- Snowball Edge can be used in a cluster in groups of 5 to 10 devices.
- Snowball Edge provides three options for device configuration:
  - storage optimized (24 vCPUs)
  - compute optimized (54 vCPUs)
  - GPU optimized (54 vCPUs)

> Learn more on [AWS Snowball](https://aws.amazon.com/snowball/)
