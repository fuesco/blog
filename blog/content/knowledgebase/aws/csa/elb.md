---
title: AWS Elastic Load Balancer (ELB)
path: "/knowledge/aws-csa/elb"
excerpt: Learn about AWS Elastic Load Balancer (ELB).
---

## Cheat Sheet

- There are three Elastic Load Balancers: **Network**, **Application**, and **Classic Load Balancer**.
- An Elastic Load Balancer must have **at least two** AZs.
- Elastic Load Balancers **cannot go cross-region**. You must create **one per region**.
- Application Load Balancers (ALB) has **Listeners**, **Rules**, and **Target Groups** to route traffic.
- Network Load Balancers (NLB) use **Listeners** and **Target Groups** to route traffic.
- Classic Load Balancers (CLB) use **Listeners** and EC2 instances **directly registered** as targets to CLB.
- **ALB** is for HTTP(S) traffic and the name implies it is good for **Web Applications**.
- **NLB** is fpr TCP/UDP and is good for high network throughput. eg. **Video Games**
- **CLB** is legacy and its recommended to use ALB or NLB.
- Use **X-Forwarded-For (XFF)** to get original IP of incoming traffic passing through ELB.
- You can attach **Web Application Firewall (WAF) to ALB** but not the NLB and CLB.
- You can attach Amazon Certification Manager SSL to any of the ELB for **SSL**.
- ALB has advanced **Request Routing Rules** where you can route based on subdomain header, path, and other HTTP(S) information.
- **Sticky Sessions** can be enabled for CLB or ALB and sessions are remembered via **Cookie**.
- freeCodeCamp [YouTube](https://www.youtube.com/watch?v=Ia-UEYYR44s&t=15827s)