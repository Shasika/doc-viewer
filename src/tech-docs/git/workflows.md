---
title: GitHub Workflows
icon: mdi:github
---

# 🔁 GitHub Workflows (GitHub Actions)

**GitHub Actions** is a powerful automation tool built into GitHub that lets you define custom workflows triggered by events in your repo. It supports CI/CD pipelines, automation, deployments, and more — all from your `.github/workflows/` directory.

---

## 🚀 Why Use GitHub Workflows?

- ✅ Automate build and test processes
- 🛠 Run linting, formatting, or type-checking tools
- 📨 Send Slack/email notifications
- 🚀 Deploy to GitHub Pages, Netlify, Vercel, or cloud providers
- 🔁 Auto-close stale issues or label PRs
- 🧪 Run tests on multiple environments or OS versions

---

## ⚙️ How It Works

### 🗂 File Location

All workflows are stored in:

```bash
.github/workflows/*.yml
```

### 🔑 Workflow Anatomy

```yaml
name: Workflow Name

on: [push, pull_request]  # Event triggers

jobs:
  job-id:
    runs-on: ubuntu-latest
    steps:
      - name: Step description
        run: echo "Hello World"
```

---

## 🛠 Example: Node.js CI Pipeline

```yaml
name: Node.js CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: npm test
```

---

## 🚚 Example: Deploy to GitHub Pages

```yaml
name: Deploy Docs

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
      - run: touch src/.vuepress/dist/.nojekyll
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: src/.vuepress/dist
```

---

## 🔗 Useful Built-in Actions

| Action                                | Purpose                          |
|--------------------------------------|----------------------------------|
| `actions/checkout`                   | Checkout your repo code          |
| `actions/setup-node`                 | Install and cache Node.js        |
| `actions/upload-artifact`           | Save artifacts between jobs      |
| `actions/cache`                      | Speed up workflows with caching  |
| `JamesIves/github-pages-deploy-action` | Deploy site to GitHub Pages   |

---

## 📦 Using Secrets and Environment Variables

Add secrets in:
```
GitHub Repo → Settings → Secrets and Variables → Actions
```

Reference in workflow:

```yaml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

---

## ♻️ Reusable Workflows

You can call other workflow files for shared logic.

```yaml
jobs:
  call-workflow:
    uses: your-org/repo/.github/workflows/workflow-name.yml@main
```

---

## 🧠 Best Practices

- 💬 Use clear `name:` fields in workflows and jobs
- 🔒 Store tokens/API keys in `secrets`
- 🚧 Separate CI, lint, deploy into different workflows
- 🔁 Use matrix builds for multi-version testing
- 📋 Use status checks to protect branches

---

## 📚 Learn More

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Official Marketplace](https://github.com/marketplace/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

> ⚙️ _“With GitHub Actions, automation becomes a native part of your repo.”_