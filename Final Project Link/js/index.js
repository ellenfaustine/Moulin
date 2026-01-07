// Wait for the document to be ready before executing the function
$(document).ready(function () {
  // When the user scrolls the window, execute the function
  $(window).scroll(function () {
    /* If the scroll value of the Y axis is greater than 150 pixels, 
    add the "sticky" class to the elements with the class "stickyNavbar".
    Otherwise, remove the "sticky" class from those elements. */
    if (this.scrollY > 150) $(".stickyNavbar").addClass("sticky");
    else $(".stickyNavbar").removeClass("sticky");
  });
});

//Define a function called loadContent
function loadContent(type) {
  if (type == 1) {
    // If the type parameter is 1, find the HTML element with the ID "search"
    var div = document.getElementById("search");
    // Add the "visible" class to the "search" element
    div.classList.add("visible");
  } else if (type == 2) {
    // If the type parameter is 2, find the HTML element with the ID "hamburger"
    var div1 = document.getElementById("hamburger");
    // Add the "visible" class to the "hamburger" element
    div1.classList.add("visible");
    // Find all elements with the class "menu"
    var animation = document.getElementsByClassName("menu");

    // Loop through all the "menu" elements
    for (var i = 0; i < animation.length; i++) {
      // Add the "slideup" class to each "menu" element
      animation[i].classList.add("slideup");
    }
  }

  // Disable scrolling on the body element
  document.getElementById("body").style.overflow = "hidden";
}

//Define a function called closeContent
function closeContent(type) {
  if (type == 1) {
    // If the type parameter is 1, find the HTML element with the ID "search"
    const div = document.getElementById("search");
    // Remove the "visible" class from the "search" element
    div.classList.remove("visible");
  } else if (type == 2) {
    // If the type parameter is 2, find the HTML element with the ID "hamburger"
    const div1 = document.getElementById("hamburger");
    // Remove the "visible" class from the "hamburger" element
    div1.classList.remove("visible");

    // Find all elements with the class "menu"
    const animation = document.getElementsByClassName("menu");
    // Loop through all the "menu" elements
    for (var i = 0; i < animation.length; i++) {
      // Remove the "slideup" class from each "menu" element
      animation[i].classList.remove("slideup");
    }
  } else if (type == 3) {
    // If the type parameter is 3, find the HTML element with the ID "article_placeholder"
    const hide = document.getElementById("article_placeholder");
    // Remove the "visible" class from the "article_placeholder" element
    hide.classList.remove("visible");
  }

  // Enable scrolling on the body element
  document.getElementById("body").style.overflow = "auto";
}

//Define a function called showTitle
function showTitle(type) {
  // If the type parameter is 1, find all HTML elements with the class "boxtitle1"
  if (type == 1) {
    const box1 = document.getElementsByClassName("boxtitle1");

    // Loop through all the "boxtitle1" elements
    for (var i = 0; i < box1.length; i++) {
      // Add the "titleTransition" class to each "boxtitle1" element
      box1[i].classList.add("titleTransition");
    }
  } else if (type == 2) {
    // If the type parameter is 2, find all HTML elements with the class "boxtitle2"
    const box2 = document.getElementsByClassName("boxtitle2");

    // Loop through all the "boxtitle2" elements
    for (var i = 0; i < box2.length; i++) {
      // Add the "titleTransition" class to each "boxtitle2" element
      box2[i].classList.add("titleTransition");
    }
  } else if (type == 3) {
    // If the type parameter is 3, find all HTML elements with the class "boxtitle3"
    const box3 = document.getElementsByClassName("boxtitle3");

    // Loop through all the "boxtitle3" elements
    for (var i = 0; i < box3.length; i++) {
      // Add the "titleTransition" class to each "boxtitle3" element
      box3[i].classList.add("titleTransition");
    }
  } else if (type == 4) {
    // If the type parameter is 4, find all HTML elements with the class "boxtitle4"
    const box4 = document.getElementsByClassName("boxtitle4");

    // Loop through all the "boxtitle4" elements
    for (var i = 0; i < box4.length; i++) {
      // Add the "titleTransition" class to each "boxtitle4" element
      box4[i].classList.add("titleTransition");
    }
  }
}

//Define a function called hideTitle
function hideTitle(type) {
  if (type == 1) {
    // If the type parameter is 1, find all HTML elements with the class "boxtitle1"
    const boxtitle1 = document.getElementsByClassName("boxtitle1");

    // Loop through all the "boxtitle1" elements
    for (var i = 0; i < boxtitle1.length; i++) {
      // Remove the "titleTransition" class from each "boxtitle1" element
      boxtitle1[i].classList.remove("titleTransition");
    }
  } else if (type == 2) {
    // If the type parameter is 2, find all HTML elements with the class "boxtitle2"
    const boxtitle2 = document.getElementsByClassName("boxtitle2");

    // Loop through all the "boxtitle2" elements
    for (var i = 0; i < boxtitle2.length; i++) {
      // Remove the "titleTransition" class from each "boxtitle2" element
      boxtitle2[i].classList.remove("titleTransition");
    }
  } else if (type == 3) {
    // If the type parameter is 3, find all HTML elements with the class "boxtitle3"
    const boxtitle3 = document.getElementsByClassName("boxtitle3");

    // Loop through all the "boxtitle3" elements
    for (var i = 0; i < boxtitle3.length; i++) {
      // Remove the "titleTransition" class from each "boxtitle3" element
      boxtitle3[i].classList.remove("titleTransition");
    }
  } else if (type == 4) {
    // If the type parameter is 4, find all HTML elements with the class "boxtitle4"
    const boxtitle4 = document.getElementsByClassName("boxtitle4");

    // Loop through all the "boxtitle4" elements
    for (var i = 0; i < boxtitle4.length; i++) {
      // Remove the "titleTransition" class from each "boxtitle4" element
      boxtitle4[i].classList.remove("titleTransition");
    }
  }
}
