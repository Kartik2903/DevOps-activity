# DevOps Lab 1 Report: Git & GitHub Workflows

- **Name:** Daniel Paul
- **Roll No:** 2547159
- **Lab:** DevOps Lab 1
- **GitHub:** [@K1NGS1LVER](https://github.com/K1NGS1LVER)
- **Repo Link:** [https://github.com/Kartik2903/DevOps-activity](https://github.com/Kartik2903/DevOps-activity)

---

## 1. Git & GitHub Configuration

- Configured user name, email, and default editor (Neovim):
  ```zsh
  git config --global user.name "dan"
  git config --global user.email "booyahkaasah@gmail.com"
  git config --global core.editor "nvim"
  ```
- Set up GitHub CLI authentication:
  ```zsh
  gh auth status
  # Logged in to github.com account K1NGS1LVER
  ```
- Configured SSH commit signing:
  ```zsh
  git config --global commit.gpgsign true
  git config --global gpg.format ssh
  git config --global user.signingkey "/Users/dan/.ssh/id_ed25519_signing.pub"
  ```

---

## 2. Branching & Pull Requests Done by Me

- Used feature branching (`feature/*`, `docs/*`) off `main`.
- Created and merged 8 pull requests for features, documentation, and conflicts:
  - **PR #2:** Added student card generation functionality (`feature/javascript`)
  - **PR #3:** Wrote initial project README (`docs/readme`)
  - **PR #5:** Title update with merge conflict (`feature/app-title`)
  - **PR #6:** Documented how conflict was resolved (`docs/readme-conflict`)
  - **PR #7:** Added contact details section (`feature/contact`)
  - **PR #8:** Added contact branch to documentation table (`docs/readme-contact`)
  - **PR #9:** Added TL;DR conflict summary in README (`docs/readme-conflict-summary`)
  - **PR #11:** Added CI/CD pipeline, pre-commit hook, and proof images (`feature/devops-proof-and-hooks`)

![GitHub Pull Requests List with Labels](docs/screenshots/02-github-prs-proof.png)

---

## 3. Merge Conflict: Created and Resolved (Git & GitHub)

- **How it happened:**
  - Branch `feature/student-name` (PR #4) changed line 10 in `index.html` to `<h1>Student Management System</h1>`.
  - My branch `feature/app-title` (PR #5) changed the same line to `<h1>MCA Student Information Portal</h1>`.
  - PR #4 was merged first, causing PR #5 on GitHub to show a merge conflict.

- **How I fixed it locally in Git:**
  - Switched to `feature/app-title` and pulled `main`:
    ```zsh
    git switch feature/app-title
    git merge main
    ```
  - Saw conflict markers in `index.html`:
    ```html
    <<<<<<< HEAD
    <h1>MCA Student Information Portal</h1>
    ||||||| 4027e68
    <h1>Student Information System</h1>
    =======
    <h1>Student Management System</h1>
    >>>>>>> main
    ```
  - Edited `index.html` in Neovim to combine both headings:
    ```html
    <h1>Student Management System – MCA</h1>
    ```
  - Removed conflict markers, staged, and committed the fix:
    ```zsh
    git add index.html
    git commit -m "Resolve merge conflict in application title"
    ```

- **How I fixed it on GitHub:**
  - Pushed the resolution commit (`9a440f4`) to GitHub:
    ```zsh
    git push origin feature/app-title
    ```
  - GitHub detected the conflict was resolved and allowed merging PR #5.
  - Merged PR #5 using the GitHub CLI:
    ```zsh
    gh pr merge 5 --merge
    ```

![PR #5 Merge Conflict Resolution on GitHub](docs/screenshots/03-pr-conflict-details.png)

---

## 4. ⭐ Extra Work Done (Beyond Assignment Requirements)

These were not asked in the lab description but were added by me to make the repo production-ready:

1. **Custom Git Pre-Commit Hook (`.githooks/pre-commit`):**
   - Wrote a Zsh script using `ripgrep` that runs before every commit.
   - It automatically scans staged code and blocks the commit if any unresolved conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are left behind.
   - Configured via: `git config core.hooksPath .githooks`

2. **GitHub Actions CI Pipeline (`.github/workflows/ci.yml`):**
   - Created an automated CI workflow that runs on every pull request and push to `main`.
   - Checks code for unresolved conflict markers and verifies HTML parsing.

3. **GitHub Pull Request Labeling System:**
   - Created custom color-coded labels (`conflict-resolved`, `devops`, `feature`, `ui`, `enhancement`, `documentation`).
   - Categorized all pull requests using the GitHub CLI (`gh pr edit --add-label`).

4. **Cryptographic SSH Commit Signing:**
   - Configured Git to sign all commits with my local SSH key so GitHub marks them as "Verified".

5. **Terminal Proof Script via GitHub CLI (`gh`):**
   - Captured PR details, commit SHAs, and CI run logs directly from the terminal without using the browser.

---

## 5. Visual Proof Screenshots

### A. Git Commit Graph & Branch Topology
Shows the feature branches, merge bubbles, and conflict resolution commit:

![Git Commit Graph](docs/screenshots/01-git-branch-graph.png)

### B. GitHub CLI (`gh`) Live Terminal Verification
Shows live verification of PRs, conflict resolution commits (`3d5bfaa` and `9a440f4`), and passing CI runs:

![GitHub CLI Proof](docs/screenshots/04-gh-cli-evidence.png)
