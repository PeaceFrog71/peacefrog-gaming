---
paths: src/**/*.tsx
---

# React Component Rules

## Structure
- Use functional components with hooks - no class components
- Define Props interface directly above the component
- Export component as default at the bottom of the file

```tsx
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

function MyComponent({ title, onClick }: MyComponentProps) {
  // Component logic
}

export default MyComponent;
```

## State Management
- Use `useState` for local component state
- Use `useMemo` for expensive calculations
- Use `useEffect` sparingly - prefer derived state where possible

## Styling
- All styles in `App.css` (single stylesheet approach for this site)
- Use descriptive class names: `.app-card`, `.hero-section`
- Follow PeaceFrog theme: dark backgrounds, cyan/gold accents

## Component Responsibilities
- **App.tsx**: Main layout, hero section, app showcase, footer
- Future components should be extracted when they exceed ~100 lines

## Imports
- Import types from `../types` if created
- Import assets with proper file extensions
- Use relative imports within src/
