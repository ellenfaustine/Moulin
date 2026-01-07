// Define a JavaScript object called fashionTrendsContent
var fashionTrendsContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/balaclava.jpg",
          alt: "image of person wearing a heart-shaped balaclava",
          title: "All the Cool Kids Are Wearing Balaclavas",
          author: "By André-Naquian Wheeler",
          loadArticleContent: "loadArticleContent(27)",
        },
        {
          image: "images/bigbelt.jpg",
          alt: "image of Jennifer Lopez wearing a big belt",
          title: "Why I’m Here for the Return of Big Belt Buckles",
          author: "By Christian Allaire",
          loadArticleContent: "loadArticleContent(28)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "fashionTrends" and store it in the `source` variable
var source = document.getElementById("fashionTrends").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `fashionTrendsContent.contents` array and store it in the `target` variable
var target = template(fashionTrendsContent.contents[0]);

// Set the HTML content of an element with the ID "fashionTrends_placeholder" to the `target` variable
document.getElementById("fashionTrends_placeholder").innerHTML = target;
