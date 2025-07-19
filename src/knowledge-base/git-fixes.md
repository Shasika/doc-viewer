---
title: Common Git Issues & Fixes
icon: mdi:alert-circle
---

# 🛠 Common Git Issues & Fixes

Even experienced developers occasionally run into Git problems. Here's a curated list of the most common Git issues, why they happen, and how to fix them — along with pro tips and preventive strategies.

---

## 🚧 Undo Last Commit (But Keep Changes)

```bash
git reset --soft HEAD~1
```

- **Use when**: You committed too soon but want to keep your changes.
- ✅ Keeps your working directory untouched.
- ❌ Does **not** undo file modifications.

---

## 🔁 Accidentally Committed to the Wrong Branch

```bash
# Create a new branch from the mistaken commit
git checkout -b correct-branch

# Go back to the correct branch and undo the mistaken commit
git checkout main
git reset --hard HEAD~1
```

- 💡 Always check your current branch using `git status` before committing.

---

## 🧹 Clean Untracked Files (Dangerous)

```bash
git clean -fd
```

- Deletes **untracked** files and folders.
- Add `-n` to preview before deleting:
  ```bash
  git clean -fdn
  ```

---

## 🔐 Permission Denied (publickey) when Pushing

```bash
ssh-add ~/.ssh/id_rsa
```

- Make sure your SSH key is added to your GitHub/remote account.
- Use `ssh -T git@github.com` to test SSH access.

---

## 🔄 Pull With Rebase Instead of Merge

```bash
git pull --rebase
```

- Keeps a **linear history**
- Avoids unnecessary merge commits
- Combine with `git config pull.rebase true`

---

## 🔀 Resolve Merge Conflicts

```bash
# Conflicted file looks like:
<<<<<<< HEAD
your changes
=======
incoming changes
>>>>>>> feature-branch
```

- Manually fix the content
- Then:
  ```bash
  git add <filename>
  git commit
  ```

🧠 Use tools like VS Code, GitKraken, or `git mergetool` to help.

---

## 🔍 See What Changed Before Committing

```bash
git diff
```

- Shows **unstaged changes**.
- To see staged changes:
  ```bash
  git diff --cached
  ```

---

## 🧼 Remove a File from Git but Keep It Locally

```bash
git rm --cached filename
```

- Useful when you accidentally committed `.env`, `.log`, or `node_modules`.

---

## 🚫 Ignore a Tracked File

```bash
git rm --cached filename
echo "filename" >> .gitignore
```

- Prevents Git from tracking it again.
- Then commit the change.

---

## 🌀 Fix Detached HEAD State

```bash
# Create a new branch to keep your changes
git checkout -b my-temp-fix
```

- This happens when you checkout a commit hash instead of a branch.
- Always commit changes before switching away from a detached HEAD.

---

## 🗂 Restore a Deleted File

```bash
git checkout HEAD -- path/to/file
```

- This restores a file deleted **since the last commit**.

---

## 🧭 Revert a Commit (Create Undo Commit)

```bash
git revert <commit-hash>
```

- Safe way to undo a commit without rewriting history (good for public branches).

---

## 🔒 Revert to a Clean State (Dangerous)

```bash
git reset --hard origin/main
```

- ⚠️ **Warning:** This resets all local changes to match the remote.

---

## 📚 Helpful Git Configs

```bash
# Colorize output
git config --global color.ui auto

# Enable pull with rebase by default
git config --global pull.rebase true
```

---

## 🧠 Pro Tips

- ✅ Commit often with clear messages
- 🚫 Don’t commit secrets or API keys — use `.gitignore`
- 🔁 Regularly `pull --rebase` to reduce merge headaches
- 🧪 Create feature branches even for small tasks
- 🔍 Use `git log --oneline --graph` to visualize history

---

## 🔗 Related Resources

- [Git Branching Guide](https://learngitbranching.js.org/)
- [GitHub Docs](https://docs.github.com/en/get-started/using-git)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

> 🧑‍💻 _“Git mastery isn’t about avoiding problems — it’s about solving them with confidence.”_