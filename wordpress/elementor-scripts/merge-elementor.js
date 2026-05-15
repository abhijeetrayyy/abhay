const fs = require('fs');

const TEMPLATES_DIR = '../bricks-templates';

const files = [
  'abhay-oyun-header.json',
  'abhay-oyun-hero.json',
  'abhay-oyun-intro.json',
  'abhay-oyun-master.json',
  'abhay-oyun-aura.json',
  'abhay-oyun-teachings.json',
  'abhay-oyun-paths-carousel.json',
  'abhay-oyun-pillars.json',
  'abhay-oyun-impact.json',
  'abhay-oyun-events.json',
  'abhay-oyun-testimonials.json',
  'abhay-oyun-video-testimonials.json',
  'abhay-oyun-gallery.json',
  'abhay-oyun-running-gallery.json',
  'bottom1cta.json'
];

let combinedContent = [];

files.forEach(file => {
  try {
    const filePath = `${TEMPLATES_DIR}/${file}`;
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (data.content && Array.isArray(data.content)) {
        combinedContent = combinedContent.concat(data.content);
        console.log(`Added content from ${file}`);
      } else {
        console.log(`Warning: ${file} does not have a valid content array.`);
      }
    } else {
      console.log(`File not found: ${file}`);
    }
  } catch (err) {
    console.error(`Error reading or parsing ${file}:`, err);
  }
});

const newHomepage = {
  title: "Abhay Oyun Complete Homepage",
  type: "page",
  version: "0.4",
  page_settings: {
    hide_title: "yes",
    template: "elementor_canvas"
  },
  content: combinedContent
};

fs.writeFileSync(`${TEMPLATES_DIR}/abhay-oyun-combined-homepage.json`, JSON.stringify(newHomepage, null, 2));
console.log('Successfully created abhay-oyun-combined-homepage.json in bricks-templates/');
