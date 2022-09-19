# run

Command run used to run mario generator. Before you use `neo`, recommanded go through [Run Mario](/guide/run-mario) first.

## TL;DR

|Command|Description|
|:---:|:---:|
|`neo run <npm-package|filepath>`|run mario geneartor|

## Supported mario geneartor location

By default `neo` load mario geneartor from npm package `main` field, e.g.

```sh
neo run @aiou/generator-ci
```

You also run mario geneartor defined by local yaml file, e.g.

```sh
neo run path/generator.yaml
```
