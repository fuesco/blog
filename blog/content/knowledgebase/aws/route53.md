---
title: AWS Route53
path: "/knowledge/aws-csa/route53"
excerpt: Learn more about AWS Route53.
---

## Cheat Sheet

- DNS provider, register and managed domains, create record sets. Think GoDaddy.
- Simple Routing: default routing policy, multiple addresses result in a random endpoint selection.
- Weighted Routing: split up traffic based on different 'weight' assigned. (percentages)
- Latency-Based Routing: directs traffic based on region, for lowest possible latency for users.
- Failover Routing: primary site in one location, secondary data recovery site in another. (change on health check)
- Geo-location Routing: route traffic based on the geographic location of a requests origin.
- Geo-proximity Routing: route traffic based on geographic location using 'Bias' values (need R53 Traffic Flow)
- Multi-value Answer Routing: returns multiple values in response to DNS queries. (using health checks)
- Traffic Flow: visual editor, for chaining routing policies, and version policy records for easy rollbacks.
- AWS Alias Record: Smart DNS record, detects IPs for AWS resources and adjusts automatically.
- Route53 Resolver: lets you regionally route DNS queries between your VPCs and your network Hybrid Environment.
- Health checks can be created to monitor and adjust over endpoints. You can have health checks of other health checks.