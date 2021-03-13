---
title: AWS VPC Network Access Control List (NACL)
path: "/knowledge/aws-csa/vpc-nacl"
excerpt: Learn more about AWS VPC Network Access Control Lists (NACLs).
---

## Cheat Sheet

- Network Access Control List is commonly known as **NACL**.
- VPCs are automatically given a default NACL which **ALLOWS** all **outbound** and **inbound** traffic.
- Each subnet within a VPC **MUST** be associated with a NACL. (Subnets can only be associated with 1 NACL at a time, **new will remove old**)
- If a NACL is not explicitly associated with a subnet, the subnet will automatically be associated with the **default NACL**.
- NACL has inbound and outbound rules. (like Security Groups)
- Rule can **ALLOW** or **DENY** traffic. (unlike Security Groups which only **ALLOW**)
- NACLs are **STATELESS**. (any inbound is also allowed outbound)
- When you create a NACL it will **DENY** all traffic by default.
- NACLs contain a numbered list of rules that get evaluated in order. (**lowest to highest**)
- If you need to block a **single IP address** you can use NACL.

> Learn more on [AWS VPC](https://aws.amazon.com/vpc/)