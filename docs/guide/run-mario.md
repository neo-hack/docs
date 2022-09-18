# Run mario

## What is mario

`mario`, or another name `generator`. 

Mario is simple manipulate system based on `gulp`, has similar systax with `github workflow`. It will make these work much easier. 

After create new side project from `npm` or `git` template, you may also need to apply some modifies, e.g. change package name, update origin git url.

## Create a generator

create a empty `generator.yaml` file, this generator will add `ci:version` script into `package.json`

```yaml
jobs:
  Setup Pkg:
    paths: package.json
    name: Setup Pkg
    steps:
      - name: Add CI Scripts
        uses: json-editor
        with:
          pairs:
            - path: "scripts.ci:version"
              value: "pnpm changeset version"
```

## Add mario into template

create `.neo` folder in template repo, `.neo` structure properly like this:

```
// TODO
```

Add `mario` package or local `generator` file in `.neo/.neorc` mario field.

```json
{
  "mario": "@aiou/generator-aiou"
}
```

If `mario` is npm package, neo will download it first. Otherwise, please makesure `geneartor` file included in template, and publish with it.

After run mario successfully, neo will auto delete `.neo` foleder.

## Build mario

Checkout the [Mario API](/configuration/mario) for documentation about creating more complex generator.
