# Self-Hosted Fonts

This directory contains self-hosted web fonts for the Brasa documentation site.

## Required Font Files

Download Inter font from [Google Fonts](https://fonts.google.com/specimen/Inter) or [GitHub](https://github.com/rsms/inter/releases) and place the following WOFF2 files here:

- `inter-regular.woff2` (Inter Regular, 400 weight)
- `inter-semibold.woff2` (Inter SemiBold, 600 weight)
- `inter-bold.woff2` (Inter Bold, 700 weight)

## Why Self-Host?

Self-hosting fonts provides:

- Better privacy (no external requests)
- Faster loading (served from same origin)
- Reliability (no dependency on external CDN)
- Better performance scores

## Converting Fonts

If you have TTF/OTF files, convert to WOFF2 using:

- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [google-webfonts-helper](https://gwfh.mranftl.com/fonts)
- `woff2_compress` tool

## License

Inter is licensed under the SIL Open Font License 1.1.
See: https://github.com/rsms/inter/blob/master/LICENSE.txt
