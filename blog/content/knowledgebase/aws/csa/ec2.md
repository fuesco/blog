---
title: AWS Elastic Compute Cloud (EC2)
path: "/knowledge/aws-csa/ec2"
excerpt: Learn about AWS Elastic Compute Cloud (EC2).
---

## Cheat Sheet

- Elastic Compute Cloud (EC2) is a cloud computing service.
- Configure your EC2 by choosing the OS, Storage Class, Memory, and Network throughput.
- Launch and SSH into your server in minutes.
- EC2 comes in a variety of Instance Types for different roles:
  - General Purpose: balance of compute, memory, and networking resources.
  - Compute Optimized: ideal for compute bound applications that benefit from high performance processors.
  - Memory Optimized: fast performance for workloads that process large data sets in memory.
  - Accelerated Optimized: hardware accelerators, or co-processors.
  - Storage Optimized: high, sequential read and write access to very large data sets on local storage.
- Instance sizes generally double in price and key attributes.
- Placement Groups: let you choose the logical placement of your instance to optimize communication, performance, or durability. Placement groups are free.
- **UserData**: a script that will automatically run when launching an EC2 instance.
- **MetaData**: meta data about the current instance. You can access via SSH to endpoint. eg. `curl https://169.254.169.254/latest/meta-data` (instance type, current ip, etc.)
- **InstanceProfiles**: a container for an IAM role that you can use to pass role information to your EC2 when the instance starts.

## Pricing Models

- EC2 has 4 pricing models: On-Demand, Spot, Reserved Instance (RI), and Dedicated.
- **On-Demand** (least commitment)
  - low cost and flexible
  - only pay per hour
  - Use case: short-term, spiky, unpredictable workloads, first time apps
  - ideal when your workloads cannot be interrupted
- **Reserved Instances (RI)** 75% off (best for long-term)
  - Use case: steady state or predictable usage
  - Can resell unused reserved instances (Reserved Instance Marketplace)
  - Reduced pricing is based on **Term** x **Class Offering** x **Payment Option**
  - Payment terms: 1 year or 3 years
  - Payment options: All Upfront, Partial Upfront, and No Upfront
  - Class Offerings:
    - Standard: Up to 75% reduced pricing to on-demand. Cannot change RI attributes.
    - Convertible: Up to 54% reduced pricing to on-demand. Allows you to change RI attributes if greater or equal in value.
    - Scheduled: You reserved instances for specific time periods. eg. once a week for an hour, savings vary
- **Spot Pricing** 90% off (biggest savings)
  - request spare computing capacity
  - flexible start and end times
  - Use case: can handle interruptions (server randomly stopping and starting)
  - Use case: for non-critical background jobs
  - instances can be terminated by AWS at **anytime**
  - if you instance is terminated by AWS, you don't get charger for a partial hour of usage
  - if you terminate the instance, you will be charged for any hour that it ran
- **Dedicated Hosting** (most expensive)
  - dedicated servers
  - can be on-demand or reserved (up to 70% off)
  - Use case: when you need a guarantee of isolate hardware (enterprise requirements)