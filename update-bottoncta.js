const fs = require('fs');

const data = JSON.parse(fs.readFileSync('bottoncta.json', 'utf8'));

// 1. Remove the custom_css hack from the section
const section = data.content[0];
delete section.settings.custom_css;

// Add an image widget to the start of the column
const column = section.elements[0];

const shamanImageWidget = {
  "id": "shaman_botton_img",
  "elType": "widget",
  "widgetType": "image",
  "settings": {
    "image": {
      "url": "https://abhayoyun.org/wp-content/uploads/abhayoyun-banner-top.png",
      "id": ""
    },
    "image_size": "full",
    "_position": "absolute",
    "_element_width": "initial",
    "_element_custom_width": {
      "unit": "px",
      "size": 480,
      "sizes": []
    },
    "offset_orientation_h": "right",
    "offset_x": { "unit": "px", "size": 40, "sizes": [] },
    "offset_orientation_v": "bottom",
    "offset_y": { "unit": "px", "size": -160, "sizes": [] },
    "opacity": { "size": 0.15 },
    "_z_index": 0,
    "hide_mobile": "hidden",
    "hide_tablet": "",
    "hide_desktop": ""
  },
  "elements": [],
  "isInner": false
};

// Add to the front of elements array
column.elements.unshift(shamanImageWidget);

// Make sure other elements have z-index so they sit on top of the image
column.elements.forEach(el => {
  if (el.id !== "shaman_botton_img") {
    el.settings._z_index = 2;
    el.settings._position = "relative";
  }
});

// Also fix button alignments if missing
const innerSection = column.elements.find(el => el.widgetType === undefined && el.elType === "section");
if (innerSection) {
  innerSection.settings._z_index = 2;
  innerSection.settings._position = "relative";
  innerSection.elements[0].settings.align = "left";
  innerSection.elements[0].settings.align_mobile = "left";
  innerSection.elements[0].elements[0].settings.align = "left";
  innerSection.elements[0].elements[0].settings.align_mobile = "left";

  innerSection.elements[1].settings.align = "left";
  innerSection.elements[1].settings.align_mobile = "left";
  innerSection.elements[1].elements[0].settings.align = "left";
  innerSection.elements[1].elements[0].settings.align_mobile = "left";
}

fs.writeFileSync('bottoncta.json', JSON.stringify(data, null, 2));
console.log("Updated bottoncta.json");
