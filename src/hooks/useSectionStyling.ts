import { useMemo } from 'react';
import React from 'react';
import { getSectionStyles, SectionStylingData, getOverlayStyle, getDividerJSX, generateResponsiveCSS, animationPresets } from '@/lib/section-styling';

export interface UseSectionStylingResult {
  sectionStyle: React.CSSProperties & Record<string, string>;
  theme: { bg: string; text: string; accent: string; muted: string; border: string };
  accent: string;
  muted: string;
  containerClass: string;
  layout: string;
  overlayStyle: React.CSSProperties | null;
  dividerJSX: React.ReactElement[] | null;
  responsiveCSS: string;
  id: string;
  cssClass: string;
  dataAttributes: Record<string, string>;
  animation: { initial: Record<string, any>; animate: Record<string, any> };
  animationConfig: { duration: string; delay: string; stagger?: boolean; staggerDelay: string };
}

export function useSectionStyling(sanity?: Record<string, any> & SectionStylingData, defaultId?: string): UseSectionStylingResult {
  const result = useMemo(() => getSectionStyles(sanity?.sectionStyling), [sanity?.sectionStyling]);

  const id = sanity?.sectionStyling?.id || defaultId || '';
  const cssClass = result.cssClass;
  const dataAttributes = useMemo(() => {
    const attrs: Record<string, string> = {};
    if (id) attrs['data-section'] = id;
    result.dataAttributes.forEach(da => {
      attrs[`data-${da.key}`] = da.value;
    });
    return attrs;
  }, [id, result.dataAttributes]);

  const containerClass = useMemo(() => {
    const l = result.layout;
    if (l === 'full') return 'w-full';
    if (l === 'narrow') return 'max-w-4xl mx-auto';
    if (l === 'split') return 'max-w-7xl mx-auto grid md:grid-cols-2 gap-12';
    return `mx-auto`;
  }, [result.layout]);

  const overlayStyle = useMemo(() => getOverlayStyle(result.overlay), [result.overlay]);
  const dividerJSX = useMemo(() => getDividerJSX(result.divider, result.theme.accent), [result.divider, result.theme.accent]);
  const responsiveCSS = useMemo(() => generateResponsiveCSS(id, result.responsive), [id, result.responsive]);

  const animation = result.animation;
  const animationConfig = result.animationConfig;

  return {
    sectionStyle: result.style,
    theme: result.theme,
    accent: result.theme.accent,
    muted: result.theme.muted,
    containerClass,
    layout: result.layout,
    overlayStyle,
    dividerJSX,
    responsiveCSS,
    id,
    cssClass,
    dataAttributes,
    animation,
    animationConfig,
  };
}

// Backwards compatibility
export { getSectionStyleClasses } from '@/lib/section-styling';
