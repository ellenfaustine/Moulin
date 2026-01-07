// Define a JavaScript object called cultureLatestStoriesContent
var cultureLatestStoriesContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/money.jpg",
          alt: "image of a couple looking annoyed",
          category: "CULTURE",
          title: "Why Is It So Hard to Talk About Money?",
          author: "By Tom Rasmussen",
          loadArticleContent: "loadArticleContent(52)",
        },
        {
          image: "images/parishilton.jpg",
          alt: "image of Paris Hilton",
          category: "OPINION",
          title: "Why Am I Longing to Shop From Paris Hilton’s Houseware Line?",
          author: "By Emma Specter",
          loadArticleContent: "loadArticleContent(53)",
        },
        {
          image: "images/erykahbadu.jpg",
          alt: "image of Eykah Badu",
          category: "MUSIC",
          title: "5 Things You Might Not Know About Erykah Badu",
          author: "By Marley Marius",
          loadArticleContent: "loadArticleContent(54)",
        },
        {
          image: "images/netflixmarch2023.jpg",
          alt: "image of Penn Badgley",
          category: "TV & MOVIES",
          title: "Here’s Everything Coming to Netflix in March 2023",
          author: "By Emma Specter",
          loadArticleContent: "loadArticleContent(55)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "cultureLatestStories" and store it in the `source` variable
var source = document.getElementById("cultureLatestStories").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `cultureLatestStoriesContent.contents` array and store it in the `target` variable
var target = template(cultureLatestStoriesContent.contents[0]);

// Set the HTML content of an element with the ID "cultureLatestStories_placeholder" to the `target` variable
document.getElementById("cultureLatestStories_placeholder").innerHTML = target;
