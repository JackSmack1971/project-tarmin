# Asset source downloader context

- Tool location: `project-tarmin-asset-source-downloader/`.
- The PowerShell downloader has been run for the current source set; local outputs are under `project-tarmin-asset-source-downloader/downloads/` and are ignored staging artifacts.
- Use `SOURCE_MANIFEST.json`, `SOURCE_MANIFEST.csv`, `LICENSES.md`, and `EXPECTED_FILES.txt` as the provenance and completeness records.
- Runtime art is not created by copying raw downloads automatically. Promote only reviewed, original or appropriately licensed/transformed assets into `public/`, consistent with `docs/ART_DIRECTION.md` and `docs/ASSET_SOURCE_WORKFLOW.md`.
- Future harness asset needs may extend `download_all.ps1` and `download_all.sh` together; update both manifests, licenses, and expected files in the same change.
