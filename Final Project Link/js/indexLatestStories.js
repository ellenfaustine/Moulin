// Define a JavaScript object called indexLatestStoriesContent
var indexLatestStoriesContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/eating.jpg",
          alt: "image of lady holding grapes",
          category: "HEALTH",
          title: "Should You be Eating for Your Blood Type?",
          author: "By POOSH",
          loadArticleContent: "loadArticleContent(12)",
        },
        {
          image: "images/ar.jpg",
          alt: "image of an ar clothing",
          category: "FASHION",
          title:
            "London Fashion Week’s phygital fashion show looks to highlight AR clothing",
          author: "By Rachel Douglass",
          loadArticleContent: "loadArticleContent(13)",
        },
        {
          image: "images/ginabirch.jpg",
          alt: "image of lady holding a picture of a singing lady",
          category: "MUSIC",
          title: "The Nine Exhilarating Lives of Post-Punk Legend Gina Birch",
          author: "By Melissa Giannini",
          loadArticleContent: "loadArticleContent(14)",
        },
        {
          image: "images/financial.jpg",
          alt: "image of lady sitting taking a mirror selfie",
          category: "ADULTING",
          title: "Why Financial Literacy Is So Important for Women",
          author: "By POOSH",
          loadArticleContent: "loadArticleContent(15)",
        },
      ],
    },
  ],
};

// Get the contents of the HTML element with ID "indexLatestStories"
var source = document.getElementById("indexLatestStories").innerHTML;

// Compile the Handlebars template based on the source content
var template = Handlebars.compile(source);

// Apply the compiled template to the first item in an array and generate HTML content
var target = template(indexLatestStoriesContent.contents[0]);

// Set the innerHTML property of an element with ID "indexLatestStories_placeholder" to the generated HTML content
document.getElementById("indexLatestStories_placeholder").innerHTML = target;
