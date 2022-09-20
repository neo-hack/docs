# Configuring neo

When running command `neo create`, neo will automatically load config from `.neo/.neorc` inside template repo.

```json
// .neorc
{
  "mario": "string"
}
```

After everything is done, neo will automatically remove `.neo` from your side project.

## Mario geneartor options

### mario

- Type `string`

Run mario geneartor after neo create side project.

- If mario is valid npm package, neo will load first.
- If mario is local filepath, neo will read mario geneartor definition from it.
