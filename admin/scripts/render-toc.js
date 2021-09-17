"use strict";

const replaceInReadme = require("./lib/replace-in-readme.js");

const repoData = require("../data/index.json");

const toc = `

- [Modules](#modules)
- [Students](#students)
  - [Random Groups](https://${repoData.repoUserName}.github.io/${repoData.repoName}/randomizer)
- [Coaches](#coaches)
- Class Notes
  - [Vocabulary](./vocabulary)
  - [Snippets](./snippets)
  - [Discussions](https://github.com/${repoData.repoUserName}/${repoData.repoName}/discussions)
- HYF Links
  - [Student Guidebook](https://home.hackyourfuture.be/students)
  - [Curriculum](https://home.hackyourfuture.be/curriculum)
  - [Study Book](https://hackyourfuture.github.io/study)
  - [GitHub](https://github.com/hackyourfuturebelgium)
- [Using this Repo](#using-this-repo)

`;

replaceInReadme(toc, "TOC");
