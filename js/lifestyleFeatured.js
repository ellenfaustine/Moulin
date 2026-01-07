// Define a JavaScript object called lifestyleContent
var lifestyleContent = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/roger.jpg",
          alt: "image of Roger Federer",
          category: "LIFESTYLE",
          title:
            "Anna Wintour raises a racket to Roger Federer on his retirement",
          author: "By Anna Wintour",
          loadArticleContent: "loadArticleContent(66)",
        },
        {
          image: "images/book.jpg",
          alt: "image of book covers",
          category: "ENTERTAINMENT",
          title: "The best books to read before they hit the screen this year",
          author: "By Jesslyn Lye",
          loadArticleContent: "loadArticleContent(67)",
        },
        {
          image: "images/wine.jpg",
          alt: "image of vinyard",
          category: "TRAVEL",
          title:
            "12 underrated wine regions to visit this fall, according to the experts",
          author: "By Nicole Kliest",
          loadArticleContent: "loadArticleContent(68)",
        },
      ],
    },
    {
      content: [
        {
          image: "images/avril.jpg",
          alt: "image of avril lavigne",
          category: "ENTERTAINMENT",
          title:
            "An ode to the emo genre and how it will never be the same again",
          author: "By Azrin Ta",
          snippet:
            "Ahead of the 'When We Were Young' festival in Las Vegas, one Vogue writer looks back on the glory days of emo and how it unified an entire generation of youths",
          loadArticleContent: "loadArticleContent(69)",
        },
        {
          image: "images/hwasa.jpg",
          alt: "image of Hwasa and LOCO",
          category: "ENTERTAINMENT",
          title:
            "All the best Korean R&B collaborative tracks to press play on",
          author: "By Nicole Kliest",
          snippet:
            "Hwasa and Loco are back as a duet for 'Somebody' and 'Lemon'—their first comeback together since their debut collaboration in 2018.",
          loadArticleContent: "loadArticleContent(70)",
        },
        {
          image: "images/interior.jpg",
          alt: "image of a living room",
          category: "INTERIORS",
          title:
            "3 interior design trends that will define 2023, according to an expert",
          author: "By Jesslyn Lye",
          snippet:
            "Naoko Takenouchi, co-founder of integrated design firm Takenouchi Webb, tells us what to expect from the world of interior design in the coming year...",
          loadArticleContent: "loadArticleContent(71)",
        },
      ],
    },
    {
      content: [
        {
          image: "images/twg.jpg",
          alt: "image of TWG tins",
          category: "FOOD",
          title: "Amanda Lee Koe shares how tea is more than a moment",
          author: "By Amanda Lee Koe",
          loadArticleContent: "loadArticleContent(72)",
        },
        {
          image: "images/kangtaeoh.jpg",
          alt: "image of Kang Tae Oh",
          category: "CELEBRITIES",
          title: "The meteoric rise of Kang Tae-oh",
          author: "By Chun Hee Ran and Amelia Chia",
          loadArticleContent: "loadArticleContent(73)",
        },
        {
          image: "images/bali.jpg",
          alt: "image of beach club",
          category: "TRAVEL",
          title:
            "Bali bar guide: The best nightlife spots to visit on this paradise island",
          author: "By Janice Sim and Chandreyee Ray",
          loadArticleContent: "loadArticleContent(74)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with ID "lifestyle1"
var source1 = document.getElementById("lifestyle1").innerHTML;

// Get the HTML content of an element with ID "lifestyle2"
var source2 = document.getElementById("lifestyle2").innerHTML;

// Compile the Handlebars template based on the source HTML content for the first template
var template1 = Handlebars.compile(source1);

// Compile the Handlebars template based on the source HTML content for the second template
var template2 = Handlebars.compile(source2);

// Pass the first, second, and third items of an array called "contents" from an object called "lifestyleContent"
// to the first and second compiled Handlebars templates to generate HTML content
var target1 = template1(lifestyleContent.contents[0]);
var target2 = template2(lifestyleContent.contents[1]);
var target3 = template1(lifestyleContent.contents[2]);

// Set the innerHTML property of an element with ID "lifestyle_placeholder1"
// to the generated HTML content from the first Handlebars template
document.getElementById("lifestyle_placeholder1").innerHTML = target1;

// Set the innerHTML property of an element with ID "lifestyle_placeholder2"
// to the generated HTML content from the second Handlebars template
document.getElementById("lifestyle_placeholder2").innerHTML = target2;

// Set the innerHTML property of an element with ID "lifestyle_placeholder3"
// to the generated HTML content from the first Handlebars template again
document.getElementById("lifestyle_placeholder3").innerHTML = target3;
