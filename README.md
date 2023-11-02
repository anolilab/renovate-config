<div align="center">

<h1>Shared Renovate Config</h1>

Shared config for the [renovate service](https://renovatebot.com).

[![license-image]][license-url]

</div>

---

<div align="center">
    <p>
        <sup>
            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>
        </sup>
    </p>
</div>

---

## Usage

Go to https://github.com/apps/renovate, ask a GitHub admin of the organisation if you need help on how to do this step.


### Default preset

```json
{
    "extends": [
        "github>anolilab/renovate-config"
    ]
}
```

#### Features

- Use Europe/Berlin timezone by default
- Auto merge patch and minor version, if they pass tests
- Support npm/Node.js ecosystem
- Support GitHub-Actions updates with hash version
- Support Docker ecosystem
- Defined package groups like TypeScript, Prettier, Linters, Vitest
- Prevent supply-chain attack by `"minimumReleaseAge": 7 days`

## References

- [Renovate Docs](https://renovatebot.com/docs/)
- [Configuration Options \| Renovate Docs](https://renovatebot.com/docs/configuration-options/)
- [Default Presets \| Renovate Docs](https://renovatebot.com/docs/presets-default/)


Contributing
------------

If you would like to help take a look at the [list of issues](https://github.com/anolilab/javascript-style-guide/issues) and check our [Contributing](.github/CONTRIBUTING.md) guild.

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Credits
-------------

- [Daniel Bannert](https://github.com/prisis)
- [All Contributors](https://github.com/anolilab/javascript-style-guide/graphs/contributors)

License
-------------

The anolilab renovate-config is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)


[license-image]: https://img.shields.io/npm/l/@anolilab/package-json-utils?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
