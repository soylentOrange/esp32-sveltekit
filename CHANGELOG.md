# Changelog

## [0.0.1] - 2024-10-20

Initial functional version.

### Added

- Build environment for the (wemos_d1_mini32 board)[https://www.wemos.cc/en/latest/]. The board is discontinued by Wemos, but several clones are being offered with very low pricetags.

### Changed

- Shifted debugging options to board environments.
- Updated dependencies to most current versions.
- Removed messages "Connection to device established/lost".
- Added license for this repo.
- Changed documentation to be repo-specific.
- Removed PsychicHttp from the lib-folder and added as dependency.

### Fixed

- Fixed Safari compatibility issues by using JSON instead of MessagePack for event messages.
- Some housekeeping for svelte (svelte-ignore a11y-no-static-element-interactions).
- Added workaround for verbatimModuleSyntax in tsconfig.json.

### Removed

- Coloured shadows...

### Acknowledgment

Many thanks to @theelims who provided the great [ESP32-sveltekit template] (https://github.com/theelims/ESP32-sveltekit).