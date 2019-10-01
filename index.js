function slugit(str){
    str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ").toLowerCase();
    str.replace(/^\s+|\s+$/gm, "");
    str.replace(/\s+/g, "-").trim();
    return str.toLowerCase();

}

module.exports = slugit