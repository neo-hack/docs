# Get Started

## Overview

This section will help your how to create and manage your template via `neo`.

## Install

With pnpm

```sh
$ pnpm install @aiou/neo -g
```

## Create a side project

Download remote `npm/git` repo into local store, and create new side project instantly.

```sh
$ neo create @aiou/react-template my-app
```

That's all, now goto `my-app`

```sh
cd my-app
code .
```

🎉 Happy coding 


:::info
`@aiou/react-template` is already cache in local store. At next time, neo prefer use local cached `@aiou/react-template` to create another side project.
:::

## Add starter template

You can also add remote starter template, create new side project later

```sh
$ neo add @aiou/react-template
```
