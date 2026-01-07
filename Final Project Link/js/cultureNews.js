// Define a JavaScript object called cultureNewsContent
var cultureNewsContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/usher.jpg",
          alt: "image of usher",
          category: "MUSIC",
          title: "Inside Usher's Vegas revival",
          author: "By Hunter Harris",
          loadArticleContent: "loadArticleContent(56)",
        },
        {
          image: "images/liamneeson.jpg",
          alt: "image of Liam Neeson",
          category: "CELEBRITIES",
          title:
            "Liam Neeson picked marriage over playing James Bond in 1995's GoldenEye",
          author: "By Jack King",
          loadArticleContent: "loadArticleContent(57)",
        },
        {
          image: "images/mindhunter.jpg",
          alt: "image of a guy",
          category: "FILM",
          title:
            "Mindhunter is the serial killer drama the world should have tuned into, not Dahmer",
          author: "By Lucy Ford",
          loadArticleContent: "loadArticleContent(58)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "cultureNews" and store it in the `source` variable
var source = document.getElementById("cultureNews").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `cultureNewsContent.contents` array and store it in the `target` variable
var target = template(cultureNewsContent.contents[0]);

// Set the HTML content of an element with the ID "cultureNews_placeholder" to the `target` variable
document.getElementById("cultureNews_placeholder").innerHTML = target;
