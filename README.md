![ipost-logo](https://github.com/FIPost/docs/blob/master/assets/logo-name.png?raw=true)
<h3 align="middle">
  <a href="https://github.com/FIPost/docs">Documentation</a>
  <a>•</a>
  <a href="https://github.com/FIPost/docs/blob/master/CONTRIBUTING.md">Contributing</a>
  <a>•</a>
  <a href="https://github.com/FIPost/docs/blob/master/CONTACT.md">Contact</a>
</h3>

# UI

[![Build](https://github.com/FIPost/ui/actions/workflows/build.yml/badge.svg)](https://github.com/FIPost/ui/actions/workflows/build.yml?branch=master)
[![Release](https://github.com/FIPost/ui/actions/workflows/docker-publish.yml/badge.svg?event=release)](https://github.com/FIPost/ui/actions/workflows/docker-publish.yml)
[![Board Status](https://dev.azure.com/405273/a464a51f-a9d3-415a-983c-ecc9f9e1e117/e58d8192-5262-4682-856c-da357d004679/_apis/work/boardbadge/8203b7d2-166a-4745-ab05-5fc958846334)](https://dev.azure.com/405273/a464a51f-a9d3-415a-983c-ecc9f9e1e117/_boards/board/t/e58d8192-5262-4682-856c-da357d004679/Microsoft.RequirementCategory)

VueJS front-end for the logistal process of managing packages.

## Getting Started
Install node modules.
```zsh
npm install
```

Serve VueJS
```zsh
npm run serve
```

## Getting Started with Docker
The docker image used in this build uses a Nginx webserver to serve the SPA VueJS content on port `80`.

```zsh
docker build -t ui .
docker run -p 80:80 --name ui-app ui
```
