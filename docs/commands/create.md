# create

use `neo` create new project from remote npm package or remote github repo. At sencond time or offline, it perfer create from local store.

## TL;DR

|Command|Description|
|:---:|:---:|
|`neo create npm-package local-project-name`|create project from remote npm-package|
|`neo create git-repo-url local-project-name`|create project from remote git-repo|

If already cached any project template in local, `neo create` will invoke interactive terminal ui to select template.

## Options

### `--latest`

Always use latest template to create project.
