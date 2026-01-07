// Define a JavaScript object called fashionFeaturedContent
var fashionFeaturedContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/tnc.jpg",
          alt: "image of the collab shoe",
          category: "FASHION",
          title:
            "Nike and Tiffany paring not so legendary, as collab faces backlash",
          snippet:
            "Tiffany and Nike have launched a new collaboration. Not everyone is enthralled. LVMH has invested heavily in the marketing activations of Tiffany...",
          author: "By Don-Alvin Adegeest",
          loadArticleContent: "loadArticleContent(23)",
        },
        {
          image: "images/mschf.jpg",
          alt: "image of the boots",
          category: "FASHION",
          title: "Mschf's Astro Boy boots have menswear divided",
          snippet:
            "Mschf has dropped another pair of outré shoes. The American art collective has unveiled its first pair of boots, which might be the maddest yet...",
          author: "By Zak Maoui",
          loadArticleContent: "loadArticleContent(24)",
        },
        {
          image: "images/burberry.jpg",
          alt: "image of a guy holding roses",
          category: "FASHION",
          title: "Burberry unveils refreshed brand image under Daniel Lee",
          snippet:
            "British luxury brand Burberry has unveiled a rejuvenated identity under the direction of its newly appointed chief creative officer Daniel Lee...",
          author: "By Rachel Douglass",
          loadArticleContent: "loadArticleContent(25)",
        },
        {
          image: "images/color.jpg",
          alt: "image of people on the runway",
          category: "FASHION",
          title: "The role of color in fashion",
          snippet:
            "Fashion is one of the most important visual phenomena of our time, and in fashion, color plays a major role. In this background article, we share the difference between primary and secondary colors...",
          author: "By Esmee Blaazer",
          loadArticleContent: "loadArticleContent(26)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "fashionFeatured" and store it in the `source` variable
var source = document.getElementById("fashionFeatured").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `fashionFeaturedContent.contents` array and store it in the `target` variable
var target = template(fashionFeaturedContent.contents[0]);

// Set the HTML content of an element with the ID "fashionFeatured_placeholder" to the `target` variable
document.getElementById("fashionFeatured_placeholder").innerHTML = target;
