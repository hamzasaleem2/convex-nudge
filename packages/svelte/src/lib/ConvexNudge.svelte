<script lang="ts">
  import {
    type NudgeOptions,
    getThemeColors,
    getPositionStyles,
    getAnimationStyles,
    getTextSize,
    getAnimationKeyframes,
    getGradientDirection,
    DEFAULT_OPTIONS,
    CONTAINER_STYLES,
    LINE_STYLES,
    LINK_STYLES,
    TEXT_STYLES,
    DISMISS_BUTTON_STYLES,
    getConvexUrl,
    getInlineSvgUrl
  } from '@convex-nudge/core';

  export let className = DEFAULT_OPTIONS.className;
  export let link: NudgeOptions['link'] = undefined;
  export let referralCode = DEFAULT_OPTIONS.referralCode;
  export let logoSize = DEFAULT_OPTIONS.logoSize;
  export let textSize = DEFAULT_OPTIONS.textSize;
  export let variant = DEFAULT_OPTIONS.variant;
  export let position = DEFAULT_OPTIONS.position;
  export let animation = DEFAULT_OPTIONS.animation;
  export let fixed = DEFAULT_OPTIONS.fixed;
  export let dismissible = DEFAULT_OPTIONS.dismissible;
  export let zIndex = DEFAULT_OPTIONS.zIndex;
  export let onDismiss: (() => void) | undefined = undefined;

  let isVisible = true;
  let isHovered = false;

  const colors = getThemeColors(variant);
  const positionStyles = getPositionStyles(position, fixed, zIndex);
  const animationStyles = getAnimationStyles(animation, position);
  const gradientDirection = getGradientDirection(position);

  const containerStyles = {
    ...CONTAINER_STYLES,
    ...positionStyles,
    ...animationStyles,
    opacity: isHovered ? 1 : colors.opacity,
    color: colors.text
  };

  const lineStyles = {
    ...LINE_STYLES,
    background: `linear-gradient(${gradientDirection}, transparent, ${colors.line}, transparent)`
  };

  const logoStyles = {
    height: `${logoSize}px`,
    width: `${logoSize}px`,
    opacity: 0.8
  };

  const textStyles = {
    ...TEXT_STYLES,
    fontSize: getTextSize(textSize)
  };

  const handleDismiss = () => {
    isVisible = false;
    onDismiss?.();
  };

  // Helper function to convert styles object to string
  const styleToString = (styles: Record<string, string | number>) => {
    return Object.entries(styles)
      .sort(([a], [b]) => a.localeCompare(b)) // Sort properties alphabetically
      .map(([key, value]) => `${key}: ${value}`)
      .join(';');
  };

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

{#if isVisible}
  <div class={className}>
    {@html `<style>${getAnimationKeyframes()}</style>`}
    <div style={styleToString(containerStyles)}>
      <div style={styleToString(lineStyles)} />
      <a
        href={getConvexUrl(link || referralCode)}
        target="_blank"
        rel="noopener noreferrer"
        style={styleToString(LINK_STYLES)}
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
      >
        <img
          src={getInlineSvgUrl()}
          alt="Convex"
          style={styleToString(logoStyles)}
        />
        <span style={styleToString(textStyles)}>
          Built with Convex
        </span>
      </a>
      <div style={styleToString(lineStyles)} />
      {#if dismissible}
        <button
          on:click={handleDismiss}
          style={styleToString(DISMISS_BUTTON_STYLES)}
          aria-label="Dismiss"
        >
          ×
        </button>
      {/if}
    </div>
  </div>
{/if} 