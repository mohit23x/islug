const islug = require('./index');

console.log("\nHindi");
console.log(islug("हैलो वर्ल्ड यह सैंपल टेस्ट है"));
// हैलो-वर्ल्ड-यह-सैंपल-टेस्ट-है

console.log("\nUrdu");
console.log(islug("ہیلو ورلڈ یہ نمونہ ٹیسٹ ہے"));
// ہیلو-ورلڈ-یہ-نمونہ-ٹیسٹ-ہے 

console.log("\nTamil");
console.log(islug("ஹலோ வேர்ல்ட் இது மாதிரி சோதனை"));
// ஹலோ-வேர்ல்ட்-இது-மாதிரி-சோதனை

console.log("\nPunjabi");
console.log(islug("ਹੈਲੋ ਵਰਲਡ ਇਹ ਨਮੂਨਾ ਟੈਸਟ ਹੈ"));
// ਹੈਲੋ-ਵਰਲਡ-ਇਹ-ਨਮੂਨਾ-ਟੈਸਟ-ਹੈ

console.log("\nMalayalam");
console.log(islug("ഹലോ വേൾഡ് ഇതാണ് സാമ്പിൾ ടെസ്റ്റ്"));
// ഹലോ-വേൾഡ്-ഇതാണ്-സാമ്പിൾ-ടെസ്റ്റ്

console.log("\nBengali");
console.log(islug("হ্যালো ওয়ার্ল্ড এটি নমুনা পরীক্ষা"));
// হ্যালো-ওয়ার্ল্ড-এটি-নমুনা-পরীক্ষা

console.log("\nEnglish");
console.log(islug("Hello World, this is a sample test"));
// hello-world-this-is-a-sample-test

console.log("\nEnglish");
console.log(islug("!@#$%^&*()_-=+all special characters will be removed.][}{/>.<,;:"));
// all-special-characters-will-be-removed
