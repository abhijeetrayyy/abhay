import React from 'react';
import { Box, Text, Flex, Grid, Card, Badge } from '@sanity/ui';

interface PreviewProps {
  value?: {
    theme?: string;
    backgroundType?: string;
    accentColor?: string;
    layout?: string;
    animation?: string;
    typography?: { textAlign?: string };
  };
}

const themePreviews: Record<string, { bg: string; text: string; accent: string; label: string }> = {
  default: { bg: '#FBF9F5', text: '#1F1B16', accent: '#C9A04A', label: 'Warm' },
  dark: { bg: '#0A0F1A', text: '#FDFCFA', accent: '#C9A04A', label: 'Dark' },
  warm: { bg: '#F5F1EA', text: '#1F1B16', accent: '#A07D2E', label: 'Sand' },
  forest: { bg: '#1A2E1A', text: '#E8F0E8', accent: '#9BA88B', label: 'Forest' },
  midnight: { bg: '#0F1A30', text: '#FDFCFA', accent: '#E8CD7A', label: 'Midnight' },
  custom: { bg: '#FFFFFF', text: '#000000', accent: '#C9A04A', label: 'Custom' },
};

const animationLabels: Record<string, string> = {
  'fade-up': 'Fade Up',
  'fade-in': 'Fade In',
  'slide-left': 'Slide Left',
  'slide-right': 'Slide Right',
  'scale-in': 'Scale In',
  'none': 'None',
};

export const SectionStylingPreview = React.memo((props: PreviewProps) => {
  const { value } = props;
  if (!value) return <Text muted>No styling configured</Text>;

  const theme = value.theme || 'default';
  const colors = themePreviews[theme] || themePreviews.default;
  const accent = value.accentColor || colors.accent;
  const layout = value.layout || 'contained';
  const animation = value.animation || 'fade-up';

  return (
    <Card padding={3} radius={2} shadow={1}>
      <Flex direction="column" gap={3}>
        {/* Theme Preview Swatch */}
        <Box>
          <Text size={1} weight="semibold" muted>Theme</Text>
          <Flex gap={2} align="center" marginTop={2}>
            <Box
              style={{
                width: 48,
                height: 32,
                borderRadius: 4,
                background: colors.bg,
                border: `2px solid ${colors.text}22`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                style={{
                  position: 'absolute',
                  bottom: 4,
                  right: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: accent,
                }}
              />
            </Box>
            <Box marginTop={2}><Text size={1}>{colors.label}</Text></Box>
            {theme === 'custom' && (
              <Badge tone="primary" mode="outline">Custom</Badge>
            )}
          </Flex>
        </Box>

        {/* Layout */}
        <Box>
          <Text size={1} weight="semibold" muted>Layout</Text>
          <Flex gap={2} marginTop={2}>
            <Badge
              mode={layout === 'full' ? 'default' : 'outline'}
              tone={layout === 'full' ? 'primary' : 'default'}
            >
              Full Width
            </Badge>
            <Badge
              mode={layout === 'contained' ? 'default' : 'outline'}
              tone={layout === 'contained' ? 'primary' : 'default'}
            >
              Contained
            </Badge>
            <Badge
              mode={layout === 'narrow' ? 'default' : 'outline'}
              tone={layout === 'narrow' ? 'primary' : 'default'}
            >
              Narrow
            </Badge>
            <Badge
              mode={layout === 'split' ? 'default' : 'outline'}
              tone={layout === 'split' ? 'primary' : 'default'}
            >
              Split
            </Badge>
          </Flex>
        </Box>

        {/* Animation */}
        <Box>
          <Text size={1} weight="semibold" muted>Animation</Text>
          <Box marginTop={1}><Text size={1}>{animationLabels[animation] || animation}</Text></Box>
        </Box>

        {/* Text Align */}
        {value.typography?.textAlign && (
          <Box>
            <Text size={1} weight="semibold" muted>Text Align</Text>
          <Box marginTop={1}><Text size={1} style={{ textTransform: 'capitalize' }}>{value.typography.textAlign}</Text></Box>
          </Box>
        )}

        {/* Quick Color Preview */}
        <Box marginTop={2}>
          <Text size={1} weight="semibold" muted>Colors</Text>
          <Flex gap={2} marginTop={2}>
            <Flex align="center" gap={1}>
              <Box style={{ width: 16, height: 16, borderRadius: 3, background: colors.bg, border: '1px solid rgba(0,0,0,0.1)' }} />
              <Text size={0} muted>BG</Text>
            </Flex>
            <Flex align="center" gap={1}>
              <Box style={{ width: 16, height: 16, borderRadius: 3, background: colors.text }} />
              <Text size={0} muted>Text</Text>
            </Flex>
            <Flex align="center" gap={1}>
              <Box style={{ width: 16, height: 16, borderRadius: 3, background: accent }} />
              <Text size={0} muted>Accent</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
});

SectionStylingPreview.displayName = 'SectionStylingPreview';
