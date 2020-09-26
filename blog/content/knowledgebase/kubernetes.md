---
title: What is Kubernetes?
path: "/knowledge/kubernetes"
excerpt: Learn about the open-source orchestration engine for automated deployment, scaling and management of containerized apps. Project hosted by <a href="https://cncf.io/">(CNCF)</a>.
---

<img alt="kubernetes logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg" width="344px" />

> Content Credits: [What is Kubernetes?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

**Kubernetes** is a portable, extensible, and open-source platform for managing containerized workloads and services. It facilitates both declarative configuration and automation. Learn more [here](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/).

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

## Kubernetes Features

* **Service discovery and load balancing**: Kubernetes can expose a container using the DNS name or using their own IP address. If traffic to a container is high, Kubernetes is able to load balance and distribute the network traffic so deployment is stable.

* **Storage orchestration**: Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more.

* **Automated rollouts and rollbacks**: You can describe the desired state for deployed containers and can change at a controlled rate. For example, you can automate Kubernetes to create new containers for your deployment, remove existing containers and adopt all their resources to a new container.

* **Automatic bin packing**: You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs.

* **Self-healing**: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.

* **Secret and configuration management**: Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding you container images, and without exposing secrets in your stack configuration.


## Kubernetes Components

When you deploy Kubernetes, you get a cluster.

A Kubernetes cluster consists of a set of worker machines, called nodes, that run containerized applications. Every cluster has at least one worker node.

Worker node(s) host the Pods that are the components of the application workload. The control plane manages the worker nodes and the Pods in the cluster. In **production** environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing **fault-tolerance** and **high availability**.

### Control Plane Components
The control plane's components make global decisions about the cluster (eg. scheduling), as well as detecting and responding to cluster events. (eg. starting a new pod when deployment's replicas field is unsatisfied)

Control plane components can be run on any machine in the cluster. Set up scripts typically start all control plane components on the same machine, and do not run user containers on this machine.

* **kube-apiserver**
  * The API server is a component of the control plane that exposes the Kubernetes API. The front end for the Kubernetes control plane.
  * Main implementation of a Kubernetes API server. Designed to scale horizontally - scales by deploying more instances. You can run several instances of kube-apiserver and balance traffic between those instances.

* **etcd**
  * Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.
  * If your Kubernetes cluster uses etcd as its backing store, make sure you have a back up plan for that data.

* **kube-scheduler**

  
