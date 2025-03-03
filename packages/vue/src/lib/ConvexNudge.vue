<!-- packages/vue/src/lib/ConvexNudge.vue -->
<script setup lang="ts">
import { ref } from 'vue';
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

const props = withDefaults(defineProps<{
  className?: string;
  referralCode?: string;
  logoSize?: number;
  textSize?: NudgeOptions['textSize'];
  variant?: NudgeOptions['variant'];
  position?: NudgeOptions['position'];
  animation?: NudgeOptions['animation'];
  fixed?: boolean;
  dismissible?: boolean;
  zIndex?: number;
}>(), {
  className: DEFAULT_OPTIONS.className,
  referralCode: DEFAULT_OPTIONS.referralCode,
  logoSize: DEFAULT_OPTIONS.logoSize,
  textSize: DEFAULT_OPTIONS.textSize,
  variant: DEFAULT_OPTIONS.variant,
  position: DEFAULT_OPTIONS.position,
  animation: DEFAULT_OPTIONS.animation,
  fixed: DEFAULT_OPTIONS.fixed,
  dismissible: DEFAULT_OPTIONS.dismissible,
  zIndex: DEFAULT_OPTIONS.zIndex
});

const emit = defineEmits<{
  (e: 'dismiss'): void;
}>();

const isVisible = ref(true);
const isHovered = ref(false);

const colors = getThemeColors(props.variant);
const positionStyles = getPositionStyles(props.position, props.fixed, props.zIndex);
const animationStyles = getAnimationStyles(props.animation, props.position);

const containerStyles = {
  ...CONTAINER_STYLES,
  ...positionStyles,
  ...animationStyles,
  opacity: isHovered.value ? 1 : colors.opacity,
  color: colors.text
};

const lineStyles = {
  ...LINE_STYLES,
  background: `linear-gradient(to right, transparent, ${colors.line}, transparent)`
};

const logoStyles = {
  height: `${props.logoSize}px`,
  width: `${props.logoSize}px`,
  opacity: 0.8
};

const textStyles = {
  ...TEXT_STYLES,
  fontSize: getTextSize(props.textSize)
};

const handleDismiss = () => {
  isVisible.value = false;
  emit('dismiss');
};
</script>

<template>
  <div v-if="isVisible" :class="className">
    <style v-html="getAnimationKeyframes()" />
    <div :style="containerStyles">
      <div :style="lineStyles" />
      <a
        :href="getConvexUrl(referralCode)"
        target="_blank"
        rel="noopener noreferrer"
        :style="LINK_STYLES"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <img
          :src="getInlineSvgUrl()"
          alt="Convex"
          :style="logoStyles"
        />
        <span :style="textStyles">Built with Convex</span>
      </a>
      <div :style="lineStyles" />
      <button
        v-if="dismissible"
        @click="handleDismiss"
        :style="DISMISS_BUTTON_STYLES"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  </div>
</template>

<style scoped>
.nudge-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.message {
  margin: 0;
  font-size: 14px;
}

.message.info {
  color: #3b82f6;
}

.message.success {
  color: #22c55e;
}

.message.warning {
  color: #f59e0b;
}

.message.error {
  color: #ef4444;
}
</style>