"use strict";

const replaceInReadme = require("./lib/replace-in-readme.js");

const repoData = require("../data/index.json");

const header = `

# ${repoData.repoName}

> - [Issues](https://github.com/${repoData.repoUserName}/${
  repoData.repoName
}/issues): [\`help-wanted\`](https://github.com/${repoData.repoUserName}/${
  repoData.repoName
}/issues?q=is%3Aopen+label%3Ahelp-wanted), [\`question\`](https://github.com/${
  repoData.repoUserName
}/${repoData.repoName}/issues?q=is%3Aopen+label%3Aquestion)
${
  repoData.boards.find((board) => board.name === "deliverables")
    ? `> - [Deliverables](https://github.com/${repoData.repoUserName}/${
        repoData.repoName
      }/projects/${
        repoData.boards.find((board) => board.name === "deliverables").number
      })`
    : ""
}


`;

replaceInReadme(header, "HEADER");
