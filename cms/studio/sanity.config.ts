'use client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { CogIcon } from '@sanity/icons';
import { blockContent, testimonial, event, teaching, gallery, siteSettings } from './schemas/documents';
import { page } from './schemas/page';
import { sectionTypes } from './schemas/sections';
import { SectionStylingPreview } from './components/SectionStylingPreview';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'wr0ipccq';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'abhay-oyun',
  title: 'Abhay Oyun',
  projectId,
  dataset,
  basePath: '/edit-here',
  plugins: [
    structureTool({
      structure: (S) => S.list().title('Content').items([
        S.listItem().title('Site Settings').icon(CogIcon).child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(item => item.getId() !== 'siteSettings'),
      ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://abhay-kohl.vercel.app',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  schema: {
    types: [
      blockContent,
      testimonial,
      event,
      teaching,
      gallery,
      siteSettings,
      page,
      ...sectionTypes,
    ],
  },
});
