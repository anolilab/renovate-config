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
- Defined package groups like TypeScript, Prettier, Linters, TypeDoc, Sass, Less, Stylus, PostCSS, Vite, Rollup, Visulima, Vitest
- Enhanced security with vulnerability alerts and auto-merge for security updates
- Smart rate limiting (4 PRs per hour, 10 concurrent PRs)
- Package stability checks with 3-day waiting period
- Automated maintenance with weekly lock file updates
- Comprehensive labeling system for different update types
- Scheduled updates for specific package groups (ESLint, types on weekends)
- Semantic commit messages for all updates:
  - Security updates: `fix(security)`
  - Build tools (Vite, Rollup): `build(deps-dev)`
  - Style tools (ESLint, Prettier): `style(deps-dev)`
  - Documentation tools (TypeDoc): `docs(deps-dev)`
  - CI/CD (GitHub Actions): `ci(deps)`
  - Docker: `build(deps)`
  - Regular dependencies: `chore(deps)` or `fix(deps)` for non-major updates
- Intelligent auto-merge rules for different package types
- Docker and GitHub Actions specific configurations with proper labeling

## References

- [Renovate Docs](https://renovatebot.com/docs/)
- [Configuration Options \| Renovate Docs](https://renovatebot.com/docs/configuration-options/)
- [Default Presets \| Renovate Docs](https://renovatebot.com/docs/presets-default/)

## Useful links

* [How Renovate find/create/update PRs](https://docs.renovatebot.com/key-concepts/pull-requests/)  
  TL;DR: Renovatebot checks branch names and PR titles. If PR is not found to match the branch - Renovatebot will create a new PR.  
  To recreate a closed PR, rename the closed PR.

### Renovate App and presets configuration

* [Managing config for many repositories](https://docs.renovatebot.com/key-concepts/presets/#managing-config-for-many-repositories)
* [Shareable Config Presets](https://docs.renovatebot.com/config-presets/#shareable-config-presets)
  * [Organization level presets](https://docs.renovatebot.com/config-presets/#organization-level-presets) -  `myorg/renovate-config/default.json` magic name
  * [GitHub-hosted Presets](https://docs.renovatebot.com/config-presets/#github-hosted-presets)
  * [Contributing to presets](https://docs.renovatebot.com/config-presets/#contributing-to-presets)
  * [Preset Versioning](https://docs.renovatebot.com/config-presets/#github)

* [Managers: Supported, configuration, disabling, etc.](https://docs.renovatebot.com/modules/manager/)

* [Renovate App on GitHub Secrets Encryption](https://docs.renovatebot.com/getting-started/private-packages/#mend-renovate-hosted-app-encryption)

* [Known limitations](https://docs.renovatebot.com/known-limitations/)  
  Example: GitHub hosted app Mend checks each active repository roughly every three hours, if no activity has been seen before then (merged PRs, etc).

  * [No rebasing if you have made edits](https://docs.renovatebot.com/updating-rebasing/#no-rebasing-if-you-have-made-edits) (conflicting with pre-commit auto-fixes)

* [onboardingConfigFileName](https://docs.renovatebot.com/self-hosted-configuration/#onboardingconfigfilename) (self-hosted only).  
  Useful to change onboarding Renovate config file location.

* [Docker Registries authentication](https://docs.renovatebot.com/docker/#registry-authentication)

### Repos configuration

* [Configuration location](https://docs.renovatebot.com/getting-started/installing-onboarding/#configuration-location)

* [Overriding global configs](https://docs.renovatebot.com/key-concepts/automerge/#overriding-global-automerge)

* [Scheduling syntax](https://docs.renovatebot.com/key-concepts/scheduling/#scheduling-syntax)
  * [Schedule Presets](https://docs.renovatebot.com/presets-schedule/)

* [Changing the Semantic Commit type](https://docs.renovatebot.com/semantic-commits/#changing-the-semantic-commit-type)
* [How to edit branch names, commit messages, PR titles, and PR content](https://docs.renovatebot.com/configuration-templates/)
* [Docker Digest pinning and Updating](https://docs.renovatebot.com/docker/#digest-pinning)
* [Separate `patch` and `minor` releases of dependencies into separate PRs](https://docs.renovatebot.com/presets-default/#separatepatchreleases).  
  More details [here](https://docs.renovatebot.com/faq/#separate-patch-releases-from-minor-releases)
* [Group all packages starting with `abc` together in one PR](https://docs.renovatebot.com/faq/#group-all-packages-starting-with-abc-together-in-one-pr)
* [:pinVersions](https://docs.renovatebot.com/presets-default/#pinversions) - maintain a single version only and not SemVer ranges
* [:rebaseStalePrs](https://docs.renovatebot.com/presets-default/#rebasestaleprs) - Rebase existing PRs any time the base branch has been updated.
* [Update package/GHA references in Markdown files](https://github.com/renovatebot/.github/blob/d9b3c1914f4bf9dbecc6456610ca89530260572f/default.json#L121-L140)

## Troubleshooting

* [Troubleshooting docs](https://docs.renovatebot.com/troubleshooting/)
* [Renovate dashboard](https://developer.mend.io)

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
