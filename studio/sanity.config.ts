import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
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
  plugins: [structureTool()],
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
