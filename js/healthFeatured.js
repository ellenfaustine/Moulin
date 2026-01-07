// Define a JavaScript object called healthFeaturedContent
var healthFeaturedContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/skincare.jpg",
          alt: "image of lady between flowers",
          category: "SKIN",
          title: "10 key skincare trends that will dominate in 2023",
          author: "By Hannah Coates",
          snippet:
            "We've filtered through the noise. Now, say hello to this curation of skincare hacks, tips, and tricks—set to top the charts this year",
          loadArticleContent: "loadArticleContent(83)",
        },
        {
          image: "images/livehealthier.jpg",
          alt: "image of someone doing yoga pose",
          category: "WELLNESS",
          title: "8 ways to live a healthier life in 2023",
          author: "By Hannah Coates",
          snippet:
            "Here's how to thrive, flourish and create habits that will last the year round",
          loadArticleContent: "loadArticleContent(84)",
        },
        {
          image: "images/mental.jpg",
          alt: "image of a lady",
          category: "MIND",
          title:
            "Mental health in 2022: Why your psychological wellbeing matters",
          author: "By Anne Lora Scagliusi",
          snippet:
            "Despite years of misinformation and misrepresentation, The term ‘mental health’ is starting to lose its stigma, although we’re just hitting the tip of the iceberg",
          loadArticleContent: "loadArticleContent(85)",
        },
        {
          image: "images/selflove.jpg",
          alt: "image of lady sleeping and smiling",
          category: "WELLNESS",
          title: "Healthy habits that help cultivate self-love",
          author: "By Alli Sim",
          snippet:
            "Do you treat and talk to yourself like you would a best friend? Are your actions self-sabotaging and neglectful of your needs?",
          loadArticleContent: "loadArticleContent(86)",
        },
        {
          image: "images/men.jpg",
          alt: "image of a back with a flower on it",
          category: "BEAUTY",
          title: "Where do men stand when it comes to body image issues?",
          author: "By Syed Zulfadhli",
          snippet:
            "Women have been in the spotlight when it comes to matters of the body. Turns out, men too have their own host of body image issues beneath the machismo",
          loadArticleContent: "loadArticleContent(87)",
        },
        {
          image: "images/beauty.jpg",
          alt: "image of a ladywith needles on her face",
          category: "BEAUTY",
          title:
            "These wellness rituals will spark joy and up your self-care game",
          author: "By Alli Sim",
          snippet:
            "Resolutions for the year ahead: take an unfiltered approach to beauty, rediscover the pleasure of self-care, and double down on the restorative movement for a happier, healthier you",
          loadArticleContent: "loadArticleContent(91)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "healthFeatured" and store it in the `source` variable
var source = document.getElementById("healthFeatured").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `healthFeaturedContent.contents` array and store it in the `target` variable
var target = template(healthFeaturedContent.contents[0]);

// Set the HTML content of an element with the ID "healthFeatured_placeholder" to the `target` variable
document.getElementById("healthFeatured_placeholder").innerHTML = target;
