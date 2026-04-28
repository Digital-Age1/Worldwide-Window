# Image Localization

Remote site images are stored locally so production pages do not depend on external generated-image URLs and so image assets can be versioned with the website.

## Local image folder

All localized site images live in:

```text
public/images/site/
```

Frontend paths should use the public URL format:

```text
/images/site/filename.ext
```

## Adding CMS images later

For editor-managed uploads, continue using the Decap media folder:

```text
public/uploads/
```

Those files are referenced in CMS content as:

```text
/uploads/filename.ext
```

Use `/images/site/...` for committed site assets and `/uploads/...` for images uploaded through Decap CMS.

## File naming rules

- Use lowercase filenames.
- Separate words with hyphens.
- Keep names descriptive, such as `home-hero-window-cleaning.jpg`.
- Avoid spaces and special characters.
- Preserve the original extension when it is known.
- Avoid vendor or source names in folder names.
