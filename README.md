# Pageable Protocol

![logo](/static/img/polar-bear-4.png)

[![npm Package](https://img.shields.io/npm/v/servable-pageable.svg?style=flat-square)](https://www.npmjs.org/package/servable-pageable)
[![NPM Downloads](https://img.shields.io/npm/dm/servable-pageable.svg)](https://npmjs.org/package/servable-pageable)
[![Build Status](https://github.com/yelounak/servable-pageable/actions/workflows/release.yml/badge.svg)](https://github.com/yelounak/servable-pageable/actions/tests.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The pageable protocol handles the complete publication state of an object.

## Install
```bash
yarn add servable-pageable
```

## Auxiliary packages

### Shared library
[servable-pageable-shared](https://github.com/yelounak/servable-pageable-shared)
```bash
yarn add servable-pageable-shared
```

### React library
[servable-pageable-react](https://github.com/yelounak/servable-pageable-react)
```bash
yarn add servable-pageable-react
```

## Protocol
### Configuration
#### Payload sample
```json
 {
    "id": "pageable",
    "name": "pageable",
    "slug": "ps",
    "module": {
        "servable-pageable": "*"
    },
    "version": "*",
    "params": {
        "liveClasses": ["pageable"],
        "schema": {
            "restrictSecurity": true
        }
    }
}
```
#### Reference


### Capacities
#### Schema
**Classes**
TODO

**Class level permissions**
TODO

**Indexes**
```json
{
    "_pageableStatus": {
        "pageableStatus": 1
    }
}
```

**Fields**
```json
{
    "pageableStatus": {
        "type": "String"
    }
}
```

#### Protocol class
TODO
#### Classes
TODO
#### Triggers
TODO
#### Before init
TODO
#### After init
TODO
#### Seed
TODO
#### Config
TODO
#### Functions
TODO
#### Jobs
TODO
#### Live classes
TODO

### Security
TODO

### Performance
TODO

## Servable Documentation
You can find here the complete [servable documentation](https://documentation.servable.app/) with guides and api reference.

## License

MIT © [yelounak](https://github.com/yelounak)
