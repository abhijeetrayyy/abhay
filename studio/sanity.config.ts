import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { blockContent, testimonial, event, teaching, gallery } from './schemas/documents';
import { page } from './schemas/page';
import { sectionTypes } from './schemas/sections';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'wr0ipccq';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'abhay-oyun',
  title: 'Abhay Oyun',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://abhay-kohl.vercel.app',
        previewMode: {
          enable: '/api/draft/enable',
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
      page,
      ...sectionTypes,
    ],
  },
});
