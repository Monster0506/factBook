# 1. Style and Formatting Guidelines

This is a document that will provide the guidelines for the formatting of this project.

Please read this document carefully, and make sure to follow the guidelines, as your pull request will not be accepted without them.

## 1.1. Table of Contents

- [1. Style and Formatting Guidelines](#1-style-and-formatting-guidelines)
  - [1.1. Table of Contents](#11-table-of-contents)
  - [1.2. All Files](#12-all-files)
  - [1.3. Markdown Formatting Guidelines](#13-markdown-formatting-guidelines)
  - [1.4. HTML/CSS Formatting Guidelines](#14-htmlcss-formatting-guidelines)
  - [1.5. Further Guidelines](#15-further-guidelines)

## 1.2. All Files

__DO NOT USE EMOTICONS IN ANY FILE, FORK, PULL REQUEST, OR ANYTHING ELSE.__ This is considered an unforgivable
crime in the style of the project.

## 1.3. Markdown Formatting Guidelines

Please follow the rules listed in [this page](https://github.com/DavidAnson/markdownlint/blob/v0.24.0/doc/Rules.md), however, *try* to follow rule 033, but if necessary, you may break it.

Also, follow [this document](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md), however, if conflicts arise, the first takes precedence.

The document layout is as follows:

```markdown
# 1. Document Title

Short introduction.

## 1.1. Table of Contents
- 1. Document Title
    - 1.1. Table of Contents
    - 1.x. Other Headings
# 1.x. Other Headings
```

1. `# 1.Document Title` is the title of the document.
2. `Short introduction.` is a short introduction to the document, in 1-3 sentances.
3. `## 1.1. Table of Contents` is the title of the table of contents section.
4. `- 1.Document Title ETC.` is the table of contents.
5. `# 1.x. Other Headings` is the title of the other headings section.

Markdown is formatted using section numbers. Section numbers always start with `1.` and are always followed by a space.

Each subsection of the document has an additional number, i.e 1.x., where x is the subsection number. This is expandable, as seen in the [main readme](../README.md#123-license)

For further refrence, use this docum    ent as refrence for following acceptable practices.

## 1.4. HTML/CSS Formatting Guidelines

Please *try* to follow the recommendations given in [this document](https://google.github.io/styleguide/htmlcssguide.html#CSS).

Also, follow [this document](https://github.com/necolas/idiomatic-css), however, if conflicts arise, the first takes precedence.

Please also make sure that the page follows the [Frontend Checklist](https://github.com/thedaviddias/Front-End-Checklist). This takes lowest priority, but is a good way to ensure that the page is ready for the frontend.

Each [(major) HTML tag](majorTags.md) should have a line of whitespace before it, and a line of whitespace after it, and should be on its own line.

## 1.5. Further Guidelines

Please use the [.editorconfig file](../.editorconfig) to set your editor preferences.
