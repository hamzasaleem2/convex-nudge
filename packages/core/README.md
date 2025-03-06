# @convex-nudge/core

Core functionality for Convex Nudge components. This package provides the base styles, types, and utilities used by all framework-specific implementations.

## Installation

```bash
npm install @convex-nudge/core
# or
yarn add @convex-nudge/core
# or
pnpm add @convex-nudge/core
```

## Usage

This package is primarily used internally by the framework-specific packages. However, you can use it directly if you want to create your own implementation:

```typescript
import {
  getThemeColors,
  getPositionStyles,
  getAnimationStyles,
  getTextSize,
  getAnimationKeyframes,
  CONTAINER_STYLES,
  LINE_STYLES,
  LINK_STYLES,
  TEXT_STYLES,
  DISMISS_BUTTON_STYLES,
  getConvexUrl,
  getInlineSvgUrl,
  type NudgeOptions
} from '@convex-nudge/core';

// Use the utilities to create your own nudge component
```

## API

### Types

```typescript
type NudgeOptions = {
  className?: string;
  link?: {
    path?: string;
    referralCode?: string;
    utm?: {
      source?: string;
      medium?: string;
      campaign?: string;
      term?: string;
      content?: string;
    }
  };
  /** @deprecated Use link.referralCode instead */
  referralCode?: string;
  logoSize?: number;
  textSize?: 'xs' | 'sm' | 'base';
  variant?: 'light' | 'dark' | 'purple' | 'blue';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  animation?: 'slide' | 'fade' | 'none';
  fixed?: boolean;
  dismissible?: boolean;
  zIndex?: number;
};
```

### Utilities

- `getThemeColors(variant)`: Get color scheme for a theme variant
- `getPositionStyles(position, fixed, zIndex)`: Get positioning styles
- `getAnimationStyles(animation, position)`: Get animation styles
- `getTextSize(size)`: Get text size in pixels
- `getAnimationKeyframes()`: Get CSS keyframes for animations
- `getConvexUrl(options)`: Get Convex URL with optional path, referral code, and UTM parameters
- `getInlineSvgUrl()`: Get the Convex logo SVG URL

### Style Constants

- `CONTAINER_STYLES`: Base container styles
- `LINE_STYLES`: Line divider styles
- `LINK_STYLES`: Link styles
- `TEXT_STYLES`: Text styles
- `DISMISS_BUTTON_STYLES`: Dismiss button styles

## License

MIT 