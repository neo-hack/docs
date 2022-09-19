# list

use `neo` list display all avaliable templates in local. If template already cached, will be marked by green.

## TL;DR

|Command|Description|
|:---:|:---:|
|`neo list`|display all avaliable templates in local|
|`neo list configs`|display all avaliable config file in local|

## Options

### `--preset` 

list templates filtered by preset name. e.g. `neo list --preset=neo`

### `configs`

By default, `neo list` only display templates. Display all avaliable config file in local store with `neo list config`. *Selected config file will automatically copy filecontent into clipboard.*

![copy-config](/assets/copy-config.gif)


