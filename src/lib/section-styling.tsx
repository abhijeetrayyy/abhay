import { urlFor } from '@/lib/sanity';
import React from 'react';

// ── THEME PRESETS ───────────────────────────────────────────────
export const themeColors: Record<string, { bg: string; text: string; accent: string; muted?: string; border?: string }> = {
  default: { bg: '#FBF9F5', text: '#1F1B16', accent: '#C9A04A', muted: 'rgba(31,27,22,0.55)', border: 'rgba(31,27,22,0.06)' },
  dark: { bg: '#0A0F1A', text: '#FDFCFA', accent: '#C9A04A', muted: 'rgba(253,252,250,0.55)', border: 'rgba(253,252,250,0.08)' },
  warm: { bg: '#F5F1EA', text: '#1F1B16', accent: '#A07D2E', muted: 'rgba(31,27,22,0.55)', border: 'rgba(31,27,22,0.06)' },
  forest: { bg: '#1A2E1A', text: '#E8F0E8', accent: '#9BA88B', muted: 'rgba(232,240,232,0.55)', border: 'rgba(232,240,232,0.08)' },
  midnight: { bg: '#0F1A30', text: '#FDFCFA', accent: '#E8CD7A', muted: 'rgba(253,252,250,0.55)', border: 'rgba(253,252,250,0.08)' },
};

// ── SHADOW PRESETS ──────────────────────────────────────────────
export const shadowPresets: Record<string, string> = {
  none: 'none',
  subtle: '0 2px 8px rgba(0,0,0,0.04)',
  medium: '0 4px 16px rgba(0,0,0,0.08)',
  large: '0 8px 32px rgba(0,0,0,0.12)',
  elevated: '0 16px 48px rgba(0,0,0,0.16)',
};

// ── ANIMATION PRESETS ───────────────────────────────────────────
export const animationPresets: Record<string, { initial: Record<string, any>; animate: Record<string, any> }> = {
  'fade-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
  'slide-left': { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  'slide-right': { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  'scale-in': { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  'none': { initial: {}, animate: {} },
};

// ── TYPES ───────────────────────────────────────────────────────
export interface GradientStop {
  color: string;
  position?: number;
}

export interface ImageSettings {
  objectFit?: string;
  objectPosition?: string;
  attachment?: string;
  opacity?: number;
}

export interface OverlayConfig {
  enabled?: boolean;
  type?: string;
  color?: string;
  opacity?: number;
}

export interface TypographyConfig {
  headingFont?: string;
  bodyFont?: string;
  headingSize?: string;
  bodySize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
}

export interface DividerConfig {
  position?: string;
  style?: string;
  color?: string;
  thickness?: string;
}

export interface ResponsiveConfig {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  mobilePadding?: string;
  mobileTextAlign?: string;
}

export interface DataAttribute {
  key: string;
  value: string;
}

export interface SectionStylingData {
  sectionStyling?: {
    backgroundType?: string;
    theme?: string;
    backgroundColor?: string;
    backgroundImage?: any;
    backgroundImageSettings?: ImageSettings;
    backgroundVideo?: any;
    gradientType?: string;
    gradientDirection?: string;
    gradientStops?: GradientStop[];
    overlay?: OverlayConfig;
    typography?: TypographyConfig;
    textColor?: string;
    accentColor?: string;
    mutedTextColor?: string;
    borderColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingX?: string;
    maxWidth?: string;
    gap?: string;
    layout?: string;
    verticalAlign?: string;
    horizontalAlign?: string;
    borderTop?: string;
    borderBottom?: string;
    borderRadius?: string;
    shadow?: string;
    cardShadow?: string;
    animation?: string;
    animationDuration?: string;
    animationDelay?: string;
    staggerChildren?: boolean;
    staggerDelay?: string;
    divider?: DividerConfig;
    responsive?: ResponsiveConfig;
    customCSS?: string;
    cssClass?: string;
    id?: string;
    dataAttributes?: DataAttribute[];
  };
}

// ── HELPER: Build gradient CSS ──────────────────────────────────
function buildGradient(styling: NonNullable<SectionStylingData['sectionStyling']>): string {
  const type = styling.gradientType || 'linear';
  const direction = styling.gradientDirection || '135deg';
  const stops = styling.gradientStops || [];

  if (stops.length === 0) return '';

  const stopStr = stops.map(s => s.position ? `${s.color} ${s.position}%` : s.color).join(', ');

  if (type === 'linear') return `linear-gradient(${direction}, ${stopStr})`;
  if (type === 'radial') return `radial-gradient(${direction || 'ellipse at center'}, ${stopStr})`;
  if (type === 'conic') return `conic-gradient(from ${direction || '0deg'}, ${stopStr})`;
  return '';
}

// ── HELPER: Build overlay CSS ───────────────────────────────────
function buildOverlay(overlay?: OverlayConfig, accent?: string): string {
  if (!overlay?.enabled) return '';

  const type = overlay.type || 'solid';
  const opacity = overlay.opacity ?? 0.5;

  if (type === 'solid' && overlay.color) {
    return `background: ${overlay.color}; opacity: ${opacity};`;
  }
  if (type === 'gradient') {
    return `background: linear-gradient(to bottom, rgba(0,0,0,${opacity * 0.8}), rgba(0,0,0,${opacity * 0.3}));`;
  }
  if (type === 'grain') {
    return `background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='${opacity}'/%3E%3C/svg%3E"); background-size: 128px 128px;`;
  }
  if (type === 'vignette') {
    return `background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,${opacity}) 100%);`;
  }
  return '';
}

// ── HELPER: Build divider CSS ───────────────────────────────────
function buildDivider(divider?: DividerConfig, accent?: string): { top?: string; bottom?: string } {
  if (!divider?.position || !divider.style) return {};
  const color = divider.color || (accent ? `${accent}33` : 'rgba(0,0,0,0.08)');
  const thickness = divider.thickness || '1px';
  const result: { top?: string; bottom?: string } = {};

  const line = `${thickness} ${divider.style === 'gradient' ? 'solid' : 'solid'} ${color}`;
  if (divider.style === 'gradient') {
    const gradientLine = `linear-gradient(to right, transparent, ${color}, transparent)`;
    const borderVal = `${thickness} solid transparent`;
    if (divider.position === 'top' || divider.position === 'both') result.top = `${borderVal}; border-image: ${gradientLine} 1;`;
    if (divider.position === 'bottom' || divider.position === 'both') result.bottom = `${borderVal}; border-image: ${gradientLine} 1;`;
  } else {
    if (divider.position === 'top' || divider.position === 'both') result.top = line;
    if (divider.position === 'bottom' || divider.position === 'both') result.bottom = line;
  }
  return result;
}

// ── MAIN: Get section styles ────────────────────────────────────
export function getSectionStyles(styling?: SectionStylingData['sectionStyling']) {
  const theme = styling?.theme || 'default';
  const colors = themeColors[theme] || themeColors.default;

  const bgType = styling?.backgroundType || 'solid';
  const bg = styling?.backgroundColor || colors.bg;
  const text = styling?.textColor || colors.text;
  const accent = styling?.accentColor || colors.accent;
  const muted = styling?.mutedTextColor || colors.muted || 'rgba(31,27,22,0.55)';
  const border = styling?.borderColor || colors.border || 'rgba(31,27,22,0.06)';

  // CSS Variables
  const cssVars: Record<string, string> = {
    '--section-bg': bg,
    '--section-text': text,
    '--section-accent': accent,
    '--section-muted': muted,
    '--section-border': border,
  };

  // Base style object
  const style: React.CSSProperties & Record<string, string> = {
    color: text,
    ...Object.fromEntries(Object.entries(cssVars).map(([k, v]) => [k, v])),
  };

  // Background
  if (bgType === 'solid') {
    style.backgroundColor = bg;
  } else if (bgType === 'gradient' && styling?.gradientStops?.length) {
    style.background = buildGradient(styling);
  } else if (bgType === 'none') {
    style.backgroundColor = 'transparent';
  }

  // Background image
  if (bgType === 'image' && styling?.backgroundImage) {
    const imgUrl = urlFor(styling.backgroundImage).url();
    const settings = styling.backgroundImageSettings || {};
    const fit = settings.objectFit || 'cover';
    const position = settings.objectPosition || 'center';
    const attachment = settings.attachment || 'scroll';
    const opacity = settings.opacity ?? 1;

    style.backgroundImage = `url(${imgUrl})`;
    style.backgroundSize = fit;
    style.backgroundPosition = position;
    style.backgroundAttachment = attachment;
    style.backgroundRepeat = 'no-repeat';
    if (opacity < 1) {
      style.position = 'relative';
    }
  }

  // Overlay
  if (styling?.overlay?.enabled) {
    const overlayStyle = buildOverlay(styling.overlay, accent);
    if (overlayStyle) {
      style['--overlay-style'] = overlayStyle;
    }
  }

  // Typography
  if (styling?.typography) {
    const t = styling.typography;
    if (t.headingFont) cssVars['--heading-font'] = t.headingFont;
    if (t.bodyFont) cssVars['--body-font'] = t.bodyFont;
    if (t.headingSize) cssVars['--heading-size'] = t.headingSize;
    if (t.bodySize) cssVars['--body-size'] = t.bodySize;
    if (t.lineHeight) cssVars['--line-height'] = t.lineHeight;
    if (t.letterSpacing) cssVars['--letter-spacing'] = t.letterSpacing;
    if (t.textAlign) style.textAlign = t.textAlign as React.CSSProperties['textAlign'];
  }

  // Spacing
  if (styling?.paddingTop) style.paddingTop = styling.paddingTop;
  if (styling?.paddingBottom) style.paddingBottom = styling.paddingBottom;
  if (styling?.paddingX) {
    style.paddingLeft = styling.paddingX;
    style.paddingRight = styling.paddingX;
  }
  if (styling?.maxWidth) style.maxWidth = styling.maxWidth;
  if (styling?.gap) cssVars['--section-gap'] = styling.gap;

  // Layout
  const layout = styling?.layout || 'contained';
  if (styling?.verticalAlign) style.alignItems = styling.verticalAlign;
  if (styling?.horizontalAlign) style.justifyContent = styling.horizontalAlign;

  // Borders
  if (styling?.borderTop) style.borderTop = styling.borderTop;
  if (styling?.borderBottom) style.borderBottom = styling.borderBottom;
  if (styling?.borderRadius) style.borderRadius = styling.borderRadius;

  // Shadows
  if (styling?.shadow) style.boxShadow = styling.shadow;
  if (styling?.cardShadow) {
    const preset = shadowPresets[styling.cardShadow];
    cssVars['--card-shadow'] = preset || styling.cardShadow;
  }

  // Divider
  const dividerStyles = buildDivider(styling?.divider, accent);
  if (dividerStyles.top) style.borderTop = dividerStyles.top;
  if (dividerStyles.bottom) style.borderBottom = dividerStyles.bottom;

  // Responsive
  if (styling?.responsive) {
    const r = styling.responsive;
    if (r.hideOnMobile) cssVars['--hide-mobile'] = 'true';
    if (r.hideOnTablet) cssVars['--hide-tablet'] = 'true';
    if (r.hideOnDesktop) cssVars['--hide-desktop'] = 'true';
    if (r.mobilePadding) cssVars['--mobile-padding'] = r.mobilePadding;
    if (r.mobileTextAlign) cssVars['--mobile-text-align'] = r.mobileTextAlign;
  }

  // Animation
  const anim = styling?.animation || 'fade-up';
  const animPreset = animationPresets[anim] || animationPresets['fade-up'];
  cssVars['--anim-duration'] = styling?.animationDuration || '0.8s';
  cssVars['--anim-delay'] = styling?.animationDelay || '0s';
  if (styling?.staggerChildren) {
    cssVars['--stagger-delay'] = styling.staggerDelay || '0.1s';
  }

  return {
    style,
    cssVars,
    theme: { bg, text, accent, muted, border },
    layout,
    animation: animPreset,
    animationConfig: {
      duration: styling?.animationDuration || '0.8s',
      delay: styling?.animationDelay || '0s',
      stagger: styling?.staggerChildren,
      staggerDelay: styling?.staggerDelay || '0.1s',
    },
    responsive: styling?.responsive || {},
    cssClass: styling?.cssClass || '',
    id: styling?.id || '',
    dataAttributes: styling?.dataAttributes || [],
    customCSS: styling?.customCSS || '',
    bgType,
    overlay: styling?.overlay,
    typography: styling?.typography,
    divider: styling?.divider,
  };
}

// ── HELPER: Get container classes ───────────────────────────────
export function getContainerClass(layout?: string, maxWidth?: string) {
  const l = layout || 'contained';
  if (l === 'full') return 'w-full';
  if (l === 'narrow') return 'max-w-4xl mx-auto';
  if (l === 'split') return 'max-w-7xl mx-auto grid md:grid-cols-2 gap-12';
  const width = maxWidth || '1440px';
  return `mx-auto`;
}

// ── HELPER: Generate responsive CSS ─────────────────────────────
export function generateResponsiveCSS(id: string, responsive?: ResponsiveConfig) {
  if (!responsive) return '';
  const rules: string[] = [];

  if (responsive.hideOnMobile) {
    rules.push(`@media (max-width: 767px) { [data-section="${id}"] { display: none !important; } }`);
  }
  if (responsive.hideOnTablet) {
    rules.push(`@media (min-width: 768px) and (max-width: 1024px) { [data-section="${id}"] { display: none !important; } }`);
  }
  if (responsive.hideOnDesktop) {
    rules.push(`@media (min-width: 1025px) { [data-section="${id}"] { display: none !important; } }`);
  }
  if (responsive.mobilePadding) {
    rules.push(`@media (max-width: 767px) { [data-section="${id}"] { padding: ${responsive.mobilePadding} !important; } }`);
  }
  if (responsive.mobileTextAlign) {
    rules.push(`@media (max-width: 767px) { [data-section="${id}"] { text-align: ${responsive.mobileTextAlign} !important; } }`);
  }

  return rules.join('\n');
}

// ── HELPER: Generate overlay style ──────────────────────────────
export function getOverlayStyle(overlay?: OverlayConfig): React.CSSProperties | null {
  if (!overlay?.enabled) return null;

  const type = overlay.type || 'solid';
  const opacity = overlay.opacity ?? 0.5;

  if (type === 'solid' && overlay.color) {
    return {
      position: 'absolute' as const,
      inset: 0,
      background: overlay.color,
      opacity,
      pointerEvents: 'none' as const,
      zIndex: 1,
    };
  }
  if (type === 'gradient') {
    return {
      position: 'absolute' as const,
      inset: 0,
      background: `linear-gradient(to bottom, rgba(0,0,0,${opacity * 0.8}), rgba(0,0,0,${opacity * 0.3}))`,
      pointerEvents: 'none' as const,
      zIndex: 1,
    };
  }
  if (type === 'grain') {
    return {
      position: 'absolute' as const,
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='${opacity}'/%3E%3C/svg%3E")`,
      backgroundSize: '128px 128px',
      pointerEvents: 'none' as const,
      zIndex: 1,
      mixBlendMode: 'overlay' as const,
    };
  }
  if (type === 'vignette') {
    return {
      position: 'absolute' as const,
      inset: 0,
      background: `radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,${opacity}) 100%)`,
      pointerEvents: 'none' as const,
      zIndex: 1,
    };
  }
  return null;
}

// ── HELPER: Generate divider JSX ────────────────────────────────
export function getDividerJSX(divider?: DividerConfig, accent?: string) {
  if (!divider?.position || !divider.style) return null;

  const color = divider.color || (accent ? `${accent}33` : 'rgba(0,0,0,0.08)');
  const thickness = divider.thickness || '1px';
  const elements: React.ReactElement[] = [];

  const renderLine = (pos: 'top' | 'bottom') => {
    if (divider.style === 'solid') {
      return <div key={`divider-${pos}`} style={{ position: 'absolute', [pos]: 0, left: 0, right: 0, height: thickness, background: color, zIndex: 2 }} />;
    }
    if (divider.style === 'gradient') {
      return <div key={`divider-${pos}`} style={{ position: 'absolute', [pos]: 0, left: 0, right: 0, height: thickness, background: `linear-gradient(to right, transparent, ${color}, transparent)`, zIndex: 2 }} />;
    }
    return null;
  };

  const lines = [
    (divider.position === 'top' || divider.position === 'both') ? renderLine('top') : null,
    (divider.position === 'bottom' || divider.position === 'both') ? renderLine('bottom') : null,
  ].filter((el): el is React.ReactElement => el !== null);

  return lines.length > 0 ? lines : null;
}

// ── BACKWARDS COMPATIBILITY ─────────────────────────────────────
export function getSectionStyleClasses(styling?: SectionStylingData['sectionStyling']) {
  const result = getSectionStyles(styling);
  return {
    style: result.style,
    containerClass: getContainerClass(result.layout, styling?.maxWidth),
    accent: result.theme.accent,
  };
}
