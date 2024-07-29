$(document).ready(function () {
  // Sample main array of products
  const mainArray = [
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
      Description: "Product 8",
      Category: "laptop",
      Path: "/images/p8.png",
      alt: "Image 8",
      Price: 5500,
    },
    {
      Id: 9,
      Description: "Product 9",
      Category: "laptop",
      Path: "/images/p9.png",
      alt: "Image 9",
      Price: 2500,
    },
    {
      Id: 10,
      Description: "Product 10",
      Category: "laptop",
      Path: "/images/p1.png",
      alt: "Image 10",
      Price: 520,
    },
  ];

  let allProducts = JSON.parse(localStorage.getItem("Product_Image")) || [];
  // Function to extract category from URL
  function getCategoryFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("Category");
  }

  // Function to filter products by category
  function filterProductsByCategory(Category) {
    return allProducts.filter(
      (product) => product.Category === Category
      // console.log(product.Category === Category)
    );
  }

  // Function to display products on the page
  function displayProducts(products) {
    const productList = $("#product-list");

    // Clear existing content
    productList.empty();

    // Display each product
    products.forEach((product) => {
      productList.append(
        `<div class="col-12 col-md-6 col-lg-3 ">
        <div ><img src="${product.Images[0]}" class="d-flex">
        <p style="text-align:center">${product.Description}</p>
        <p style="text-align:center">${product.Price}</p>
        </div> <br> </div>`
      );
    });
  }

  // Get category from the URL
  const categoryFromUrl = getCategoryFromUrl();
  console.log(categoryFromUrl);

  if (categoryFromUrl) {
    // Filter products by category
    const filteredProducts = filterProductsByCategory(categoryFromUrl);
    console.log("Yes");
    console.log(filteredProducts);

    // Display filtered products
    displayProducts(filteredProducts);
  } else {
    // Display all products if no category is specified
    displayProducts(allProducts);
  }
});
