---
title: AWS Network Address Translation (NAT) Instance/Gateway
path: "/knowledge/aws-csa/nat"
excerpt: Learn more about AWS NAT instances and NAT gateways.
---

## Cheat Sheet

### NAT Instance

- When creating a NAT instance, you must disable source and destination checks on the instance.
- NAT instances must exist in the public subnet.
- You must have a route out of the private subnet to the NAT instance.
- The size of the NAT instance determines how much traffic is handled.
- High availability can be achieved using ASGs, multiple subnets in different AZs, and automate failover between them using a script.

### NAT Gateway

- NAT Gateways are **redundant** inside an **AZ**. (can survive failure of EC2 instance)
- You can only have 1 NAT Gateway inside 1 AZ. (cannot span AZs)
- Starts @ 5 Gbps and scales up to 45 Gbps.
- **Preferred** setup for enterprise systems.
- There are no requirements to patch NAT Gateways, and there is no need to disable **Source/Destination checks**. (unlike NAT instances)
- NAT Gateways are automatically assigned a **public IP address**.
- **Route Tables** for the NAT Gateway **MUST** be updated.
- Resources in multiple AZs sharing a Gateway will lose internet access if the Gateway goes down. You can **create a Gateway in each AZ** and configure route tables accordingly.