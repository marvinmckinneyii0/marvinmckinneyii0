# Hi, I'm Marvin 👋
🚀 AI Strategist | Founder of Savvy Analytics | Building SaaS & Agentic AI Systems

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Marvin%20McKinney-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marvin-mckinneyii/)
[![Website](https://img.shields.io/badge/Website-Savvy%20Analytics-gold)](https://www.savvyanalytics.info)

### 🔧 What I Do
- AI Strategy & Consulting (CrewAI, LangChain, n8n, MCP)
- SaaS Apps (SavvyClean, SavvyBrain, AI Audit App)
- Data Engineering (ETL/ELT Pipelines, Analytics Dashboards)

---

## 📊 Live GitHub Metrics

<!-- Metrics (generated daily by GitHub Action) -->
<p align="left">
  <img src="./metrics.svg" alt="GitHub Metrics" width="100%">
</p>

<!-- Activity graph (auto-updating image service) -->
<p align="left">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=marvinmckinneyii0&theme=github-dark&radius=8&area=true" alt="Activity Graph" width="100%">
</p>

<!-- Readme Stats (auto-updating) -->
<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=marvinmckinneyii0&show_icons=true&theme=radical&include_all_commits=true&count_private=true" alt="GitHub stats" height="165">
  <img src="https://streak-stats.demolab.com?user=marvinmckinneyii0&theme=radical&hide_border=false" alt="GitHub Streak" height="165">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=marvinmckinneyii0&layout=compact&theme=radical&langs_count=8" alt="Top Langs" height="165">
</p>

---

## 🔴 Recent Activity
<!--START_SECTION:activity-->
<!-- The latest pull requests, issues, reviews, and comments will be inserted here by a GitHub Action -->
<!--END_SECTION:activity-->

---

## 🛠 Languages & Tools
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=flat&logo=react&logoColor=61DAFB)

<!--
This is the special profile repo: marvinmckinneyii0/marvinmckinneyii0
README is auto-updated by workflows in .github/workflows.
-->
2) Add the GitHub Actions
Create the folder: .github/workflows/ in your profile repo marvinmckinneyii0/marvinmckinneyii0 and add these two files.

a) metrics.yml — generates metrics.svg daily (contributions, PRs, issues, repos, languages, achievements)
yaml
Copy code
name: Profile Metrics

on:
  schedule:
    - cron: "0 */12 * * *"   # twice a day
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout profile repo
        uses: actions/checkout@v4

      - name: Generate metrics.svg
        uses: lowlighter/metrics@latest
        with:
          # Replace ONLY if you want to run on another username
          user: marvinmckinneyii0
          template: classic
          base: header, activity, community, repositories, metadata
          config_timezone: Europe/Lisbon

          # Plugins (feel free to adjust)
          plugin_isocalendar: yes
          plugin_isocalendar_duration: full-year

          plugin_contributions: yes
          plugin_contributions_sections: commits, issues, prs, reviews
          plugin_contributions_limit: 5

          plugin_languages: yes
          plugin_languages_ignored: html, css
          plugin_languages_details: percentage
          plugin_languages_limit: 8

          plugin_stargazers: yes
          plugin_topics: yes
          plugin_topics_limit: 12
          plugin_topics_mode: mastered
          plugin_lines: yes
          plugin_achievements: yes
          plugin_achievements_display: detailed

          # Auth (GITHUB_TOKEN works for public data)
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Commit & push metrics.svg
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add metrics.svg
          git commit -m "chore: update metrics.svg" || echo "No changes to commit"
          git push
b) recent-activity.yml — injects latest PRs/issues/reviews between the markers
yaml
Copy code
name: Recent Activity

on:
  schedule:
    - cron: "*/30 * * * *"  # every 30 minutes
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: Readme-Workflows/recent-activity@v2
        with:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # This repo must be the special profile repo: username/username
          REPO: marvinmckinneyii0/marvinmckinneyii0
          MAX_LINES: 10
