---
paths: src/**/*.css
---

# Styling Rules

## Color Palette (CSS Variables)

```css
:root {
  --bg-primary: #0a0e27;      /* Deep space background */
  --bg-secondary: #141a3d;    /* Slightly lighter panels */
  --accent-cyan: #00ffcc;     /* Primary accent - links, highlights */
  --accent-blue: #00d9ff;     /* Secondary accent - gradients */
  --accent-gold: #ffa500;     /* Tertiary accent - special elements */
  --text-primary: #e0e6ed;    /* Main text */
  --text-secondary: #8892a0;  /* Subdued text */
}
```

## Typography

- **Headings**: 'Orbitron' - futuristic, techy feel
- **Body**: 'Electrolize' - clean, readable
- Both loaded from Google Fonts in index.html

## Design Patterns

### Cards
```css
.card {
  background: rgba(20, 26, 61, 0.8);
  border: 1px solid var(--accent-cyan);
  border-radius: 12px;
  padding: 1.5rem;
}
```

### Glow Effects
```css
.glow {
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
}
```

### Hover States
- Cards lift slightly: `transform: translateY(-5px)`
- Borders brighten
- Glow intensifies

## Animations

- `fadeInDown` - Hero elements entering from top
- `fadeInUp` - Content entering from bottom
- `float` - Subtle floating effect for logo
- `pulse` - Attention-grabbing glow pulse

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 768px | Tablet |
| 480px | Mobile |

## Best Practices

- Mobile-first approach
- Use CSS variables for colors
- Keep animations subtle (< 0.5s for most transitions)
- Maintain sci-fi/gaming aesthetic consistency
