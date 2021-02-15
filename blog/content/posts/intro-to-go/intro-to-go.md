---
title: "Introduction to Go"
path: "/intro-to-go"
tags: ["Software"]
featuredImage: "./cover.jpg"
excerpt: A quick overview of the Go language from the free tutorial on the freeCodeCamp's YouTube channel.
created: 2020-05-27
updated: 2020-05-27
---

> This tutorial is based on a portion of the Golang Tutorial by Michael Van Sickle on freeCodeCamp's YouTube channel.

## Who created Go?

Robert Griesmar, Rob Pike, and Ken Thompson released the first version of the Go language in March 2012. As members of Google and strong contributors to the open source community, the three recognized common limitations in the popular programming languages we use today.

## Why was Go created?

* Python (easy to use, but slow)
* Java (quick, but complex type system)
* C/C++ (quick, but complex type system and slow compile times)

## Go (golang)

* strong and statically typed
* excellent community
* key features: simplicity, fast compile times, garbage collected, built-in concurrency, compiles to standalone binaries
* [golang.org](https://golang.org/)
* [Go Playground](https://play.golang.org)


## Installing Go

1. Download [go](https://golang.org/dl/). This package installs the go distribution to `/usr/local/go`.

2. On macOS, open `.bash_profile` and update the path variable to include go:

```bash
export PATH=$PATH:/usr/local/go/bin

export GOPATH=/Users/navalmonga/golib
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$GOPATH:/Users/navalmonga/gocoding
```

## Hello World

```go
package main
import "fmt"
func main() {
  fmt.Println("Hello World")
}
```

## Variables

```go
var i int
i = 42
var j int = 44
k := 46
```


---

*Cover by [@mitchel3uo](https://unsplash.com/@mitchel3uo) on Unsplash.*
