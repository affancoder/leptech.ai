"use client";

import { useEffect, useState } from "react";

export const useLowEndDevice = () => {
  const [isLowEnd, setIsLowEnd] = useState<boolean>(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
    };

    const cpu = nav.hardwareConcurrency || 8;
    const memory = nav.deviceMemory || 8;

    const prefersReducedMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const lowCPU = cpu <= 4;
    const lowMemory = memory <= 4;

    if ((lowCPU && lowMemory) || prefersReducedMotion) {
      setIsLowEnd(true);
    }
  }, []);

  return isLowEnd;
};