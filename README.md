
# :star: iSlug

A npm package to make slugs in Engish, Hindi and various Indian Langauges.

[![NPM version](https://badge.fury.io/js/badge-list.svg)](https://www.npmjs.com/package/islug)
[![dependencies Status](https://david-dm.org/flexdinesh/typy/status.svg)](https://www.npmjs.com/package/islug)

### :file_folder: Installation

```sh

# Using npm
npm install islug

# Using yarn
yarn add islug

```

### :orange_book: Usage


```javascript

const islug = require('islug');

// Hindi

console.log(islug("हैलो वर्ल्ड यह सैंपल टेस्ट है"));
// हैलो-वर्ल्ड-यह-सैंपल-टेस्ट-है

// Urdu

console.log(islug("ہیلو ورلڈ یہ نمونہ ٹیسٹ ہے"));
// ہیلو-ورلڈ-یہ-نمونہ-ٹیسٹ-ہے 

// Tamil

console.log(islug("ஹலோ வேர்ல்ட் இது மாதிரி சோதனை"));
// ஹலோ-வேர்ல்ட்-இது-மாதிரி-சோதனை

// Punjabi

console.log(islug("ਹੈਲੋ ਵਰਲਡ ਇਹ ਨਮੂਨਾ ਟੈਸਟ ਹੈ"));
// ਹੈਲੋ-ਵਰਲਡ-ਇਹ-ਨਮੂਨਾ-ਟੈਸਟ-ਹੈ

// Malayalam

console.log(islug("ഹലോ വേൾഡ് ഇതാണ് സാമ്പിൾ ടെസ്റ്റ്"));
// ഹലോ-വേൾഡ്-ഇതാണ്-സാമ്പിൾ-ടെസ്റ്റ്

// Bengali

console.log(islug("হ্যালো ওয়ার্ল্ড এটি নমুনা পরীক্ষা"));
// হ্যালো-ওয়ার্ল্ড-এটি-নমুনা-পরীক্ষা

// English

console.log(islug("Hello World, this is a sample test"));
// hello-world-this-is-a-sample-test

// Special Characters

console.log(islug("!@#$%^&*()_-=+all special characters will be removed.][}{/>.<,;:"));
// all-special-characters-will-be-removed

```
