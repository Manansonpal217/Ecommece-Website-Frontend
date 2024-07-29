Product_details = [
  {
    Id: 1,
    Description: "Product1",
    Category: "Mobile",
    Path: "/images/p1.png",
    alt: "Image 1",
    Price: 500,
  },
  {
    Id: 2,
    Description: "Product2",
    Category: "Mobile",
    Path: "/images/p2.png",
    alt: "Image 2",
    Price: 600,
  },
  {
    Id: 3,
    Description: "Product3",
    Category: "Mobile",
    Path: "/images/p3.jpg",
    alt: "Image 3",
    Price: 700,
  },
  {
    Id: 4,
    Description: "Product4",
    Category: "Electronics",
    Path: "/images/p4.png",
    alt: "Image 4",
    Price: 500,
  },
  {
    Id: 5,
    Description: "Product5",
    Category: "Electronics",
    Path: "/images/p5.png",
    alt: "Image 5",
    Price: 5040,
  },
  {
    Id: 6,
    Description: "Product6",
    Category: "Electronics",
    Path: "/images/p6.png",
    alt: "Image 6",
    Price: 5060,
  },
  {
    Id: 7,
    Description: "Product7",
    Category: "Electronics",
    Path: "/images/p7.png",
    alt: "Image 7",
    Price: 5070,
  },
  {
    Id: 8,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/p8.png",
    alt: "Image 8",
    Price: 5500,
  },
  {
    Id: 9,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/p9.png",
    alt: "Image 8",
    Price: 5500,
  },
  {
    Id: 10,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/p1.png",
    alt: "Image 8",
    Price: 5500,
  },
];

Cart = [];
function cartisadded(id) {
  console.log("Came here");
  alert("Product added to cart" + "  " + 35);
  Cart.push({ productId: 35, quantity: "1" });
  console.log(Cart);
  localStorage.setItem("Cart_products", JSON.stringify(Cart));
}
Product_page = [];
function productpageisclicked(id) {
  Product_page.append(id);
}
//Product page
// localStorage.setItem("Product_page", JSON.stringify(Product_page));

// localStorage.setItem("Product_Image", JSON.stringify(Product_details));
$(document).ready(function () {
  // Retrieve image data from localStorage
  const imageData = JSON.parse(localStorage.getItem("Product_Image")) || [];
  var carousel = $("#imageCarousel");
  // Add images to the carousel
  imageData.forEach((image) => {
    console.log(image.Images[0]);

    image.Images.forEach((i) => {
      carousel.append(`<div><img src="${i}"></div>`);
    });
  });
  // Initialize Slick Carousel
  carousel.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "50px",
          centerMode: true,
        },
      },
    ],
  });
});

// js for clock
function updateClock() {
  const now = new Date();
  const days = now.getDay().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clockElement = document.getElementById("clock");
  clockElement.innerHTML = `<div class="main">
      <div class="time-section">
        <div><p>Days</p></div>
        <div>${days}</div>
      </div>
      <div class="time-section">
        <div><p>Hours</p></div>
        <div>${hours}</div>
      </div>
      <div class="time-section">
        <div><p>minutes</p></div>
        <div>${minutes}</div>
      </div>
      <div class="time-section">
        <div><p>seconds</p></div>
        <div>${seconds}</div>
      </div>
    </div>`;
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", startClock);

// top to scroll button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// maincaurosal
$(document).ready(function () {
  $(".slick-slider").slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#search").on("input", function () {
    updateDropdown($(this).val());
  });

  // Close the dropdown when clicking outside of it
  $(document).on("click", function (event) {
    const dropdown = $("#dropdown");
    if (!$(event.target).is("#search") && !$(event.target).is(dropdown)) {
      dropdown.hide();
    }
  });
});

function updateDropdown(searchValue) {
  // Mocked product data (replace with your actual product data)
  const imageData = JSON.parse(localStorage.getItem("Product_Image")) || [];

  const dropdown = $("#dropdown");
  dropdown.empty();

  const matchingProducts = imageData.filter((product) =>
    product.Description.includes(searchValue)
  );

  if (matchingProducts.length > 0) {
    console.log("Here matching");
    $.each(matchingProducts, function (index, product) {
      const productElement = $("<a>", {
        html: `<div style="display:flex; justify-content:space-between;"><div>${product.Description}</div> <div> <img src ="${product.Images[0]}" style="height:30px; width:30px"></div>`,
        click: function () {
          $("#search").val(product.Description);
          dropdown.hide();
          redirectProduct(product.Id);
        },
      });
      dropdown.append(productElement);
    });

    dropdown.show();
  } else {
    //   console.log("manan");
    const noMatchElement = $("<a>", {
      text: "No products matched",
      class: "no-match-message",
      click: function () {
        $("#search").val("No products matched");
        dropdown.hide();
      },
    });
    dropdown.html(noMatchElement);
    dropdown.show();
  }
}

function redirectProduct(Id) {
  window.location.href = `product.html?Id=${Id}`;
}
