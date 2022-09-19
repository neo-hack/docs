# Mario API

`mario`, or another name `generator`. 

Mario is simple manipulate system based on `gulp`, has similar syntax like `github workflow`. You can write and publish a mario package once, and have it work after neo create side project from local or remote.

## Create a generator

Create a empty `generator.yaml` file, add follow codes. This generator will add `ci:version` script into `package.json`.

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

Feel free to add more steps after `Add CI Scripts`, or more jobs `Setup Pkg`. `mario` will run jobs and steps sequential.

## Built in Actions

`mario` built in some common actions. Action receive params from property `with`. 

### Action - json-editor

Edit json content with `key-value` pairs.

Options:

#### `content` 

Modify json content with `key-value` pairs.

Example:

```yaml
jobs:
  Setup Pkg:
    paths: package.json
    name: Setup Pkg
    steps:
      - name: Modify version
        uses: json-editor
        with:
          content:
            version: "1.0.0"
```

#### `pairs` 

Batch modify json content deeply with property path. path value take `.` as sperator. e.g. `scripts.ci:version` mean script named `ci:version` in `package` scripts field.

Example:

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

### Action - copy

Copy files or folder from source to destination.

Options:

#### `output`

Copy files matched by paths to output.

Example:

```yaml
jobs:
  COPY:
    paths: "assets.ts"
    steps:
      - name: COPY
      - uses: copy
        with:
          output: output
```

### Action - replace

Replace `match` value.

Options:

#### `match&replace`

Replace `match` value with defined value in property `replace`.

Example:

```yaml
jobs:
  REPLACE:
    paths: "output/**/*.ts"
    steps:
      - name: Replace Action
      - uses: replace
        with:
          match: one
          replacement: target
```

#### `pairs`

Batch replace `match` value with defined value in property `replace`.

Example:

```yaml
jobs:
  REPLACE:
    paths: "output/**/*.ts"
    steps:
      - name: Replace Action
      - uses: replace
        with:
          match: one
          replacement: target
```

### `clean`

Remove files matched by paths. `job.paths` is required to filter valid files.

Options:

#### `paths`

Example:

```yaml
jobs:
  CLEAN:
    paths: "*.ts"
    steps:
      - name: Clean Action
      - uses: clean
        with:
          paths:
            - "output/*"
```

### Action - run

Exec shell command defined in `steps.run`.

#### `quiet`

Sient all message display during command.

Example:

```yaml
jobs:
  RUN:
    paths: "output/*"
    steps:
      - name: Run Shell
        run: echo hello
        with:
          quiet: false
```

### Common options

Job and step receive some common options.

#### `job.paths`

- Type: `string|undefined` glob pattern is supported, e.g. `assets.ts`

By default, will be all files under `process.cwd()`, auto ignore `node_modules`. If job specific `paths` but not match any files, will skip job.

#### `steps.continue-on-error`

- Type: `boolean` continue or exit job if throw error.

By default, will exit if any error happen.

## Used as a libary

Currently it already published as a npm package. Checkout [@aiou/mario](https://github.com/neo-hack/neo/tree/master/packages/mario) for documentation about using like it as a standalone libary