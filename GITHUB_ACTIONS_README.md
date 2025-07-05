# GitHub Actions CI/CD Setup

This repository includes a comprehensive GitHub Actions workflow for continuous integration and deployment.

## Workflows

### 1. CI/CD Pipeline (`ci.yml`)
Main workflow that runs on every push and pull request:
- **Install Dependencies**: Caches node_modules for faster builds
- **Code Quality**: ESLint and Prettier checks
- **Type Checking**: TypeScript type validation
- **Security Audit**: Checks for vulnerabilities
- **Build**: Creates production build
- **Bundle Analysis**: Monitors bundle size
- **Lighthouse CI**: Performance testing
- **Deploy Preview**: Vercel preview for PRs
- **Deploy Production**: Vercel production deployment for main branch

### 2. Dependency Check (`dependency-check.yml`)
Weekly dependency audit:
- Checks for outdated packages
- Security vulnerability scanning
- Generates dependency reports

### 3. Auto Format (`auto-format.yml`)
Automatically formats code:
- Runs Prettier on push/PR
- Commits formatting changes automatically

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Vercel Integration
For deployment to work, add these secrets to your GitHub repository:
- `VERCEL_TOKEN`: Your Vercel token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

To get these values:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to Settings > Tokens and create a new token
3. Use `vercel link` command in your project to get org and project IDs

### 3. Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run type-check   # Run TypeScript type checking
```

## Workflow Features

### Code Quality Checks
- **ESLint**: Catches JavaScript/React issues
- **Prettier**: Enforces consistent code formatting
- **TypeScript**: Type checking for better code quality

### Security
- **npm audit**: Checks for known vulnerabilities
- **audit-ci**: Fails build on moderate+ vulnerabilities

### Performance
- **Bundle Size Analysis**: Monitors JavaScript/CSS bundle sizes
- **Lighthouse CI**: Performance, accessibility, and SEO testing
- **Build Optimization**: Ensures efficient builds

### Deployment
- **Preview Deployments**: Automatic preview for pull requests
- **Production Deployment**: Automatic deployment to production on main branch merge
- **Vercel Integration**: Seamless deployment with Vercel

## Customization

### Bundle Size Limits
Edit the bundle size limits in `ci.yml`:
```yaml
# Current limits
if [ "$MAIN_JS_SIZE" -gt 1000 ]; then  # 1MB for JS
if [ "$MAIN_CSS_SIZE" -gt 100 ]; then  # 100KB for CSS
```

### Lighthouse Thresholds
Edit performance thresholds in `lighthouserc.json`:
```json
{
  "categories:performance": ["warn", {"minScore": 0.8}],
  "categories:accessibility": ["error", {"minScore": 0.9}]
}
```

### ESLint Rules
Customize linting rules in `.eslintrc.json`:
```json
{
  "rules": {
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

## Troubleshooting

### Common Issues

1. **ESLint Errors**: Run `npm run lint:fix` to auto-fix issues
2. **Prettier Formatting**: Run `npm run format` to format code
3. **Type Errors**: Check `tsconfig.json` configuration
4. **Build Failures**: Ensure all dependencies are installed with `npm ci`

### GitHub Actions Debugging

- Check the "Actions" tab in your GitHub repository
- Look for failed jobs and expand the logs
- Common issues: missing secrets, dependency conflicts, or linting errors

## Best Practices

1. **Always run linting/formatting before committing**
2. **Keep dependencies updated** (check weekly dependency reports)
3. **Monitor bundle sizes** to maintain good performance
4. **Review Lighthouse reports** for performance optimization
5. **Test locally** before pushing to avoid CI failures

## File Structure

```
.github/
├── workflows/
│   ├── ci.yml              # Main CI/CD pipeline
│   ├── dependency-check.yml # Weekly dependency audit
│   └── auto-format.yml     # Auto code formatting
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── .prettierignore         # Prettier ignore rules
├── tsconfig.json           # TypeScript configuration
├── lighthouserc.json       # Lighthouse CI configuration
└── GITHUB_ACTIONS_README.md # This file
```
