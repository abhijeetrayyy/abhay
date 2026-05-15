const fs = require('fs');
const heicConvert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('public/5FABEAA0-EF73-4B78-99CA-B4560163E30B.heic');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9
    });
    fs.writeFileSync('public/hero-bg.jpg', outputBuffer);
    console.log('Conversion successful!');
  } catch(e) {
    console.error('Error during conversion:', e);
  }
})();
