// Define a JavaScript object called cultureNews1Content
var cultureNews1Content = {
  // The contents property is an array of content objects
  contents: [
    {
      // This content object has a single property called content, which is an array of article objects
      content: [
        {
          image: "images/rihanna.jpg",
          alt: "image of Rihanna in superbowl",
          category: "LIVING",
          title: "Rihanna Is Pregnant With Her Second Child",
          author: "By Emma Specter",
          snippet:
            "After a mesmerizing, Loewe and Alaïa-clad Super Bowl halftime show that had Twitter frantically wondering whether or not Rihanna was pregnant again...",
          loadArticleContent: "loadArticleContent(59)",
        },
        {
          image: "images/dianekruger.jpg",
          alt: "image of Diane Kruger",
          category: "TV & MOVIES",
          title: "Diane Kruger on the Mysterious Pleasures of the Femme Fatale",
          author: "By Erik Morse",
          snippet:
            "In the opening scene of Neil Jordan’s new hardboiled throwback film Marlowe, a sumptuously costumed Diane Kruger saunters into the office of private investigator...",
          loadArticleContent: "loadArticleContent(60)",
        },
        {
          image: "images/beyonce.jpg",
          alt: "image of Beyonce",
          category: "MUSIC",
          title: "Beyoncé Is Coming to a City Near You",
          author: "By Amel Mukhtar",
          snippet:
            "While we might be stuck waiting for those mythical Renaissance videos forever, fans will soon be able to see Beyoncé in the flesh: Queen B has announced a world tour...",
          loadArticleContent: "loadArticleContent(61)",
        },
        {
          image: "images/nicoleeisenman.jpg",
          alt: "image of an artwork",
          category: "ARTS",
          title: "The Layered Intimacies of Nicole Eisenman’s Prints",
          author: "By Grace Edquist",
          snippet:
            "In 2010, on the heels of an intense period of painting, the artist Nicole Eisenman wanted a change, something to shake up a practice...",
          loadArticleContent: "loadArticleContent(62)",
        },
        {
          image: "images/lordoftherings.jpg",
          alt: "image of lord of the rings scene",
          category: "CULTURE",
          title: "A new Lord of the Rings film reboot is on the way",
          author: "By Lucy Ford",
          snippet:
            "The complicated world of The Lord of the Rings rights is almost as confusing as the topography of Middle-earth. With Amazon securing TV rights for J.R.R Tolkien's work...",
          loadArticleContent: "loadArticleContent(63)",
        },
        {
          image: "images/rosebsimpson.jpg",
          alt: "image of Rose B. Simpson",
          category: "ARTS",
          title:
            "In Her New Show, Indigenous Artist Rose B. Simpson Paves Her Own Path",
          author: "By Christian Allaire",
          snippet:
            "Indigenous artist Rose B. Simpson has grown up around clay her entire life. Raised on the Santa Clara Pueblo reservation in New Mexico...",
          loadArticleContent: "loadArticleContent(64)",
        },
        {
          image: "images/princeton.jpg",
          alt: "image of a lady",
          category: "BOOKS",
          title:
            "At Princeton, a New Exhibition Unpacks Toni Morrison’s Complex Creative Process ",
          author: "By André-Naquian Wheeler",
          snippet:
            "More often than not, readers only encounter a text in its most polished form, when the action flows seamlessly and characters seem to leap off the page...",
          loadArticleContent: "loadArticleContent(65)",
        },
      ],
    },
  ],
};

// Get the HTML content of an element with the ID "cultureNews1" and store it in the `source` variable
var source = document.getElementById("cultureNews1").innerHTML;

// Compile the HTML source into a Handlebars template and store it in the `template` variable
var template = Handlebars.compile(source);

// Use the `template` to render the first item in the `cultureNews1Content.contents` array and store it in the `target` variable
var target = template(cultureNews1Content.contents[0]);

// Set the HTML content of an element with the ID "cultureNews1_placeholder" to the `target` variable
document.getElementById("cultureNews1_placeholder").innerHTML = target;
