# Spacing Design System

This document outlines the unified spacing system implemented to ensure consistent margins, padding, and layouts throughout the website.

## Custom Spacing Tokens

The following custom spacing tokens are defined in `tailwind.config.ts`:

### Section Spacing
- `section-sm`: 48px (3rem) - Small section spacing
- `section-md`: 64px (4rem) - Medium section spacing  
- `section-lg`: 80px (5rem) - Large section spacing
- `section-xl`: 96px (6rem) - Extra large section spacing

### Content Spacing
- `content-sm`: 16px (1rem) - Small content spacing
- `content-md`: 24px (1.5rem) - Medium content spacing
- `content-lg`: 32px (2rem) - Large content spacing

### Container Spacing
- `container-padding`: 24px (1.5rem) - Standard container padding

## Implementation Guidelines

### Page Layout Structure

```tsx
<main className="flex flex-col min-h-[100dvh] py-section-md">
  <section className="mb-section-lg">
    <div className="space-y-content-lg">
      {/* Section content */}
    </div>
  </section>
</main>
```

### Global Container

The global container is applied in `layout.tsx`:
```tsx
<div className="max-w-2xl mx-auto px-container-padding">
  {children}
</div>
```

### Section Spacing Rules

1. **Between Sections**: Use `mb-section-lg` on all sections except the last one
2. **Section Content**: Use `space-y-content-lg` for main section content areas
3. **Sub-content**: Use `space-y-content-md` for grouped content
4. **Text Content**: Use `space-y-content-sm` for paragraph spacing

### Component Spacing

#### Cards
- Base padding: `p-content-md` (handled by Card component)
- Header spacing: `space-y-1.5`
- Content spacing: Uses default padding from Card components

#### Typography
- Paragraph spacing: `space-y-content-sm`
- Section titles: Handled by section spacing

## Utility Classes

Additional utility classes are available in `globals.css`:

- `.section-spacing` - Applies `mb-section-lg`
- `.content-spacing-sm/md/lg` - Applies corresponding space-y classes
- `.page-container` - Standard page container with max-width and padding
- `.prose-spacing` - Consistent spacing for text content

## Migration Notes

### Before
```tsx
// Inconsistent spacing
<main className="space-y-10">
  <section className="py-12">
    <div className="space-y-8">
      <p className="mt-4">Content</p>
    </div>
  </section>
</main>
```

### After
```tsx
// Consistent spacing with design tokens
<main className="py-section-md">
  <section className="mb-section-lg">
    <div className="space-y-content-lg">
      <div className="space-y-content-sm">
        <p>Content</p>
      </div>
    </div>
  </section>
</main>
```

## Benefits

1. **Consistency**: All spacing follows a unified scale
2. **Maintainability**: Easy to adjust spacing globally by modifying tokens
3. **Predictability**: Developers know which spacing to use in different contexts
4. **Responsive**: Spacing tokens can be extended with responsive variants if needed
5. **Semantic**: Spacing names clearly indicate their intended use

## Best Practices

1. Always use spacing tokens instead of arbitrary values
2. Follow the section structure outlined above
3. Use semantic spacing (section vs content vs container)
4. Avoid adding extra margins/padding that conflict with the system
5. Test spacing on different screen sizes to ensure consistency 