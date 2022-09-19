# Manage with preset

![manage-with-preset](/assets/manage-with-preset.gif)

## What is preset

`preset` is collection of config files and templates list. It help you batch add list of templates into your local store.

`preset` is a normal npm package, you can publish preset package for share and download it from remote. Create you first preset with `neo create` in follow steps:

```sh
neo create @aiou/preset-demo my-preset-app
```

A empty preset project structure is probably like this:

```
// TODO
```

Add all awesome template you need into `index.json` file 

```json
{
  "templates": [
    {
      "name": "@aiou/rollup-template"
    }
  ]
}
```

Make sure setup `index.json` at `package.json` main field:

```json
{
  "main": "index.json"
}
```


Now, you can publish it like normal npm package.

## Add preset

```sh
neo add <preset-package> --preset
```

neo will save templates listed in `<preset-package>` into local store. You can create side project from an interactive cli list.

## Build preset

Checkout [Preset API](/guide/preset-api) for documentation about creating preset package.
