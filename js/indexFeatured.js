// Define a JavaScript object called indexFeaturedContent
var indexFeaturedContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/pradanft.jpg",
          alt: "image of a patterned shirt",
          title: "Prada drops its tenth Timecapsule NFT",
          loadArticleContent: "loadArticleContent(8)",
        },
        {
          image: "images/lindsey.jpg",
          alt: "image of two woman laughing",
          title: "Influencer Lindsey Holland launches lifestyle brand",
          loadArticleContent: "loadArticleContent(9)",
        },
        {
          image: "images/ariana.jpg",
          alt: "image of ariana grande",
          title: "Ariana Grande’s R.e.m. Beauty selects new CEO",
          loadArticleContent: "loadArticleContent(10)",
        },
        {
          image: "images/burberryculture.jpg",
          alt: "image of the burberry team",
          title: "Burberry teams up with Leeds to celebrate year of culture",
          loadArticleContent: "loadArticleContent(11)",
        },
      ],
    },
  ],
};

// Get the contents of the HTML element with ID "indexFeatured"
var source = document.getElementById("indexFeatured").innerHTML;

// Compile the Handlebars template based on the source content
var template = Handlebars.compile(source);

// Apply the compiled template to the first item in an array and generate HTML content
var target = template(indexFeaturedContent.contents[0]);

// Set the innerHTML property of an element with ID "indexFeatured_placeholder" to the generated HTML content
document.getElementById("indexFeatured_placeholder").innerHTML = target;