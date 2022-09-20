# create

Command create used to create new project from remote npm package or remote github repo. *Once create, will save `template` into local store. At second time, it will prefer create project from local store.*

## TL;DR

|Command|Description|
|:---:|:---:|
|`neo create npm-package local-project-name`|create project from remote npm-package|
|`neo create git-repo-url local-project-name`|create project from remote git-repo|

If already cached any project template in local, `neo create` will invoke interactive terminal ui to select template.

## Supported template location

### create from npm

By default, if multiple versions of `npm-package` cached. `neo create <npm-package>` will perfer create side project from latest cached npm package. You can also limit which npm-package with specific version tag, e.g.

`neo create <npm-package>@version`

:::warning
version range is not supported
:::

## Options

### `--latest`

By default, neo use cached template to create project. Force neo always use latest template to create project with option `--latest`.


### `--preset`

neo will display all available template list from local store. Filter templates by preset name e.g. `neo create --preset=neo`