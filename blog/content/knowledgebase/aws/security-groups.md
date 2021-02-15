---
title: AWS Security Groups
path: "/knowledge/aws-csa/security-groups"
excerpt: Learn more about AWS Security Groups.
---

## Cheat Sheet

- Acts as a **firewall** at the instance level.
- Unless allowed specifically, all inbound traffic is **blocked by default**.
- All **OUTBOUND** traffic is **ALLOWED** by default.
- You can specify for the source to be an IP range, single IP address, or another security group.
- Security groups are **STATEFUL**. (traffic allowed inbound is also allowed outbound)
- Any changes to the security group take effect immediately.
- EC2 instances can belong to multiple security groups.
- Security groups can contain multiple EC2 instances.
- You **CANNOT** block a specific IP address, you would need a NACL.
- You can have up to 10,000 SGs per region. (2,500 by default)
- You can have 60 inbound and 60 outbound rules per SG.
- You have can 16 SGs associated to an ENI. (5 by default)