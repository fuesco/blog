---
title: AWS Elastic Block Storage (EBS)
path: "/knowledge/aws-csa/ebs"
excerpt: Learn about AWS Elastic Block Storage (EBS).
---

## Cheat Sheet

- **Elastic Block Store (EBS)** is a virtual hard disk. Snapshots are a point-in-time copy of that disk.
- Volumes exist on EBS. Snapshots exists on S3.
- Snapshots are incremental, only changes made singe the last snapshot ar moved to S3.
- Initial Snapshots of an EC2 instance will take longer to create than subsequent Snapshots.
- If taking a snapshot of the root volume, the EC2 instance should be **STOPPED** before Snapshot.
- You can take snapshots while the instance is still **RUNNING**.
- You can create AMIs from Volumes, or from Snapshots.
- **EBS Volumes**: A durable, block-level storage device that you can attach to a single EC2.
- **EBS Volumes** can be modified on the fly. eg. storage type, volume size (Volumes always exist in the same AZ as the EC2 instance)
- **Instance Store Volumes**: A temporary storage type located on disks that are physically attached to a host machine.
- **Instance Store Volumes are ephemeral**, cannot be stopped. If the host fails, then you lose your data.
- EBS backed instances can be stopped and you will not lost any data.
- By default, root volumes are deleted on termination.
- EBS Volumes can have termination protection. (don't delete the volume on termination)
- Snapshots or restored encrypted volumes will also be encrypted.
- You cannot share a snapshot if it has been **encrypted**.
- **Un-encrypted snapshots** can be shared with other AWsS accounts or made public.