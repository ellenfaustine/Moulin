// Define a JavaScript object called cultureFeaturedContent
var cultureFeaturedContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/oscar.jpg",
          alt: "image of oscar trophies",
          title:
            "The 2023 Oscar Nominations Are Here, and They’re…Surprisingly Good?",
          loadArticleContent: "loadArticleContent(47)",
        },
        {
          image: "images/abortion.jpg",
          alt: "image of a computer screen and a man's silhouette",
          title:
            "Thanks to a Texas Lawsuit, the Future of Medication Abortion Is Now Uncertain",
          loadArticleContent: "loadArticleContent(48)",
        },
        {
          image: "images/rkelly.jpg",
          alt: "image of R.kelly",
          title:
            "R. Kelly Has Been Sentenced to 20 Years for Sex Crimes Against Minors",
          loadArticleContent: "loadArticleContent(49)",
        },
        {
          image: "images/lisamarie.jpg",
          alt: "image of Lisa Marie",
          title:
            "The World Turns to Social Media to Mourn Lisa Marie Presley’s Death",
          loadArticleContent: "loadArticleContent(50)",
        },
        {
          image: "images/zelenskyy.jpg",
          alt: "image of President Zelenskyy",
          title:
            "5 Key Moments From Ukrainian President Volodymyr Zelenskyy’s Visit to DC",
          loadArticleContent: "loadArticleContent(51)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "cultureFeatured" and store it in the `source` variable
var source = document.getElementById("cultureFeatured").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `cultureFeaturedContent.contents` array and store it in the `target` variable
var target = template(cultureFeaturedContent.contents[0]);

// Set the HTML content of an element with the ID "cultureFeatured_placeholder" to the `target` variable
document.getElementById("cultureFeatured_placeholder").innerHTML = target;
