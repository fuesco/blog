---
title: AWS Amazon Machine Image (AMI)
path: "/knowledge/aws-csa/ami"
excerpt: Learn more about AWS Amazon Machine Image (AMI).
---

## Cheat Sheet

- **Amazon Machine Image (AMI)**
- Provides the information required to launch an instance.
- AMIs are region specific, if you need to use an AMI in another region, you can copy an AMI into the destination region via **Copy AMI**.
- You can **create an AMI** from an existing EC2 instance that's either **running** or **stopped**.
- **Community AMI** are free AMIs maintained by the community.
- **AWS Marketplace** has free or paid subscription AMIs maintained by vendors.
- AMIs have an **AMI ID**. The same AMI eg. (Amazon Linux 2) will vary in both AMI ID and architectural options.
- An AMI holds the following information:
  - A template for the root volume for the instance (EBS Snapshot or Instance Store template) eg. an operating system, an application server, and applications.
  - Launch permissions that control which AWS accounts can use the AMI to launch instances.
  - A block device mapping that specifies the volumes to attach to the instance when launched.