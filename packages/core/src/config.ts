import { NudgeOptions } from './types';

export const DEFAULT_OPTIONS: NudgeOptions = {
  className: '',
  referralCode: '',
  logoSize: 24,
  textSize: 'xs',
  variant: 'light',
  position: 'bottom',
  animation: 'fade',
  fixed: false,
  dismissible: false,
  zIndex: 50
};

export const CONTAINER_STYLES = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'opacity 0.2s ease-in-out'
};

export const LINE_STYLES = {
  height: '1px',
  width: '48px'
};

export const LINK_STYLES = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
  color: 'inherit'
};

export const TEXT_STYLES = {
  fontWeight: 500,
  letterSpacing: '0.02em'
};

export const DISMISS_BUTTON_STYLES = {
  background: 'none',
  border: 'none',
  padding: '4px',
  cursor: 'pointer',
  opacity: 0.6,
  color: 'inherit',
  fontSize: '14px'
};