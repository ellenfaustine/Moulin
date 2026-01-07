// Define a JavaScript object called beautyContent
var beautyContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/ozempic.jpg",
          alt: "image of a lady touching her face",
          category: "SKIN",
          title: "What Is Ozempic Face? Here’s Everything You Need to Know",
          author: "By Hannah Coates",
          loadArticleContent: "loadArticleContent(34)",
        },
        {
          image: "images/ribbon.jpg",
          alt: "image of a model with ribbons below her eyes",
          category: "MAKEUP",
          title:
            "At Simone Rocha, Twisted Curls and Appliqué Ribbons Add a Dose of Whimsy",
          author: "By Tish Weinstock",
          loadArticleContent: "loadArticleContent(35)",
        },
        {
          image: "images/bob.jpg",
          alt: "image of a lady with a bob haircut",
          category: "HAIR",
          title: "Why the Chunky Bob Is Spring’s Most In-Demand Haircut",
          author: "By Hannah Coates",
          loadArticleContent: "loadArticleContent(36)",
        },
        {
          image: "images/tracee.jpg",
          alt: "image of tracee ellis ross",
          category: "MAKEUP",
          title:
            "The Best Beauty Instagrams: Tracee Ellis Ross, Lizzo, and More",
          author: "By Calin Van Paris",
          loadArticleContent: "loadArticleContent(37)",
        },
      ],
    },
    {
      content: [
        {
          image: "images/hairstyle.jpg",
          alt: "image of a lady",
          category: "HAIR",
          title: "The 10 Most Iconic Hairstyles of All Time",
          author: "By Hannah Coates",
          loadArticleContent: "loadArticleContent(38)",
        },
        {
          image: "images/concealer.jpg",
          alt: "image of 2 ladies smiling",
          category: "MAKEUP",
          title: "How to Apply Concealer: 5 Ways to Make It Look Invisible",
          author: "By Lauren Valenti",
          loadArticleContent: "loadArticleContent(39)",
        },
        {
          image: "images/botox.jpg",
          alt: "image of a lady laying down",
          category: "SKIN",
          title: "Botox in a Bottle? These Skin Care Products Deliver",
          author: "By Kiana Murden",
          loadArticleContent: "loadArticleContent(40)",
        },
        {
          image: "images/gigi.jpg",
          alt: "image of Gigi Hadid",
          category: "MAKEUP",
          title:
            "Gigi Hadid Kicks Off Her Runway Season Wearing Pastel-Pink Lashes at Prada",
          author: "By Tish Weinstock",
          loadArticleContent: "loadArticleContent(41)",
        },
      ],
    },
    {
      content: [
        {
          image: "images/hair.jpg",
          alt: "image of lady posing",
          category: "HAIR",
          title:
            "How One Hairstylist Is Reimagining a 2000-Year-Old Korean Art Form",
          author: "By Monica Kim",
          loadArticleContent: "loadArticleContent(42)",
        },
        {
          image: "images/olivia.jpg",
          alt: "image of Oliva Rodrigo",
          category: "BEAUTY",
          title:
            "The Best Beauty Instagrams: Olivia Rodrigo, Salem Mitchell, and More",
          author: "By Calin Van Paris",
          loadArticleContent: "loadArticleContent(43)",
        },
        {
          image: "images/hailey.jpg",
          alt: "image of Hailey Bieber",
          category: "BEAUTY",
          title:
            "The Best Beauty Instagrams: Hailey Bieber, Martha Stewart, and More",
          author: "By Calin Van Paris",
          loadArticleContent: "loadArticleContent(44)",
        },
        {
          image: "images/sydney.jpg",
          alt: "image of Sydney Sweeney",
          category: "HAIR",
          title:
            "Sydney Sweeney’s Latest Hair Color Is a More Natural Take on Bombshell Beauty",
          author: "By Calin Van Paris",
          loadArticleContent: "loadArticleContent(45)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "beauty" and store it in the `source` variable
var source = document.getElementById("beauty").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `beautyContent.contents` array and store it in the `target1` variable
var target1 = template(beautyContent.contents[0]);

// Use the `template` to render the second item in the `beautyContent.contents` array and store it in the `target2` variable
var target2 = template(beautyContent.contents[1]);

// Use the `template` to render the third item in the `beautyContent.contents` array and store it in the `target3` variable
var target3 = template(beautyContent.contents[2]);

// Set the HTML content of an element with the ID "beauty_placeholder1" to the `target1` variable
document.getElementById("beauty_placeholder1").innerHTML = target1;

// Set the HTML content of an element with the ID "beauty_placeholder2" to the `target2` variable
document.getElementById("beauty_placeholder2").innerHTML = target2;

// Set the HTML content of an element with the ID "beauty_placeholder3" to the `target3` variable
document.getElementById("beauty_placeholder3").innerHTML = target3;