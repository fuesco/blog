---
title: AWS EC2 Auto Scaling Group (ASG)
path: "/knowledge/aws-csa/ec2-asg"
excerpt: Learn about AWS EC2 Auto Scaling Groups (ASG).
---

## Cheat Sheet

- An ASG is a collection of EC2 instances grouped for scaling and management.
- **Scaling Out** is when you **add** servers.
- **Scaling In** is when you **remove** servers.
- **Scaling Up** is when you **increase** the size of an instance. (eg. update the launch configuration)
- Size of an ASG is based on a Min, Max, and Desired Capacity.
- **Target Scaling Policy** scales based on when a target value for a metric is breached. eg. Average CPU > 75%
- **Simple Scaling** policy triggers a scaling when an alarm is breached.
- **Scaling Policy with Steps** is the new version of Simple Scaling and allows you to create steps based on escalation alarm values.
- Desired Capacity is how many EC2 instances you want to ideally run.
- An ASG will always launch instances to meet minimum capacity.
- Health checks determine the current state of an instance in the ASG.
- Health checks can be run against either an ELB or the EC2 instances.
- When an Autoscaling launches a new instance, it using a Launch Configuration which holds the values for the new instance. eg. AMI, InstanceType, Role
- Launch Configurations cannot be edited and must be cloned or a new one is created.
- Launch Configurations must be manually updated in by editing the Auto Scaling settings.