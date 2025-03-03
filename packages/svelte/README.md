# @convex-nudge/svelte

Svelte implementation of the Convex Nudge component. A beautiful and customizable component to showcase your app's use of Convex.

## Installation

```bash
npm install @convex-nudge/svelte
# or
yarn add @convex-nudge/svelte
# or
pnpm add @convex-nudge/svelte
```

## Usage

```svelte
<script lang="ts">
  import { ConvexNudge } from '@convex-nudge/svelte';

  let isVisible = true;

  const handleDismiss = () => {
    isVisible = false;
  };
</script>

{#if isVisible}
  <ConvexNudge
    position="top-right"
    variant="light"
    dismissible={true}
    textSize="medium"
    fixed={true}
    on:dismiss={handleDismiss}
    referralCode="your-referral-code"
  />
{/if}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-right' \| 'bottom-right' \| 'top-left' \| 'bottom-left'` | `'bottom-right'` | Position of the nudge |
| `variant` | `'light' \| 'dark' \| 'purple' \| 'blue'` | `'light'` | Color variant |
| `textSize` | `'xs' \| 'sm' \| 'base'` | `'sm'` | Text size |
| `logoSize` | `number` | `20` | Size of the Convex logo in pixels |
| `fixed` | `boolean` | `true` | Whether to use fixed positioning |
| `dismissible` | `boolean` | `true` | Whether to show dismiss button |
| `zIndex` | `number` | `50` | CSS z-index |
| `referralCode` | `string` | `undefined` | Your Convex referral code |
| `animation` | `'slide' \| 'fade' \| 'none'` | `'slide'` | Animation type |

## Events

| Event | Description |
|-------|-------------|
| `dismiss` | Dispatched when the nudge is dismissed |

## License

MIT 