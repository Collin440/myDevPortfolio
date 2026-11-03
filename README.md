# FOFO // Ground to Cloud: Developer Portfolio

> A terminal-style, anime-flavoured portfolio built with TypeScript and deployed on AWS.

**Live site:** [add URL once deployed]
**Status:** In progress
**Author:** Fofo Collin Moleme · [GitHub](https://github.com/[your-username]) · [LinkedIn]([your-link])

---

## What this is

A one-page portfolio where visitors can explore my work through a command panel
(`help`, `projects`, `skills`, `about`, `contact`, `cv`) or through normal navigation.
It is also a hands-on AWS project: static hosting, a serverless API, a database,
and infrastructure defined as code.

## Tech stack

| Layer          | Tools                                            |
| -------------- | ------------------------------------------------ |
| Frontend       | React, Vite, TypeScript, HTML, CSS               |
| Backend        | Node.js, TypeScript on AWS Lambda                |
| API            | Amazon API Gateway (HTTP API)                    |
| Database       | Amazon DynamoDB (guestbook + contact messages)   |
| Email          | Amazon SES                                       |
| Hosting / CDN  | Amazon S3 + CloudFront                           |
| Infrastructure | AWS CDK (TypeScript)                             |

Mobile (Kotlin) and AI work live in separate projects: see [PORTFOLIO.md](./PORTFOLIO.md).

## Architecture

```
Browser ──► CloudFront ──► S3 (static React build)
   │
   └──► API Gateway ──► Lambda (TypeScript) ──► DynamoDB
                                   └──────────► SES (email to me)
```

## Project structure

```
portfolio/
├─ README.md
├─ PORTFOLIO.md
├─ frontend/            # Vite + React + TypeScript
│  ├─ public/           # CV and cover letter PDFs
│  └─ src/
│     ├─ components/    # Terminal, ProjectCard, SkillTree, ThemeToggle
│     ├─ data/          # projects.ts, skills.ts, commands.ts, experience.ts
│     ├─ styles/        # palette, animations
│     └─ main.tsx
├─ backend/             # Lambda handlers
│  └─ src/              # contact.ts, guestbook.ts
├─ infra/               # AWS CDK stack
└─ docs/                # screenshots, notes
```

## Getting started

```bash
# 1. Install
cd frontend && npm install

# 2. Run locally
npm run dev

# 3. Build
npm run build
```

### Environment variables

Create `frontend/.env`:

```
VITE_API_URL=https://[your-api-id].execute-api.[region].amazonaws.com
```

Never commit `.env` files or AWS keys.

## Deployment

```bash
cd infra
npm install
npx cdk bootstrap   # first time only
npx cdk deploy
```

The stack creates the S3 bucket, CloudFront distribution, API, Lambda functions and table.

## Cost safety

- Set an AWS Budget and billing alert before deploying anything.
- Stay inside Always Free limits (Lambda, DynamoDB, CloudFront) where possible.
- Check the account plan and credit expiry dates in the Billing console.

## Roadmap

- [ ] Terminal component with command history
- [ ] Fofo ⇄ Dev theme toggle
- [ ] Project and skill data files
- [ ] Contact form → Lambda → SES + DynamoDB
- [ ] Guestbook
- [ ] CV and cover letter downloads
- [ ] CDK deploy + custom domain (optional)
- [ ] Accessibility and mobile pass

## Licence

[Choose one, e.g. MIT]
