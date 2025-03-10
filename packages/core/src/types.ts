export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Variant = 'light' | 'dark' | 'purple' | 'blue';
export type Animation = 'fade' | 'slide' | 'none';
export type TextSize = 'xs' | 'sm' | 'base';

export interface NudgeOptions {
  className?: string;
  referralCode?: string;
  logoSize?: number;
  textSize?: TextSize;
  variant?: Variant;
  position?: Position;
  animation?: Animation;
  fixed?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  zIndex?: number;
}

export interface ThemeColors {
  text: string;
  line: string;
  opacity: number;
}

export interface PositionStyles {
  position?: 'fixed';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
}

export interface AnimationStyles {
  animation?: string;
  transform?: string;
}