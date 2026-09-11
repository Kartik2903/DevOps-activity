# DevOps Lab 1: Collaborative Git, GitHub Workflows, and Conflict Resolution

---

### Student Submission Details
- **Student Name:** Daniel Paul
- **Roll Number:** 2547159
- **Course Assignment:** DevOps Lab 1
- **GitHub Username:** [@K1NGS1LVER](https://github.com/K1NGS1LVER)
- **Repository URL:** [https://github.com/Kartik2903/DevOps-activity](https://github.com/Kartik2903/DevOps-activity)

---

## 1. Objective
To configure Git locally and on GitHub, implement collaborative branching strategies (GitHub Flow), perform clean merges, intentionally create and resolve merge conflicts, and manage Pull Requests with the GitHub CLI (`gh`).

---

## 2. Tools & Technologies Used
- **VCS & Platform:** Git (CLI), GitHub
- **CLI Utility:** GitHub CLI (`gh`), Oh My Zsh
- **Automation & Quality Gates:** Custom Pre-Commit Hook (`.githooks/pre-commit`), GitHub Actions CI (`.github/workflows/ci.yml`)
- **Application Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+)

---

## 3. Team Member Contributions

| Name | Roll / Reg No | GitHub | Role | Responsibility |
|---|---|---|---|---|
| **Daniel Paul** | **2547159** | **K1NGS1LVER** | **JavaScript Developer & DevOps** | Student form functionality, conflict resolution, PR management, CI/CD |
| Kartik A | — | Kartik2903 | Team Lead / Developer | Repository initialization, base structure, PR reviews |
| Sovin Somy | — | sovinsomy | UI Developer | Responsive styling, cards layout, UI polish |

---

## 4. Branching Strategy Implemented
The repository strictly implemented **GitHub Flow**:
1. `main` branch is protected and contains stable, deployable code.
2. All feature work was isolated in short-lived branches prefixed by type (`feature/*`, `docs/*`).
3. Changes were submitted to `main` strictly through GitHub Pull Requests with reviews and categorization labels.

---

## 5. Pull Requests & Conflict Resolution Evidence

### A. Pull Request Taxonomy & Status (All 11 PRs Merged)
Every Pull Request was categorized using GitHub labels:

![GitHub Pull Requests Overview](docs/screenshots/02-github-prs-proof.png)

| PR # | Branch | Author | Target | Title | Assigned Labels |
|---|---|---|---|---|---|
| #1 | `feature/ui` | sovinsomy | `main` | Improve student information UI | `ui`, `enhancement` |
| #2 | `feature/javascript` | K1NGS1LVER | `main` | Add student details functionality | `feature`, `enhancement` |
| #3 | `docs/readme` | K1NGS1LVER | `main` | Write detailed project README | `documentation` |
| #4 | `feature/student-name` | Kartik2903 | `main` | Update application heading | `enhancement` |
| #5 | `feature/app-title` | K1NGS1LVER | `main` | Update application title | `conflict-resolved`, `enhancement` |
| #6 | `docs/readme-conflict` | K1NGS1LVER | `main` | Record merge conflict resolution | `conflict-resolved`, `documentation` |
| #7 | `feature/contact` | K1NGS1LVER | `main` | Add contact information | `feature`, `enhancement` |
| #8 | `docs/readme-contact` | K1NGS1LVER | `main` | Add contact branch and PR to tables | `documentation` |
| #9 | `docs/readme-conflict-summary` | K1NGS1LVER | `main` | Add conflict resolution summary | `conflict-resolved`, `documentation` |
| #10 | `feature/ui-polish` | sovinsomy | `main` | Feature/UI polish | `ui`, `enhancement` |
| #11 | `feature/devops-proof-and-hooks` | K1NGS1LVER | `main` | Add CI workflow, pre-commit hook, labels | `devops`, `documentation`, `enhancement` |

---

### B. Merge Conflict Creation & Resolution (PR #5)
- **Cause:** Branches `feature/student-name` (PR #4) and `feature/app-title` (PR #5) both concurrently modified the `<h1>` heading in `index.html`.
- **Conflict:** PR #4 was merged first into `main`. When PR #5 attempted to merge, GitHub flagged a conflict on line 10.
- **Resolution:**
  1. Merged `main` into `feature/app-title` locally (`git merge main`).
  2. Inspected conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
  3. Combined the headings into `<h1>Student Management System – MCA</h1>`.
  4. Committed the resolution (`9a440f4`: *"Resolve merge conflict in application title"*).
  5. Pushed to remote; PR #5 merged cleanly into `main`.

![PR #5 Merge Conflict Resolution Details](docs/screenshots/03-pr-conflict-details.png)

---

## 6. Advanced DevOps Implementations

### A. Visual Git Commit Topology
The commit topology proves independent branches, divergence, and explicit merge commits:

![Git Branching & Merge Topology](docs/screenshots/01-git-branch-graph.png)

### B. GitHub CLI (`gh`) Audit Evidence
Auditing the repository state directly through the command line:

![GitHub CLI Live Evidence](docs/screenshots/04-gh-cli-evidence.png)

### C. Git Pre-Commit Hook (`.githooks/pre-commit`)
An automated quality gate using `ripgrep` prevents developers from accidentally committing files containing unresolved conflict markers:
```zsh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

### D. GitHub Actions Continuous Integration (`.github/workflows/ci.yml`)
Automated pipeline runs on every Pull Request and push to `main` verifying code integrity and HTML parsing.

---

## 7. Conclusion
All criteria for DevOps Lab 1—local Git configuration, GitHub repository linking, feature branching, pull request reviews, merge conflict generation, manual resolution, Git hooks, and CI automation—have been executed, documented, and verified.
