# @convex-nudge/react

React implementation of the Convex Nudge component. A beautiful and customizable component to showcase your app's use of Convex.

## Installation

```bash
npm install @convex-nudge/react
# or
yarn add @convex-nudge/react
# or
pnpm add @convex-nudge/react
```

## Usage

```tsx
import { ConvexNudge } from '@convex-nudge/react';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <ConvexNudge
          position="top-right"
          variant="light"
          dismissible={true}
          textSize="medium"
          fixed={true}
          onDismiss={handleDismiss}
          referralCode="your-referral-code"
        />
      )}
    </>
  );
}
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
| `onDismiss` | `() => void` | `undefined` | Callback when nudge is dismissed |

## License

MIT 