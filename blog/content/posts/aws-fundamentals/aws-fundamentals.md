---
title: "AWS Fundamentals"
path: "/aws-fundamentals"
tags: ["Cloud Computing"]
featuredImage: "./cover.jpg"
excerpt: Basics of cloud computing and how you can quickly get started with Amazon Web Services.
created: 2020-03-30
updated: 2020-03-30
---

**Cover by *[@alexmotoc](https://unsplash.com/@alexmotoc)* on Unsplash**

> 👋 Welcome y'all! This post is based on the [Amazon Educate](https://aws.amazon.com/education/awseducate/pathways-and-badges/) fundamentals course that introduces beginners to the basics of cloud computing and the different services available to developers on AWS Cloud.

## Cloud Computing

Cloud computing is the on-demand and pay-as-you-go delivery of compute power, database storage, applications, and other IT resources through a cloud services platform like AWS. You lost the need for massive initial capital investment and spend more time on provisioning only what you need via the AWS Console or APIs.

## History of AWS

Amazon Web Services began offering infrastructure services as web services in 2006. This gave businesses a low variable cost that could scale with your business. Today, AWS has a global infrastructure platform known for its reliability, scalability, and durability.


## Cloud Benefits

* **Trade capital expense for variable expense**: There is no need for initial investment in data centers and servers. You only pay when you consume computing resources, and you only pay for how much you consume.
  
* **Benefit from massive economies of scale**: You can achieve a lower variable cost than on your own. Usage from thousands of customers are aggregated in the cloud, allowing providers like AWS to offer lower pay-as-you-go prices.
  
* **Stop guessing capacity**: No need to guess infrastructure capacity needs. You are able to access as much or as little capacity your application needs, and scale up or down as required.


* **Increase speed and agility**: Reduced time to make resources available to developers and increased agility for the organization. The cost and time it takes to experiment and develop is much lower.
  
* **Stop spending money maintaining data centers**: You can focus on projects that differentiate your business. Cloud computing lets you focus on the customers, and leave the heavy lifting of server management to the cloud provider.
  
* **Go global rapidly**: Deploy your application is multiple regions around the world. This can provide lower latency and better experience for your customers at a minimal cost to you.

## Total Cost of Ownership

AWS reduced the total cost of ownership (TCO) by reducing the need to invest in large capital expenditures and provides a pay-as-you-go model that scales with your business. AWS provides a [TCO Calculator](https://awstcocalculator.com/) that estimates cost savings when using AWS and provides detailed reports that can be used in executive presentations.

## Types of Cloud Computing

Cloud computing is providing developers and IT departments with the ability to focus on innovation and avoid work like procurements, maintenance, and capacity planning. Several different models and deployment strategies have emerged to help specific needs of different users. Each type of cloud service, and deployment method, provides you with a different level of control, flexibility, and management. 

### Infrastructure as a Service (Iaas)

Contains the building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicate hardware), and data storage space. IaaS provides the highest level of flexibility and management control over your IT resources.

### Platform as a Service (PaaS)

Removes the need for organizations to manage the underlying infrastructure (usually hardware and operating systems) and allow you to focus on deployment and management of your application. This helps developers be more efficient as you lose the need to worry about resource procurements, capacity planning, software maintenance, patching, and any other undifferentiated heavy lifting involved in running your application.

### Software as a Service (Saas)

Provides you with a completed product that is run and managed by the service providers. In most cases, people referring to software as a service are referring to end-user applications. An example is a web-based email where you can snd and receive emails without having to manage feature additions to the product or maintain servers and operating systems the program is running on.

## Deployment Models

### Cloud

A cloud-based application is fully developed in the cloud and all parts of the application run in the cloud. Applications in the cloud have either been created in the cloud or have been migrated from an existing infrastructure. These can be built using low-level infrastructure pieces or use higher level services that provide abstraction from the management, architecting, and scaling requirements of core infrastructure.

### Hybrid

Hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources not located in the cloud. The most common method of hybrid deployment is between the cloud and existing on-premise infrastructure to extend the organization's infrastructure into the cloud and connecting cloud resources to the internal system.

### On-Premises

Using virtualization and resource management tools, on-premises deployment is sometimes called "private cloud". This deployment method is known for its ability to provide dedicated resources. 

## Global Infrastructure

The AWS Cloud infrastructure is built around AWS Regions and Availability Zones. An AWS Region is a physical location in the world where they have multiple Availability Zones. Availability Zones consist of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities. Availability Zones give you the ability to operate your applications and databases that are highly available, fault tolerant, and scalable.

## Security and Compliance

AWS places cloud security as their highest priority. The global network of data center and network architectures, built for the most security-sensitive organizations.

AWS Cloud enables a shared responsibility model. Which AWS manages security **of** the cloud, you are responsible for security **in**  the cloud. This means you retain control of the security you implement to protect your own content, platform, applications, systems, and networks no differently than you would in an on-site data center.

Finally, AWS environments are continuously audited, with certifications and accreditation bodies across geographies and verticals. Here are some key benefits of AWS Security:

* **Keep Your Data Safe**: AWS places strong safeguards to help protect your privacy. All data is stored in highly secure AWS data centers.
  
* **Meet Compliance Requirements**: AWS manages dozens of compliances programs in its infrastructure. This means segments of your compliance have already been handled.

* **Save Money**: Cut costs by using the AWS data centers. Maintain the highest standard of security without having to manage your own facility.

* **Scale Quickly**: Security scales with your AWS Cloud usage. No matter the size of your business, the AWS infrastructure is designed to keep your data safe.

More information on AWS Compliance is available in the [Risk and Compliance white-paper](http://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf) at the [AWS Security Center](https://aws.amazon.com/security/).

## References

* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/what-is-cloud-computing.html
* https://commons.wikimedia.org/wiki/File:Cloud_computing_layers.png
* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/introduction.html
* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html
* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/types-of-cloud-computing.html
* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/global-infrastructure.html
* https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/security-and-compliance.html
* https://aws.amazon.com/tco-calculator/

---