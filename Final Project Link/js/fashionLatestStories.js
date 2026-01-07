// Define a JavaScript object called fashionLatestStoriesContent
var fashionLatestStoriesContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/somi.jpg",
          alt: "image of Somi",
          category: "FASHION",
          title: "Fashion courts K-Pop and its fans at Milan catwalk shows",
          author: "By AFP",
          loadArticleContent: "loadArticleContent(29)",
        },
        {
          image: "images/designer.jpg",
          alt: "image of a model on the runway",
          category: "FASHION",
          title:
            "Designers, not celebrities, make their mark at Milan Fashion Week",
          author: "By Don-Alvin Adegeest",
          loadArticleContent: "loadArticleContent(30)",
        },
        {
          image: "images/hnm.jpg",
          alt: "image of 2 people",
          category: "FASHION",
          title: "H&M’s next designer collaboration is with Mugler",
          author: "By Danielle Wightman-Stone",
          loadArticleContent: "loadArticleContent(31)",
        },
        {
          image: "images/skims.jpg",
          alt: "image of a campaign",
          category: "FASHION",
          title: "Skims relaunches swimwear line",
          author: "By Cenia Zitter",
          loadArticleContent: "loadArticleContent(32)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "fashionLatestStories" and store it in the `source` variable
var source = document.getElementById("fashionLatestStories").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `fashionLatestStoriesContent.contents` array and store it in the `target` variable
var target = template(fashionLatestStoriesContent.contents[0]);

// Set the HTML content of an element with the ID "fashionLatestStories_placeholder" to the `target` variable
document.getElementById("fashionLatestStories_placeholder").innerHTML = target;
