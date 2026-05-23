# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- GitHub Actions CI pipeline (typecheck, lint, test, build)
- Security headers in `vercel.json` (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- ErrorBoundary component for graceful lazy-load failures
- Axe-core accessibility E2E tests
- Environment validation with `@t3-oss/env-core`
- Husky + lint-staged pre-commit hooks
- Unit tests for ErrorBoundary and AuditTool components
- `React.memo` optimization on Stats, WhyChooseUs, Process sections

### Fixed

- ESLint version compatibility (`@typescript-eslint` downgraded to v7 for ESLint v8)
- AudioContext memory leak (single shared context, closed on unmount)
- Duplicate AudioContext creation in Navbar sound toggle
- API input sanitization (URL validation, XSS rejection, rate limiting)
- DRY violation in InfinityScene (extracted repeated SVG path into component)
- Vitest config scanning `node_modules` tests
- TypeScript strict type errors in InfinityScene motion props

[Unreleased]: https://github.com/oneverce/portfolio/compare/v1.0.0...HEAD
