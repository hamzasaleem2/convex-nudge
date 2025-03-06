# @convex-nudge/vue

Vue implementation of the Convex Nudge component. A beautiful and customizable component to showcase your app's use of Convex.

## Installation

```bash
npm install @convex-nudge/vue
# or
yarn add @convex-nudge/vue
# or
pnpm add @convex-nudge/vue
```

## Usage

```vue
<script setup lang="ts">
import { ConvexNudge } from '@convex-nudge/vue'

const isVisible = ref(true)

const handleDismiss = () => {
  isVisible.value = false
}
</script>

<template>
  <ConvexNudge
    v-if="isVisible"
    position="top-right"
    variant="light"
    :dismissible="true"
    textSize="medium"
    :fixed="true"
    @dismiss="handleDismiss"
    referralCode="your-referral-code"
  />
</template>
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
| `dismiss` | Emitted when the nudge is dismissed |

## License

MIT 