<p align="center"><a href="https://cube.dev"><img src="https://i.imgur.com/zYHXm4o.png" alt="Cube.js" width="300px"></a></p>

[Website](https://cube.dev) • [Docs](https://cube.dev/docs) • [Blog](https://cube.dev/blog) • [Slack](https://slack.cube.dev) • [Twitter](https://twitter.com/thecubejs)

[![npm version](https://badge.fury.io/js/%40cubejs-backend%2Fserver.svg)](https://badge.fury.io/js/%40cubejs-backend%2Fserver)
[![GitHub Actions](https://github.com/cube-js/cube.js/workflows/Build/badge.svg)](https://github.com/cube-js/cube.js/actions?query=workflow%3ABuild+branch%3Amaster)

# Cube.js MaxCompute Driver

Pure Javascript MaxCompute driver.

[Learn more](https://github.com/cube-js/cube.js#getting-started)

## Credentials

```
CUBEJS_MAXCOMPUTE_PROJECT_ID=gcp-project-id
CUBEJS_MAXCOMPUTE_KEY_FILE=/path/to/key-file.json
```

Or get base64 version of your key file json using

```
$ cat /path/to/key-file.json | base64
```

And then put base64 string in .env:

```
CUBEJS_MAXCOMPUTE_PROJECT_ID=gcp-project-id
CUBEJS_MAXCOMPUTE_CREDENTIALS=<base_64_credentials_json>
```

### License

Cube.js MAXCOMPUTE Driver is [Apache 2.0 licensed](./LICENSE).
