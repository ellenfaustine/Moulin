// Define a JavaScript object called healthTrendsContent
var healthTrendsContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/selfcare.jpg",
          alt: "image of a lady in a bubble bath",
          category: "MIND",
          title: "Simple Ways to Prioritize Self-Care",
          author: "By POOSH",
          loadArticleContent: "loadArticleContent(88)",
        },
        {
          image: "images/pilates.jpg",
          alt: "image of Jennie doing a pilates pose",
          category: "FITNESS",
          title: "Why everyone is Obsessed With Pilates Reformers",
          author: "By POOSH",
          loadArticleContent: "loadArticleContent(89)",
        },
        {
          image: "images/menopause.jpg",
          alt: "image of lady with face cream smeared on her face",
          category: "BEAUTY",
          title: "Caring for your Skin During your Menopausal Years",
          author: "By Alli Sim",
          loadArticleContent: "loadArticleContent(90)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "healthTrends" and store it in the `source` variable
var source = document.getElementById("healthTrends").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `healthTrendsContent.contents` array and store it in the `target` variable
var target = template(healthTrendsContent.contents[0]);

// Set the HTML content of an element with the ID "healthTrends_placeholder" to the `target` variable
document.getElementById("healthTrends_placeholder").innerHTML = target;
