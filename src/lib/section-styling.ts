export const themeColors: Record<string, { bg: string; text: string; accent: string }> = {
  default: { bg: '#FBF9F5', text: '#1F1B16', accent: '#C9A04A' },
  dark: { bg: '#0A0F1A', text: '#FDFCFA', accent: '#C9A04A' },
  warm: { bg: '#F5F1EA', text: '#1F1B16', accent: '#A07D2E' },
  forest: { bg: '#1A2E1A', text: '#E8F0E8', accent: '#9BA88B' },
  midnight: { bg: '#0F1A30', text: '#FDFCFA', accent: '#E8CD7A' },
};

export interface SectionStylingData {
  sectionStyling?: {
    theme?: string;
    backgroundColor?: string;
    textColor?: string;
    accentColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    maxWidth?: string;
    layout?: string;
    customCSS?: string;
  };
}

export function getSectionStyleClasses(styling?: SectionStylingData['sectionStyling']) {
  const theme = styling?.theme || 'default';
  const colors = themeColors[theme] || themeColors.default;

  const bg = styling?.backgroundColor || colors.bg;
  const text = styling?.textColor || colors.text;
  const accent = styling?.accentColor || colors.accent;

  const layout = styling?.layout || 'contained';
  const layoutClass = layout === 'full' ? 'w-full' : layout === 'narrow' ? 'max-w-4xl mx-auto px-6' : layout === 'split' ? 'max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12' : 'max-w-[1440px] mx-auto px-6';

  const maxWidth = styling?.maxWidth;
  const containerClass = maxWidth ? `mx-auto px-6` : layoutClass;

  const style: React.CSSProperties = {
    backgroundColor: bg,
    color: text,
    ['--accent' as string]: accent,
  };

  if (styling?.paddingTop) style.paddingTop = styling.paddingTop;
  if (styling?.paddingBottom) style.paddingBottom = styling.paddingBottom;

  if (maxWidth) {
    style.maxWidth = maxWidth;
  }

  return { style, containerClass, accent };
}
