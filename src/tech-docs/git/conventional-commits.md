---
title: Conventional Commits
icon: mdi:git
---

# ✅ Conventional Commits: Complete Developer Guide

**Conventional Commits** is a lightweight commit message convention that standardizes how commit messages are written across teams and projects. It is especially useful for automating versioning (using SemVer), generating changelogs, and streamlining collaboration.

📘 Official Spec: [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0)

---

## 🚀 Why Use Conventional Commits?

- 📦 Automate changelog generation
- 🔢 Enable semantic versioning (SemVer)
- 👥 Improve readability and traceability of commit history
- ⚙️ Integrate with tools like `commitlint`, `semantic-release`, `standard-version`, and `Husky`

---

## 📐 Basic Commit Message Format

```text
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

### 🧩 Elements

| Element      | Required | Description |
|--------------|----------|-------------|
| `type`       | ✅        | Type of change (feature, fix, etc.) |
| `scope`      | 🔁        | A contextual label (e.g., `api`, `auth`) |
| `!`          | 🔁        | Indicates breaking change |
| `description`| ✅        | Short summary of change |
| `body`       | 🔁        | Longer explanation (if needed) |
| `footer`     | 🔁        | Metadata like `BREAKING CHANGE` or `Closes #123` |

---

## 🔠 Commit Types & Examples

### 1. `feat` — New Feature

```text
feat(auth): add OTP-based login support
```

Adds a new user-facing feature.

---

### 2. `fix` — Bug Fix

```text
fix(payment): resolve duplicate transaction issue
```

Corrects a bug without introducing new features.

---

### 3. `docs` — Documentation Changes

```text
docs(readme): add API usage examples
```

For updates to `.md` files, inline comments, or changelogs.

---

### 4. `style` — Code Style Changes (No Logic Impact)

```text
style(ui): format sidebar component with Prettier
```

Changes code formatting without affecting behavior.

---

### 5. `refactor` — Code Refactoring

```text
refactor(user): extract auth logic into separate service
```

Improves code structure without changing external behavior.

---

### 6. `perf` — Performance Improvements

```text
perf(image): optimize loading of homepage banner
```

Boosts performance or efficiency.

---

### 7. `test` — Test-Related Changes

```text
test(api): add unit tests for quote endpoint
```

Adds or updates test files (unit, integration, e2e).

---

### 8. `chore` — Miscellaneous Maintenance

```text
chore(env): update .env.example file
```

Doesn't modify src or test code — like updating configs, linters, CI files.

---

### 9. `build` — Build System Updates

```text
build(deps): upgrade Laravel to 11.x
```

Changes that affect build tools, dependencies, or bundlers.

---

### 10. `ci` — Continuous Integration

```text
ci(github): add test matrix for multiple PHP versions
```

Updates to CI/CD config files like GitHub Actions or CircleCI.

---

### 11. `BREAKING CHANGE` — Introduces Breaking Change

```text
feat!: drop support for legacy API authentication

BREAKING CHANGE: login endpoint now requires multi-factor authentication.
```

Either use `!` after the `type` or include a `BREAKING CHANGE:` footer.

---

## 🧠 Best Practices

- ✅ Use present tense: "add feature" not "added"
- 🎯 Keep subject under 72 characters
- 🧩 Use `scope` to clarify the module/context
- ❗ Use `!` for breaking changes or `BREAKING CHANGE:` footer
- 💬 Use bodies to explain "why", not just "what"

---

## 🔧 Tooling Support

| Tool              | Description                            |
|------------------|----------------------------------------|
| `commitlint`     | Lint commit messages                    |
| `semantic-release` | Automate changelog + versioning       |
| `standard-version` | Versioning without CI integration     |
| `husky`          | Run hooks (like linting before commit) |

---

## 🧪 Real-World Commit Examples

```text
feat(manage-users): add marketing preference keys
fix(api): add missing catch point to payload
chore(deps): update dependency versions
docs(changelog): document changes for v2.3.1
```

---

## 📚 References

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Commitlint Config](https://commitlint.js.org/)
- [semantic-release Docs](https://semantic-release.gitbook.io/semantic-release/)

---

> 🧑‍💻 _“Conventional commits make your history readable, your releases automated, and your team aligned.”_