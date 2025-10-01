# Contributing to Valoroulette

Thank you for considering contributing to Valoroulette!

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Always use TypeScript for new files
- Define proper types and interfaces
- Avoid using `any` type

### React Components
- Use functional components with hooks
- Follow the single responsibility principle
- Keep components small and focused
- Use proper prop types

### Styling
- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing

### Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation works
- Use semantic HTML
- Test with screen readers when possible

### Performance
- Use Next.js Image component for images
- Implement lazy loading when appropriate
- Minimize bundle size
- Test Core Web Vitals

## Testing

Before submitting a PR, ensure:
- The application builds without errors: `npm run build`
- No ESLint errors: `npm run lint`
- The application runs correctly in development mode
- All features work as expected

## Commit Guidelines

- Use clear, descriptive commit messages
- Follow conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `perf:` for performance improvements
  - `test:` for test additions/changes

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation
3. Ensure all tests pass
4. Request review from maintainers

## Questions?

Feel free to open an issue for any questions or concerns.
