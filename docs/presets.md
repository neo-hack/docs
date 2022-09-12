# Presets

presets define collection of templates and configs. `neo add npm-package --presets` will add lots of templates and config files into localstore.

## Usgae

### create a preset package

**Step1**

create npm package

```sh
$ npm init
```

**Step2**

(optional)create `assets` fold, add `ci.yaml`

**Step3**

create `index.json` file, add follow content into current file.

```json
{
  "configs": [
    {
      "name": "PNPM CI workflow",
      "pref": "./assets/ci.yaml"
    }
  ],
  "templates": [
    {
      "name": "@aiou/ts-lib-template",
      "pref": "@aiou/ts-lib-template"
    },
    {
      "name": "electron-boilerplate",
      "pref": "https://github.com/sindresorhus/electron-boilerplate"
    },
    {
      "name": "ts-lib-template",
      "pref": "https://github.com/egoist/ts-lib-starter"
    }
  ]
}
```

:::info
makesure `index.json` included in `packages.json` files filed.
:::

## Format

