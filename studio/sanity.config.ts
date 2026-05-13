import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'abhay-oyun',
  title: 'Abhay Oyun',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: [testimonial, event, teaching, gallery] },
});
