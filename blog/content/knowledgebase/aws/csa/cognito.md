---
title: AWS Cognito
path: "/knowledge/aws-csa/cognito"
excerpt: Learn more about AWS Cognito.
---

## Cheat Sheet

- Cognito is a decentralized managed authentication system. You can easily add authentication to your mobile and desktop application.
- **User Pools**: user directory, allows users to authenticate using **OAuth** to **IpD** such as Facebook, Google, Amazon to connect to web-applications. Cognito User Pool is in itself an IpD.
- User Pools use **JWTs** to persist authentication.
- **Identity Pools**: provide temporary AWS credentials to access services.
- **Cognito Sync**: can sync user data and preferences across devices with one line of code.
- **Web Identity Federation**: exchange identity and security information between an IdP and an application.
- **Identity Provider (IdP)**: a trusted provider of your user identity that lets you use authentication to access other services. eg. Facebook, Twitter, Google, Amazon
- **OIDC**: type of IdP which uses OAuth.
- **SAML**: type of IdP which is used for Single Sign-on.