// Define a JavaScript object called lifestyleLatestStoriesContent
var lifestyleLatestStoriesContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/lewis.jpg",
          alt: "image of Lewis Hamilton",
          category: "LIFESTYLE",
          title: "Lewis Hamilton is a world champion at self care, too",
          author: "By Mike Christensen",
          loadArticleContent: "loadArticleContent(75)",
        },
        {
          image: "images/bangkok.jpg",
          alt: "image of 2 girls enjoying",
          category: "TRAVEL",
          title:
            "The Standard, Bangkok Mahanakhon is the latest hotel to see and be seen",
          author: "By Amelia Chia",
          loadArticleContent: "loadArticleContent(76)",
        },
        {
          image: "images/furniture.jpg",
          alt: "image of dining table",
          category: "LIFESTYLE",
          title: "The Best Online Stores to Help You Feel More at Home",
          author: "By Daphne Bugler",
          loadArticleContent: "loadArticleContent(77)",
        },
        {
          image: "images/blackpink.jpg",
          alt: "image of blackpink",
          category: "ENTERTAINMENT",
          title: "‘Blackpink: Light Up The Sky’—everything you need to know",
          author: "By Taylor Glasby",
          loadArticleContent: "loadArticleContent(78)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with ID "lifestyleLatestStories"
var source = document.getElementById("lifestyleLatestStories").innerHTML;

// Compile the Handlebars template based on the source HTML content
var template = Handlebars.compile(source);

// Pass the first item of an array called "contents" from an object called "lifestyleLatestStoriesContent"
// to the compiled Handlebars template to generate HTML content
var target = template(lifestyleLatestStoriesContent.contents[0]);

// Set the innerHTML property of an element with ID "lifestyleLatestStories_placeholder"
// to the generated HTML content from the Handlebars template
document.getElementById("lifestyleLatestStories_placeholder").innerHTML = target;
