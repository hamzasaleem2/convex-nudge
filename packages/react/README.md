# @convex-nudge/react

React implementation of the Convex Nudge component. A beautiful and customizable component to showcase your app's use of Convex.

📦 [GitHub Repository](https://github.com/hamzasaleem2/convex-nudge)

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
          link={{
            path: 'ai',  // Optional: Links to convex.dev/ai
            referralCode: 'your-referral-code',
            utm: {  // Optional: Add UTM parameters
              source: 'your-app',
              medium: 'nudge',
              campaign: 'convex-ai'
            }
          }}
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
| `link` | `{ path?: string; referralCode?: string; utm?: { source?: string; medium?: string; campaign?: string; term?: string; content?: string; } }` | `undefined` | Link configuration with path, referral code and UTM parameters |
| `referralCode` | `string` | `undefined` | Your Convex referral code (deprecated, use link.referralCode instead) |
| `animation` | `'slide' \| 'fade' \| 'none'` | `'slide'` | Animation type |
| `onDismiss` | `() => void` | `undefined` | Callback when nudge is dismissed |

## License

MIT 