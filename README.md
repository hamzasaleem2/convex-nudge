# Convex Nudge

A beautiful and customizable "Built with Convex" component, available for multiple frameworks!

## Packages

This monorepo contains the following packages:

- [@convex-nudge/core](./packages/core) - Framework-agnostic core functionality
- [@convex-nudge/react](./packages/react) - React implementation
- [@convex-nudge/vue](./packages/vue) - Vue implementation
- [@convex-nudge/svelte](./packages/svelte) - Svelte implementation
- [@convex-nudge/remix](./packages/remix) - Remix implementation (extends React version)

## Installation

Choose the package that matches your framework:

```bash
# React
npm install @convex-nudge/react

# Vue
npm install @convex-nudge/vue

# Svelte
npm install @convex-nudge/svelte

# Remix
npm install @convex-nudge/remix
```

## Usage

### React
```jsx
import { ConvexNudge } from '@convex-nudge/react';

function App() {
  return (
    <ConvexNudge 
      variant="purple"
      position="bottom"
      animation="slide"
      link={{
        path: 'ai',  // Links to convex.dev/ai
        referralCode: 'your-code',
        utm: {
          source: 'your-app',
          medium: 'nudge',
          campaign: 'ai-features'
        }
      }}
    />
  );
}
```

### Vue
```vue
<script setup>
import { ConvexNudge } from '@convex-nudge/vue';
</script>

<template>
  <ConvexNudge 
    variant="purple"
    position="bottom"
    animation="slide"
    :link="{
      path: 'ai',
      referralCode: 'your-code',
      utm: {
        source: 'your-app',
        medium: 'nudge',
        campaign: 'ai-features'
      }
    }"
  />
</template>
```

### Svelte
```svelte
<script>
import { ConvexNudge } from '@convex-nudge/svelte';
</script>

<ConvexNudge 
  variant="purple"
  position="bottom"
  animation="slide"
  link={{
    path: 'ai',
    referralCode: 'your-code',
    utm: {
      source: 'your-app',
      medium: 'nudge',
      campaign: 'ai-features'
    }
  }}
/>
```

### Remix
```jsx
import { ConvexNudge } from '@convex-nudge/remix';

export default function App() {
  return (
    <ConvexNudge 
      variant="purple"
      position="bottom"
      animation="slide"
      routeBasedDismissal
      link={{
        path: 'ai',
        referralCode: 'your-code',
        utm: {
          source: 'your-app',
          medium: 'nudge',
          campaign: 'ai-features'
        }
      }}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `link` | `object` | `undefined` | Configuration for the Convex link |
| `link.path` | `string` | `undefined` | Path after convex.dev (e.g. 'ai' for convex.dev/ai) |
| `link.referralCode` | `string` | `undefined` | Referral code for the Convex URL |
| `link.utm` | `object` | `undefined` | UTM parameters for tracking |
| `referralCode` | `string` | `''` | **Deprecated:** Use `link.referralCode` instead |
| `logoSize` | `number` | `24` | Size of the Convex logo in pixels |
| `textSize` | `'xs' \| 'sm' \| 'base'` | `'xs'` | Size of the text |
| `variant` | `'light' \| 'dark' \| 'purple' \| 'blue'` | `'light'` | Color variant |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Position of the nudge |
| `animation` | `'fade' \| 'slide' \| 'none'` | `'fade'` | Animation style |
| `fixed` | `boolean` | `false` | Whether to use fixed positioning |
| `dismissible` | `boolean` | `false` | Whether the nudge can be dismissed |

### Framework-Specific Props

#### Remix
- `routeBasedDismissal`: `boolean` - Reset visibility on route changes

## Development

This project uses pnpm workspaces. To get started:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Development mode
pnpm dev
```

## License

MIT 