# Contributing to Gripz AI Website

Thank you for your interest in contributing to the Gripz AI website! This document provides guidelines for internal team members contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Prioritize user experience and accessibility
- Maintain code quality and documentation

---

## 🚀 Getting Started

### Prerequisites

1. **Node.js 18+** and npm installed
2. **Git** installed and configured
3. **GitHub account** with access to this repository
4. **Code editor** (VS Code recommended)

### Setup

1. Clone and setup:
   ```bash
   git clone https://github.com/YOUR_USERNAME/gripz-website.git
   cd gripz-website
   npm install
   ```

2. Create a branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

---

## 💻 Development Workflow

### Branch Naming

Use descriptive branch names with prefixes:

- `feature/` - New features (e.g., `feature/add-blog-section`)
- `fix/` - Bug fixes (e.g., `fix/mobile-navigation`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `style/` - Style/design changes (e.g., `style/update-colors`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-animations`)

### Making Changes

1. **Always work on a branch** - Never commit directly to `main`
2. **Keep changes focused** - One feature/fix per pull request
3. **Test thoroughly** - Check responsive design, animations, and accessibility
4. **Update documentation** - If you change functionality, update README

### Testing Checklist

Before submitting a PR, verify:

- [ ] Site works on Chrome, Firefox, Safari
- [ ] Mobile responsiveness (test on actual devices if possible)
- [ ] All animations run smoothly (60fps)
- [ ] No console errors
- [ ] Accessibility: keyboard navigation works
- [ ] Links and forms function correctly
- [ ] Page loads in under 2 seconds

---

## 📝 Coding Standards

### JavaScript/React

- Use functional components with hooks
- Use descriptive variable names
- Add comments for complex logic
- Keep components under 300 lines

```javascript
// Good
const handleFormSubmit = (event) => {
  event.preventDefault();
  // Handle submission
};

// Avoid
const h = (e) => { e.preventDefault(); };
```

### CSS

- Use CSS variables for colors and spacing
- Follow mobile-first approach
- Use BEM-like naming when adding new classes
- Keep selectors specific but not overly nested

```css
/* Good */
.feature-card {
  padding: var(--spacing-lg);
}

.feature-card__title {
  font-size: 1.25rem;
}

/* Avoid */
.card > div > h3 {
  font-size: 1.25rem;
}
```

### File Organization

- Keep related code together
- One component per file for larger components
- Use clear, descriptive file names

---

## 📌 Commit Guidelines

### Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, no logic change)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `chore` - Maintenance tasks

**Examples:**

```bash
feat(hero): add animated background gradient
fix(mobile): resolve navigation menu overflow
docs(readme): update deployment instructions
style(footer): improve spacing and alignment
```

### Commit Best Practices

- Write clear, concise commit messages
- Explain *why* not just *what*
- Reference issues when applicable (`fixes #123`)
- Keep commits atomic (one logical change per commit)

---

## 🔄 Pull Request Process

### Before Submitting

1. **Update from main**
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git rebase main
   ```

2. **Run final checks**
   ```bash
   npm run build  # Ensure it builds
   ```

3. **Push your branch**
   ```bash
   git push origin your-branch
   ```

### Creating the PR

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in the template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/design change

## Screenshots (if applicable)
Add screenshots for visual changes

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile
- [ ] No console errors

## Checklist
- [ ] Code follows project style guidelines
- [ ] Documentation updated
- [ ] Changes are responsive
- [ ] Accessibility verified
```

### Review Process

- At least one team member must review
- Address all feedback or explain why you disagree
- Request re-review after making changes
- Be responsive to comments

### After Approval

- Squash commits if requested
- Maintainer will merge to main
- Delete your branch after merge

---

## 🎨 Design Guidelines

### Colors

Stick to the defined color palette in `globals.css`:
- Primary: #00ff88 (green)
- Secondary: #0088ff (blue)
- Background: #0a0a0a
- Surface: #141414

### Typography

- Headings: Inter (bold, tight letter-spacing)
- Body: Inter (regular)
- Code/Labels: JetBrains Mono

### Animations

- Use CSS animations over JavaScript
- Keep animations subtle (under 0.5s for interactions)
- Ensure 60fps performance
- Provide reduced motion alternatives

---

## 🐛 Reporting Bugs

### Before Reporting

1. Check if bug already reported in Issues
2. Verify it's reproducible
3. Test in multiple browsers

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the issue

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
 - OS: [e.g. macOS, Windows]
 - Browser: [e.g. chrome, safari]
 - Version: [e.g. 22]

**Additional context**
Any other relevant information
```

---

## 💡 Feature Requests

We welcome feature ideas! Please:

1. Check if similar feature requested
2. Describe the problem it solves
3. Suggest implementation approach
4. Consider impact on performance and UX

---

## 📞 Questions?

- Email: surya@gripz.ai
- Create a GitHub Discussion
- Ask in team Slack channel

---

Thank you for contributing to Gripz AI! 🚀
