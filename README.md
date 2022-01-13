# 1. Monster0506 Data Store

![GitHub last commit](https://img.shields.io/github/last-commit/monster0506/factBook)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/monster0506/factBook)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/monster0506/factBook)
[![GitHub license](https://img.shields.io/github/license/monster0506/factBook)](https://github.com/Monster0506/factBook/blob/master/LICENSE)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/monster0506/factbook)

This is a FactBook/Knowledge Base by Monster0506. It contains a large amount of information in a convenently accessable index. This information includes the CIA World Factbook, information on past events, taken from the [code.org](code.org) free tables. The tables that are normally updated every day are included, however, they are not current.

Created by Monster0506.

## 1.1. Main Notes

Main section information.

### 1.1.1. Table of Contents

- [1. Monster0506 Data Store](#1-monster0506-data-store)
  - [1.1. Main Notes](#11-main-notes)
    - [1.1.1. Table of Contents](#111-table-of-contents)
    - [1.1.2. Introduction](#112-introduction)
      - [1.1.2.1. World Factbook Edit](#1121-world-factbook-edit)
    - [1.1.3. Features](#113-features)
    - [1.1.4. Usage](#114-usage)
  - [1.2. Other Information](#12-other-information)
    - [1.2.1. To install/use](#121-to-installuse)
    - [1.2.2. Credits](#122-credits)
    - [1.2.3. TODO](#123-todo)
    - [1.2.4. License](#124-license)
    - [1.2.5. Modifications/Contributions](#125-modificationscontributions)
    - [1.2.6. Code of Conduct](#126-code-of-conduct)
    - [1.2.7. Contributors](#127-contributors)
    - [1.2.8. File Structure](#128-file-structure)

### 1.1.2. Introduction

This is a knowledge base of information about the world.

It contains many datasets and tables. It also has the CIA World Factbook, and easy access to each page.

#### 1.1.2.1. World Factbook Edit

It is currently (1/6/22) using the version 2020 found at
[https://www.cia.gov/the-world-factbook/about/archives/](https://www.cia.gov/the-world-factbook/about/archives/).

__N.B. THIS DOES NOT MODIFY THE ACTUAL CONTENT OF THE WORLDFACTBOOK.__

The intention of this project is to simply provide a simple way to open and access the documents provided by the CIA.

This also provides all of the original documents, in the ["old"](src/countries/old/) folder.

### 1.1.3. Features

| Includes?      | Pros  |             Includes?          | Cons  |
|--- |--- |---                     |--- |
|✓   | Easy-to-navigate user interface.  |✗  | Complex access.  |
|✓   | Minimalistic design.           |✗  | Many buttons and fields.  |
|✓   | Clean, simple look.               |✗  | Cluttered look.  |
|✓   | Water.css theme.                  |✗  | Boring, non-reusable theme.  |
|✓   | Search Bar                       |✗  | Have to scroll through a dropdown  menu for hours and hours and hours and hours....  |
|✓      | Convenient access to all other pages. |✗ | Have to go through a long list of pages to find what you want.  |

### 1.1.4. Usage

- Open a factbook file from the dropdown menu, or by searching.
- Change the color scheme by clicking the Dark/Light button.
- Open one of the docs by clicking the link in either the navigation bar or the footer.
- See how many search results you have by looking at the results counter, updating in real-time!
- To view the original page of the factbook, click the "View Original" button.

## 1.2. Other Information

Other useful notes about the FactBook.

### 1.2.1. To install/use

- Clone the repository to your computer.
- Open the countries folder
- Open the index.html file.
- Alternately, you can launch the page from [this link (src/countries/index.html)](src/index.html), if you are currently in the repo.

### 1.2.2. Credits

- [@24tr6637](https://github.com/24tr6637)
- [Monster0506](https://github.com/Monster0506)
- [Water.css](https://watercss.kognise.dev) [(github)](https://github.com/kognise/water.css)
- [CIA Factbook](https://www.cia.gov/the-world-factbook)
- [Code.org](https://code.org)
- [OpenAI](https://openai.com)

### 1.2.3. TODO

A section of tasks to complete.

- Add Header Numbers to each md file and update table of contents in each as well
- Update MD tables of contents
- ~~Update about in Github~~
- ~~Add README style to filename conventions~~
- ~~Add dataset viewer~~
- ~~Add main Index page~~

### 1.2.4. License

Licensed under Creative Commons Attribution Share Alike 4.0 International.

See [LICENSE](LICENSE) for more information.

### 1.2.5. Modifications/Contributions

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information. Also, follow the
[Code of Conduct](#125-code-of-conduct).

### 1.2.6. Code of Conduct

Although this is a community effort, we take inclusiveness very seriously, and we ask that you follow the
[Code of Conduct](CODE_OF_CONDUCT.md) when contributing to this project.

### 1.2.7. Contributors

[<img src="https://contrib.rocks/image?repo=monster0506/factBook" />](https://github.com/monster0506/factBook/graphs/contributors)

Made with [contrib.rocks](https://contrib.rocks).

### 1.2.8. File Structure

- [.gitub/](.github/) - Contains github setup and development files.
  - [ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE/) - Bugs/Features.
    - [bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md) - Bug Report Template.
    - [feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md) - Feature Request.
  - [workflows/](.github/workflows/) - Workflows
    - [codeql-analysis.yml](.github/workflows/codeql-analysis.yml) - CodeQL setup.
- [style/](style/) - Style guidelines.
  - [.editorconfig](style/.editorconfig) - Editor config file, please use when contributing.
  - [majorTags.md](style/majorTags.md) - List of major tags to have newlines around them.
  - [README.md](style/README.md) - Main style guidelines. Please use when contributing.
- [src/](src/) - Contains main datafiles.
  - [datasets/](src/datasets/) - Contians datasets for main page.
    - [rockyou.txt](src/datasets/rockyou.txt) - large list of commonly used passwords.
    - [csvs/](src/datasets/csvs/) - All of the csvs in the FactBook.
    - [gradeSchoolMath/](src/datasets/gradeSchoolMath/) - Grade school math facts.
      - [data/](src/datasets/gradeSchoolMath/data) - Contains the setup files for GSM.
    - [htms/](src/datasets/htms/) - All of the htms in the FactBook. Converted to html
    - [README.md](src/datasets/README.md) - The README for datasets
    - [old/](src/datasets/old/) - Original files.
      - [csvs/](src/datasets/old/csvs/) - [code.org](https://code.org) csvs, un-modified.
      - [htms/](src/datasets/old/htms/) - [code.org](https://code.org) htms, un-modified.
      - [gradeSchoolMath](src/datasets/old/) - Original files in gradeSchoolMath, un-modified.
    - [stylesheets/](src/datasets/stylesheets/) - All of the stylesheets in the datasets folder.
      - [mainStyles.css](src/datasets/stylesheets/mainStyles.css) - Main styleSheet
    - [javascripts/](src/datasets/javascripts/) - All of the javascripts in the datasets folder.
      - [mainScripts.css](src/datasets/javascripts/mainScripts.js) - Main functions.
    - [sources.md](src/datasets/sources.md) - Sources for datasets
  - [countries/](src/countries/) - World FactBook interface.
    - [Appendix](src/countries/appendix/) - All of the appendicies in the FactBook. Includes a [searchable appendix interface](src/countries/appendix/index.html).
    - [Attachments](src/countries/attachments/) -  All extra files and *attachments*
      - [docs](src/countries/attachments/docs) -  WFB information
        - [Original](src/countries/attachments/docs/original) -  Many of the original pdfs and images
      - [flags](src/countries/attachments/flags) -  The flag images
      - [locator-maps](src/countries/attachments/locator-maps) - A zoomed view of the location of the seleced country.
      - [maps](src/countries/attachments/maps) - Maps of the country
      - [pdfs](src/countries/attachments/pdfs) - Original
        - [Original](src/countries/attachments/pdfs/original) - PDF of country
      - [summaries](src/countries/attachments/) - One page summaries of each country
      - [travel](src/countries/attachments/) - Travel facts for each country.
    - [docs](src/countries/docs/) - Miscellaneous files. Mostly ways to access other files
    - [fonts](src/countries/fonts/) - Fonts used for the factBook
    - [geos](src/countries/geos/) - Actual country pages
    - [images](src/countries/images/) - Image files and resources
    - [javascripts](src/countries/javascripts/) - Contains most scripts used in the site
    - [old](src/countries/old/) - Contains the original factbook files.
      - Contains similar files to this one.
    - [stylesheets](src/countries/stylesheets/) - Contains the styles for each page
    - [index](src/countries/index.html) - The main page of the site
    - [README](src/countries/README.md) - Main README for the factBook interface
    - [wfb.css](src/countries/wfb.css) - Main styles for the factBook
- [.editorconfig](.editorconfig) - Main editorconfig file
- [.gitattributes](.gitattributes) - gitattributes
- [.gitignore](.gitignore) - gitignore
- [index.html](index.html) - Main Factbook Interface
- [LICENSE](LICENSE) - LICENCE
- [README.md](#1-monster0506-data-store) - This File
