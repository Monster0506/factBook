# 1. Style and Formatting Guidelines

This is a document that will provide the guidelines for the formatting of this project.

Please read this document carefully, and make sure to follow the guidelines, as your pull request will not be accepted
without them.

## 1.1. Table of Contents

- [1. Style and Formatting Guidelines](#1-style-and-formatting-guidelines)
  - [1.1. Table of Contents](#11-table-of-contents)
  - [1.2. Markdown Formatting Guidelines](#12-markdown-formatting-guidelines)
  - [1.3. HTML/CSS Formatting Guidelines](#13-htmlcss-formatting-guidelines)
  - [1.4. JavaScript](#14-javascript)
  - [1.5. File Naming](#15-file-naming)
  - [1.6. Pull request formatting](#16-pull-request-formatting)
  - [1.7. Further Guidelines](#17-further-guidelines)

## 1.2. Markdown Formatting Guidelines

Markdown files are the most commonly seen files by a non-constibuer, and as such, should be formatted in a specific
manner. Please follow these guidelines.

Please follow the rules listed in
[this page](https://github.com/DavidAnson/markdownlint/blob/v0.24.0/doc/Rules.md), however, *try* to follow rule 033,
but if necessary, you may break it.

Also, follow
[this document](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md), however, if conflicts arise,
the first takes precedence.

The document layout is as follows:

```markdown
# 1. Document Title

Short introduction.

## 1.1. Table of Contents
- 1. Document Title
    - 1.1. Table of Contents
    - 1.x. Other Headings
        - 1.x.x. Subheadings
# 1.x. Other Headings
```

1. "`# 1.Document Title`" is the title of the document.
2. "`Short introduction.`" is a short introduction to the document, in 1-3 sentances.
3. "`## 1.1. Table of Contents`" is the title of the table of contents section.
4. "`- 1.Document Title ETC.`" is the table of contents.
5. "`# 1.x. Other Headings`" is the title of the other headings section.

Markdown is formatted using section numbers. Section numbers always start with "`1.`" and are always followed by a
space.

Each subsection of the document has an additional number, i.e 1.x., where x is the subsection number. This is
expandable, as seen in the [main readme](../README.md#123-license)

For further refrence, use this document as reference for following acceptable practices.

## 1.3. HTML/CSS Formatting Guidelines

HTML and CSS should both be formatted in a specific way to improve readibility. Please follow these conventions.

Please *try* to follow the recommendations given in
[this document](https://google.github.io/styleguide/htmlcssguide.html#CSS).

Also, follow [this document](https://github.com/necolas/idiomatic-css), however, if conflicts arise, the first takes
precedence.

Please also make sure that the page follows the
[Frontend Checklist](https://github.com/thedaviddias/Front-End-Checklist).
This takes lowest priority, but is a good way to ensure that the page is ready for the frontend.

Each [major HTML tag](majorTags.md) should have a line of whitespace before it, and a line of whitespace after it,
and should be on its own line.

## 1.4. JavaScript

All code should be written cleanly, as it is often easier to write than to read it. To improve readibility, please
follow these conventions.

Please follow [this document](https://google.github.io/styleguide/jguide.html) for JS
styling.

Use comments whenever is neccesary to explain a section of code, however, do not overuse them.

## 1.5. File Naming

File naming is a very specific convention, and is important for the continuity of a
project.

File and directory names should be lowercase.

All README files should be uppercase and in Markdown.

Unless your filename change updates all links associated with that file, please avoid changing filenames, as this will
break links.

Hyphens should be used instead of underscores to denotate spaces. Camel case is also acceptable (i.e. majorTags.md),
but Pascal case is not.

Do not use non-standered english characters in filenames.

Try to avoid generic filenames such as "`document`" or "`file`".

Try to stick to a consistant style of spelling, i.e. en-US, en-GB, en-AU, etc.

Both suffixing and prefixing numbers are acceptable, however, start at "`0`" . If there are going to be more than 10 of
the numbered file, pad with a left "`0`".

Avoid special characters like "`.`" and "`#`".

## 1.6. Pull request formatting

This is a simple style to follow. The first word of a sentance should be capilitsed. If there is more than one sentance,
suffix only the first sentance with a full stop "`.`"

If something is changed or modified, prefix with "`Update`".

If something is removed, prefix with "`Delete`".

If something is added, prefix with "`Add`".

File names should be correct, including capitalization, and should not have the extention, unless there are other files with the same name. Suffix with "`in [directory]`".

There is a lot of leeway in this set of guidelines, so simply follow the rule that
"`Add sentance case. Remove sentance case. Update sentance case`" looks like the previous block of code.

## 1.7. Further Guidelines

Please use the [.editorconfig file](.editorconfig) to set your editor preferences. It is located in both this folder,
and in the root of the project [(here)](../.editorconfig)

__PLEASE DO NOT USE EMOTICONS IN ANY FILE, FORK, PULL REQUEST, OR ANYTHING ELSE.__ This is considered to be an
unforgivable crime in the style of the project.

The recommended maximum line length is 120 characters.
