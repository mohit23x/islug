
# iSlug

A npm package to make slugs in Engish, Hindi and varios Indian Langauges.

[![NPM version](https://badge.fury.io/js/badge-list.svg)](https://www.npmjs.com/package/islug)


```sh

# Using npm
npm install islug

# Using yarn
yarn add islug

```


```javascript

const islug = require('islug');

console.log("Hindi");
console.log(islug("हैलो वर्ल्ड यह सैंपल टेस्ट है"));
// हैलो-वर्ल्ड-यह-सैंपल-टेस्ट-है

console.log("Urdu");
console.log(islug("ہیلو ورلڈ یہ نمونہ ٹیسٹ ہے"));
// ہیلو-ورلڈ-یہ-نمونہ-ٹیسٹ-ہے 

console.log("Tamil");
console.log(islug("ஹலோ வேர்ல்ட் இது மாதிரி சோதனை"));
// ஹலோ-வேர்ல்ட்-இது-மாதிரி-சோதனை

console.log("Punjabi");
console.log(islug("ਹੈਲੋ ਵਰਲਡ ਇਹ ਨਮੂਨਾ ਟੈਸਟ ਹੈ"));
// ਹੈਲੋ-ਵਰਲਡ-ਇਹ-ਨਮੂਨਾ-ਟੈਸਟ-ਹੈ

console.log("Malayalam");
console.log(islug("ഹലോ വേൾഡ് ഇതാണ് സാമ്പിൾ ടെസ്റ്റ്"));
// ഹലോ-വേൾഡ്-ഇതാണ്-സാമ്പിൾ-ടെസ്റ്റ്

console.log("Bengali");
console.log(islug("হ্যালো ওয়ার্ল্ড এটি নমুনা পরীক্ষা"));
// হ্যালো-ওয়ার্ল্ড-এটি-নমুনা-পরীক্ষা

console.log("English");
console.log(islug("Hello World, this is a sample test"));
// hello-world-this-is-a-sample-test

console.log("English");
console.log(islug("!@#$%^&*()_-=+all special characters will be removed.][}{/>.<,;:"));
// all-special-characters-will-be-removed

```