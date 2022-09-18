# neo add

Command add used to save remote `npm package` or `git repo` template into local store.

## TL;DR

|Command|Description|
|:---:|:---:|
|`neo add npm-package`|add npm package template into local store|
|`neo add npm-package@version`|add specific version npm package template into local store|
|`neo add git-repo-url`|add github repo template into local store|

## Supported template location

### install from npm

By default, `neo add <npm-package>` will install latest npm package into local store. You can also install npm-package with specific version tag, e.g.

`neo add <npm-package>@version`

:::warning
version range is not supported
:::


## Options

### `--preset`

:::info
Recommanded read [preset](guide/manage-with-preset) before use option `--preset` 
:::

Add collection of config files and templates into local store. 