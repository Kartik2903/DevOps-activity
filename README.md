# Student Information System (student-info-app)

A simple client-side student information web app, built as a hands-on exercise in **collaborative Git and GitHub workflows**. It lets a user enter a student's name, register number, and programme and renders each entry as a card on the page. There is no backend, database, or build step — just HTML, CSS, and plain JavaScript.

## Team Members

| Name            | GitHub             | Role                      | Responsibility                            |
|-----------------|--------------------|---------------------------|--------------------------------------------|
| Kartik A        | Kartik2903          | Team Lead / Developer     | Repository setup, base app, integration/review of PRs |
| Daniel Paul     | K1NGS1LVER         | JavaScript Developer      | Student form → dynamic card functionality  |
| Sovin Somy      | sovinsomy           | UI Developer              | Card layout, spacing, heading/button styling |

## Project Description

The app presents a small form (Name, Register Number, Programme). When **Add Student** is clicked, JavaScript validates that all three fields are filled, then appends a `.student-card` to the student list and clears the form. Built specifically to practice branching, pull requests, and merge-conflict resolution — the application itself is intentionally minimal.

### Features

- Add a student through a simple form
- Client-side validation (all fields required)
- Renders each student as a styled card in a running list
- No backend, no dependencies, no build step

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Git & GitHub (branches, pull requests, merges, conflict resolution)
- VS Code (recommended editor)

## Repository Structure

```
student-info-app/
│
├── index.html   # Form + student list markup
├── style.css    # Card layout, spacing, heading/button styling
├── script.js    # Form validation + dynamic card rendering
└── README.md
```

## Git Branching Strategy

The team uses a simple **feature-branch workflow**: `main` always holds a working version, and every change is developed on its own branch, reviewed via a pull request, and merged only after approval.

- Every feature gets its own branch off an up-to-date `main` (`git switch -c <branch>`)
- Branches are named `feature/<purpose>`
- No one commits directly to `main`
- Pull requests are reviewed by the team lead before merging
- Afterward, all local `main` branches are synced before the next branch is created

| Branch                | Author        | Purpose                                     | Status   |
|-----------------------|---------------|----------------------------------------------|----------|
| `main`                | Team          | Stable, integrated history                   | Active   |
| `feature/ui`          | Sovin Somy    | Card layout, spacing, heading/button styling | Merged   |
| `feature/javascript`  | Daniel Paul   | Add-student form → dynamic card functionality| Merged   |
| `feature/contact`     | TBD           | Contact information section                  | To do    |
| `feature/student-name`| TBD           | Heading change for conflict exercise         | To do    |
| `feature/app-title`   | TBD           | Heading change for conflict exercise         | To do    |

## Pull Requests Created

| #  | Branch          | → Target | Title                                 | Author        | Status  |
|----|-----------------|----------|----------------------------------------|---------------|---------|
| 1  | `feature/ui`    | `main`   | Improve student information UI         | Sovin Somy    | Merged  |
| 2  | `feature/javascript` | `main` | Add student details functionality      | Daniel Paul   | Merged  |

*Additional PRs (e.g. `feature/contact`) will be listed here as the exercise progresses.*

## Merge Conflict: Cause and Resolution

> Section maintained for the conflict exercise — completed by the team during the lab.

### What caused the conflict

Two branches (`feature/student-name` and `feature/app-title`) changed the **same line** — the `<h1>` heading in `index.html` — in different ways while branching off the same older version of `main`. Git cannot merge two different edits to the same content automatically, so it flags a conflict instead of guessing.

```
<<<<<<< HEAD
<h1>MCA Student Information Portal</h1>
=======
<h1>Student Management System</h1>
>>>>>>> main
```

### How it was resolved

- The contributor with the second branch fetched latest `main`, merged it into their branch, and opened `index.html`
- The team decided on a combined title: `<h1>Student Management System – MCA</h1>`
- All conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were removed
- The resolved file was staged, committed (`Resolve merge conflict in application title`), and pushed
- The pull request then merged cleanly into `main`

### Evidence

- Screenshot of conflict markers in the file
- Screenshot of the resolved heading
- Pull request showing the successful merge

## How to Run the Application

No build, install, or server required.

```bash
git clone https://github.com/Kartik2903/DevOps-activity.git
cd DevOps-activity
open index.html
```

Or simply double-click `index.html` — the app runs entirely in the browser.

### Try it

1. Enter a **Name**, **Register Number**, and **Programme**
2. Click **Add Student**
3. A card with the student's details appears in the **Student List**
4. Leaving any field blank shows a validation prompt

## Learning Objectives Demonstrated

- Local Git configuration and cloning a remote repository
- Feature branching and creating meaningful commits
- Pushing branches and opening pull requests
- Reviewing and merging changes without overwriting teammates' work
- Intentionally creating and resolving a merge conflict