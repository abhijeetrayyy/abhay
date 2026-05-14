import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'wr0ipccq';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: 'abhayoyun',
  deployment: {
    appId: 'kv132z9bw6gvzwzp7bh3b1i3',
  },
});
