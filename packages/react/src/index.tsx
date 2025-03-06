import React, { useState } from 'react';
import {
  type NudgeOptions,
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
  DEFAULT_OPTIONS
} from '@convex-nudge/core';

export type ConvexNudgeProps = NudgeOptions;

export const ConvexNudge = ({
  className = DEFAULT_OPTIONS.className,
  referralCode = DEFAULT_OPTIONS.referralCode,
  logoSize = DEFAULT_OPTIONS.logoSize,
  textSize = DEFAULT_OPTIONS.textSize,
  variant = DEFAULT_OPTIONS.variant,
  position = DEFAULT_OPTIONS.position,
  animation = DEFAULT_OPTIONS.animation,
  fixed = DEFAULT_OPTIONS.fixed,
  dismissible = DEFAULT_OPTIONS.dismissible,
  zIndex = DEFAULT_OPTIONS.zIndex,
  onDismiss
}: ConvexNudgeProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  if (!isVisible) return null;

  const colors = getThemeColors(variant!);
  const positionStyles = getPositionStyles(position!, fixed!, zIndex);
  const animationStyles = getAnimationStyles(animation!, position!);

  const containerStyles: React.CSSProperties = {
    ...CONTAINER_STYLES,
    ...positionStyles,
    ...animationStyles,
    opacity: isHovered ? 1 : colors.opacity,
    color: colors.text
  };

  const lineStyles: React.CSSProperties = {
    ...LINE_STYLES,
    background: `linear-gradient(to right, transparent, ${colors.line}, transparent)`
  };

  const logoStyles: React.CSSProperties = {
    height: `${logoSize}px`,
    width: `${logoSize}px`,
    opacity: 0.8
  };

  const textStyles: React.CSSProperties = {
    ...TEXT_STYLES,
    fontSize: getTextSize(textSize!)
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <>
      <style>{getAnimationKeyframes()}</style>
      <div className={className} style={containerStyles}>
        <div style={lineStyles} />
        <a
          href={getConvexUrl(referralCode)}
          target="_blank"
          rel="noopener noreferrer"
          style={LINK_STYLES}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={getInlineSvgUrl()}
            alt="Convex"
            style={logoStyles}
          />
          <span style={textStyles}>Built with Convex</span>
        </a>
        <div style={lineStyles} />
        {dismissible && (
          <button
            onClick={handleDismiss}
            style={DISMISS_BUTTON_STYLES}
            aria-label="Dismiss"
          >
            ×
          </button>
        )}
      </div>
    </>
  );
};

export default ConvexNudge;