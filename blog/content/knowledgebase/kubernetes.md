---
title: Kubernetes
path: "/knowledge/kubernetes"
excerpt: What is Kubernetes?
---

# Kubernetes

<img alt="kubernetes logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg" width="300px" />

> Credits: [What is Kubernetes?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

**Kubernetes** is a portable, extensible, and open-source platform for managing containerized workloads and services. It facilitates both declarative configuration and automation. [Learn more](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

## Deployment Eras

![deployment eras](https://d33wubrfki0l68.cloudfront.net/26a177ede4d7b032362289c6fccd448fc4a91174/eb693/images/docs/container_evolution.svg)

* **Traditional deployment era**: organizations ran applications on physical servers. There was no way to define resource boundaries for applications in a physical server, and this caused resource allocation issues. A solution was to run each application on a different server, but this did not scale as resources were underutilized and expensive to maintain.

* **Virtual deployment era**: virtualization allows you to run multiple Virtual Machines (VMs) on a single physical server's CPU. It allows applications to be isolated between VMs and provides a level of security as the information cannot be freely accessed between applications.

  Virtualization allows for better usage of physical resources and enables scalability though adding/updating applications easily. It reduces hardware costs and you can present a set of resources as a cluster of disposable virtual machines.

  Each VM is a full machine running all the components. (operating system on top of the virtualized hardware)

* **Container deployment era**: containers are similar to VMs, but they have relaxed isolation properties to share the Operating System (OS) among applications. Therefore, containers are considered lightweight. Similar to a VM, a container has its own file system, CPU, memory, process space, and more. Containers are portable across clouds and OS distributions.

  Containers provide extra benefits such as:
  * Agile application creation and deployment: increased ease and efficiency of container image creation compared to VM image use.
  * Continous development, integration, and deployment: provides for reliable and frequent container image build and deploymnet with easy rollback (due to image immutability).
  * Dev and Ops seperation of concerns: create application container images at build/release time rather than deployment time, decouples applications from infrastructure.
  * Can observe OS-level information and metrics, and also application health and other signals.
  * Environmental consistency across development, testing, and production: Runs the same on a laptop as it does in the cloud.
  * Cloud and OS distribution portability: Runs on Ubuntu, RHEL, CoreOS, on-premise, on major public clouds, and anywhere else.
  * Application-centric management
  * Loosely coupled, distributed, elastic, librerated micro-services.
  * Resource isolation: predictable application performance.
  * Resource utilization: high efficiency and density.
  
