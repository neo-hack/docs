# Get Started

![get-started](/assets/get-started.gif)

## Overview

This section will help your how to create and manage your template via `neo`.

## Install

With pnpm

```sh
$ pnpm install @aiou/neo -g
```

## Create a side project

Download remote `npm/git` template into local store, and create new side project instantly.

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
`@aiou/react-template` is already cache in local store. At next time, neo prefer use local cached to create another side project. If any cached templates found in local, `neo create` will display all variable templates.
:::

## Save starter template

You can use commnd `add` cache remote starter template, then create new side project later.

```sh
$ neo add @aiou/react-template
```
