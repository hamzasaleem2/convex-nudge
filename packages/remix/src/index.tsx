import React from 'react';
import { useLocation } from '@remix-run/react';
import { ConvexNudge as ReactNudge } from '@convex-nudge/react';
import { type NudgeOptions } from '@convex-nudge/core';
import { useEffect, useState } from 'react';

export type ConvexNudgeProps = NudgeOptions;

export const ConvexNudge = (props: ConvexNudgeProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [location.pathname]);

  return isVisible ? <ReactNudge {...props} onDismiss={() => setIsVisible(false)} /> : null;
};

export default ConvexNudge; 