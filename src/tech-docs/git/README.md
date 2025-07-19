---
title: Overview
icon: mdi:git
---

# 🧬 Git Overview

Git is a **distributed version control system** that helps developers track changes in source code during software development. It allows collaboration, rollback, branching, and efficient project management.

---

## 🚀 Why Use Git?

- ✅ Track file changes over time
- ✅ Collaborate with others on the same project
- ✅ Create isolated feature branches
- ✅ Revert to previous stable versions
- ✅ Work offline and sync when ready

---

## 🛠 Basic Concepts

| Concept     | Description |
|-------------|-------------|
| **Repository** | A directory containing your project and its history |
| **Commit**     | A snapshot of your changes with a message |
| **Branch**     | A separate line of development |
| **Merge**      | Combining changes from different branches |
| **Remote**     | A Git repo hosted online (like GitHub) |
| **Clone**      | Copy a remote repo to your local system |

---

## 🔧 Common Git Commands

```bash
# Set up Git identity
git config --global user.name "Your Name"
git config --global user.email "your@example.com"

# Initialize a Git repo
git init

# Check current status
git status

# Stage files
git add .

# Commit changes
git commit -m "Initial commit"

# Link to GitHub repo
git remote add origin https://github.com/your/repo.git

# Push to GitHub
git push -u origin main
```

---

## 🌿 Working with Branches

```bash
# Create a new branch
git checkout -b feature/new-ui

# Switch to a branch
git checkout main

# Merge a branch
git merge feature/new-ui

# Delete a branch
git branch -d feature/new-ui
```

---

## 🧠 Best Practices

- 🔖 Write meaningful commit messages
- 📁 Keep commits small and focused
- 🚧 Use branches for features, bugs, and experiments
- 🤝 Pull latest changes before starting work
- 🧪 Review code before merging

---

## 📚 Related Topics

- [Conventional Commits](/tech-docs/git/conventional-commits.md)
- [GitHub Workflows](/tech-docs/git/workflows.md)
- [Common Git Issues & Fixes](/knowledge-base/git-fixes.md)

---

> 🧑‍💻 _“Version control isn't optional — it's essential.”_