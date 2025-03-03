import { createApp, h } from 'vue';
import type { NudgeOptions } from '@convex-nudge/core';
import ConvexNudge from './ConvexNudge.vue';

export interface ShowOptions extends Partial<NudgeOptions> {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

export function createNudge(defaultOptions: Partial<NudgeOptions> = {}) {
  return {
    show(options: ShowOptions) {
      const container = document.createElement('div');
      document.body.appendChild(container);

      const app = createApp({
        render() {
          return h(ConvexNudge, {
            ...defaultOptions,
            ...options,
            onDismiss: () => {
              app.unmount();
              container.remove();
            }
          });
        }
      });

      app.mount(container);
    }
  };
}