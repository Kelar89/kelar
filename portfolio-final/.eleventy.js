module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");

  // Membuat variabel global "baseURL"
  eleventyConfig.addNunjucksGlobal("baseURL", () => {
    // Jika sedang di-build untuk produksi (GitHub), gunakan "/porto". Jika tidak (lokal), gunakan "/".
    return process.env.NODE_ENV === 'production' ? '/porto' : '';
  });

  return {
    // pathPrefix kita hapus karena sudah ditangani oleh variabel baseURL
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};