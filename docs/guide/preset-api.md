# Preset API

presets define collection of templates and configs.

## Create a preset

`preset` is a normal npm package, you can publish preset package for share and download it from remote. Create you first preset with `neo create` in follow steps:

Use `@aiou/preset-demo` as template:

```sh
neo create @aiou/preset-demo my-preset-app
```

A empty preset project structure is probably like this:

```sh
.
├── CHANGELOG.md
├── README.md
├── assets
│   └── ci.yaml
├── index.json
└── package.json
```

Add all awesome template and config files you need into `index.json` file 

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

## Configuration

### template

- Type `{ name: string; perf: string }`

By default, neo create project by `template.perf`. If `perf` not defined, use `template.name` as fallback.

### config

- Type `{ name: string; perf: string }`

Define config file location by `config.perf`, identify config file by `config.name`.
