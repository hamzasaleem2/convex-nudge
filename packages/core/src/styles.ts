import { ThemeColors, Variant, Position, PositionStyles, AnimationStyles, Animation, TextSize } from './types';

export const getGradientDirection = (position: Position): string => {
  switch (position) {
    case 'left':
    case 'right':
      return 'to bottom';
    default:
      return 'to right';
  }
};

export const getThemeColors = (variant: Variant): ThemeColors => {
  switch (variant) {
    case 'dark':
      return { text: 'rgba(255,255,255,0.9)', line: 'rgba(255,255,255,0.2)', opacity: 0.8 };
    case 'purple':
      return { text: '#6366f1', line: 'rgba(99,102,241,0.2)', opacity: 0.9 };
    case 'blue':
      return { text: '#3b82f6', line: 'rgba(59,130,246,0.2)', opacity: 0.9 };
    default:
      return { text: 'rgba(0,0,0,0.8)', line: 'rgba(0,0,0,0.2)', opacity: 0.6 };
  }
};

export const getBaseTransform = (position: Position): string => {
  switch (position) {
    case 'top':
    case 'bottom':
      return 'translateX(-50%)';
    case 'left':
      return 'translateY(-50%) rotate(-90deg)';
    case 'right':
      return 'translateY(-50%) rotate(90deg)';
    default:
      return 'translateX(-50%)';
  }
};

export const getPositionStyles = (position: Position, fixed: boolean, zIndex?: number): PositionStyles => {
  if (!fixed) return {};
  
  const base: PositionStyles = { position: 'fixed', zIndex: zIndex ?? 50 };
  
  switch (position) {
    case 'top': return { ...base, top: '1rem', left: '50%' };
    case 'bottom': return { ...base, bottom: '1rem', left: '50%' };
    case 'left': return { ...base, left: '1rem', top: '50%' };
    case 'right': return { ...base, right: '1rem', top: '50%' };
    default: return base;
  }
};

export const getAnimationStyles = (animation: Animation, position: Position): AnimationStyles => {
  if (animation === 'none') return { transform: getBaseTransform(position) };

  const getSlideKeyframe = () => {
    switch (position) {
      case 'top': return 'convexSlideInTop';
      case 'bottom': return 'convexSlideInBottom';
      case 'left': return 'convexSlideInLeft';
      case 'right': return 'convexSlideInRight';
      default: return 'convexSlideInBottom';
    }
  };

  const animationName = animation === 'fade' ? 'convexFadeIn' : getSlideKeyframe();
  return {
    animation: `${animationName} 0.5s ease-out forwards`,
    transform: animation === 'fade' ? getBaseTransform(position) : undefined
  };
};

export const getTextSize = (size: TextSize): string => {
  switch (size) {
    case 'xs': return '12px';
    case 'sm': return '14px';
    case 'base': return '16px';
    default: return '12px';
  }
};

export const getAnimationKeyframes = (): string => `
  @keyframes convexFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes convexSlideInBottom {
    from { transform: translateX(-50%) translateY(20px); }
    to { transform: translateX(-50%); }
  }
  @keyframes convexSlideInTop {
    from { transform: translateX(-50%) translateY(-20px); }
    to { transform: translateX(-50%); }
  }
  @keyframes convexSlideInLeft {
    from { transform: translateY(-50%) translateX(-20px) rotate(-90deg); }
    to { transform: translateY(-50%) rotate(-90deg); }
  }
  @keyframes convexSlideInRight {
    from { transform: translateY(-50%) translateX(20px) rotate(90deg); }
    to { transform: translateY(-50%) rotate(90deg); }
  }
`; 