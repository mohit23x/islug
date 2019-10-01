function slugit(str){
 let t1 = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ").toLowerCase();
 let t2 = t1.replace(/^\s+|\s+$/gm, "");
 var t3 = t2.replace(/\s+/g, "-").trim();
 return t3.toLowerCase();
}

module.exports = slugit