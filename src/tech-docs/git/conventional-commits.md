---
title: Conventional Commits
---
# Conventional Commits: Complete Developer Guide

## Overview

Conventional Commits is a lightweight convention on commit message formatting that enables automated
versioning, changelogs, and improved team collaboration. It is especially useful when working in projects
that follow Semantic Versioning (SemVer).

**Official Specification**: [https://www.conventionalcommits.org/en/v1.0.0](https://www.conventionalcommits.org/en/v1.0.0)

## Why Use Conventional Commits?

- Automate changelogs and releases
- Improve commit readability and traceability
- Enable automatic semantic versioning
- Simplify collaboration across teams
- Works with tools like `semantic-release`, `standard-version`, `commitlint`

## Format Structure

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

### Header (Required)

- `type` : Describes the nature of the change.
- `scope` : (Optional) Module or context (e.g., component, service).
- `!` : (Optional) Indicates a breaking change.
- `description` : Short summary in present tense.

### Body (Optional)

Provides more context about the change. Explains the reasoning or what changed.

### Footer (Optional)

Used for breaking change details or linking to issues.

---

## Types and When to Use Them

### 1. feat – Feature

Example: `feat(auth): add OTP-based login support`

### 2. fix – Bug Fix

Example: `fix(payment): resolve duplicate transaction issue`

### 3. docs – Documentation

Example: `docs(readme): add API usage examples`

### 4. style – Formatting

Example: `style(ui): format sidebar component with Prettier`

### 5. refactor – Code Refactoring

Example: `refactor(user): extract auth logic into separate service`

### 6. perf – Performance Improvements

Example: `perf(image): optimize loading of homepage banner`

### 7. test – Tests

Example: `test(api): add unit tests for quote endpoint`

### 8. chore – Maintenance/Meta Tasks

Example: `chore(env): update .env.example file`

### 9. build – Build System

Example: `build(deps): upgrade Laravel to 11.x`

### 10. ci – Continuous Integration

Example: `ci(github): add test matrix for multiple PHP versions`

### 11. BREAKING CHANGE – Breaking Changes

Header: `feat!: drop support for legacy API authentication`

Footer:
```
BREAKING CHANGE: login endpoint now requires multi-factor authentication.
```

---

## Real-World Examples

- `feat(manual-renewal): add support for marketing preference keys`
- `fix(api): add missing catch point keys to request`
- `chore(manual-renewal): update content keys for sidebar`
- `docs(changelog): update unreleased section with manual-renewal feature`

---

## Best Practices

- Use present tense (e.g., add, fix, remove)
- Use clear descriptions (~70 characters max)
- Use scopes: `feat(api): ...`
- Add `BREAKING CHANGE:` in footer or `!` in header for breaking changes

---

## Tooling Support

1. **commitlint** – Validates commit messages
2. **semantic-release** – Automates versions & changelogs
3. **Husky** – Git hooks for pre-commit linting

---

## Summary

Adopting Conventional Commits:
- Makes commit history clearer
- Enables automated releases
- Helps team collaboration

Stick to the format, choose correct type, and keep it clean!
