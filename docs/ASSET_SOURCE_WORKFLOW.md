# Asset source workflow

`project-tarmin-asset-source-downloader/` is the repository's approved source-gathering helper. Its checked-in PowerShell and shell scripts, manifests, expected-file list, README, and license notes define how the harness can obtain candidate source material without placing third-party archives in the browser build.

## Current use

The PowerShell workflow has been run for the current source set. The resulting local staging area is:

```text
project-tarmin-asset-source-downloader/downloads/
```

It contains the downloaded source packs and copied provenance files listed in `SOURCE_MANIFEST.json`, `SOURCE_MANIFEST.csv`, and `LICENSES.md`. The generated `downloads/` directory and `project-tarmin-source-packs.zip` are ignored because they are reproducible source staging artifacts, not distributable game content.

The current runtime art remains governed by the project art direction: authored or transformed project assets are copied into `public/` only after review. Raw third-party sources are references or processing inputs; they are not automatically runtime assets. Preserve the source URL, author, license, intended use, and any attribution/share-alike obligation in the manifest before using a new source.

## Gather or extend the source set

From the downloader directory on Windows:

```powershell
powershell -ExecutionPolicy Bypass -File .\download_all.ps1
```

Use `-FullTextureResolutions` only when a larger source resolution is needed, and `-SkipPS1Fire` when the interactive itch.io download is not required. To add a source needed by the harness, update `download_all.ps1` and `download_all.sh` together, add its provenance and license record to both manifest formats and `LICENSES.md`, and update `EXPECTED_FILES.txt`. Keep the output idempotent: existing files are skipped, failed downloads are removed, and the final bundle is regenerated from the staging directory.

Do not add copyrighted reference assets, copied original game expression, credentials, or unreviewed third-party files to runtime content. If a source's license or intended use is unclear, leave it in staging and record the uncertainty instead of promoting it.
