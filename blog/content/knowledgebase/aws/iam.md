---
title: AWS Identity Access Management (IAM)
path: "/knowledge/aws-csa/iam"
excerpt: Learn more about AWS Identity Access Management (IAM).
---

## Cheat Sheet

- Identity Access Management (IAM) is used to manage **access** to users and resources.
- IAM is a **universal** system. (applied to all regions at once)
- IAM is a **FREE** service.
- A root account is the account initially created when AWS is setup. (full administrator)
- New IAM accounts have no permissions by default until granted.
- New users get assigned an Access Key Id and Secret when first created. (programmatic)
- Access Keys are only used for the CLI and SDK. (cannot access console)
- Access Keys are only shown **ONCE** when created. If lost they must be deleted and recreated again.
- **ALWAYS SETUP MFA** for Root Accounts.
- Users must enabled MFA on their own. Administrator cannot turn it on for user.
- IAM allows you to set **password policies** to set minimum password requirements or rotating passwords.
- **IAM Identities**: as Users, Groups, and Roles.
- **IAM Users**: end users who log into the console or interact with AWS resources programmatically.
- **IAM Policies**: JSON documents which grant permissions for a specific user, group, or role to access services. Attaches to IAM Identities.
- **Managed Policies**: policies provided by AWS and cannot be edited.
- **Customer Managed Policies**: are policies created by and used by the customer, which you can edit.
- **Inline Policies**: policies which are directly attached to a user.