// const imageData = JSON.parse(localStorage.getItem("Product_Image")) || [];
// console.log(imageData);
// // array of object data

// // reference to the table body
// const tableBody = document.querySelector("#dataTable tbody");

// // loop through each item in the data array
// imageData.forEach((item) => {
//   // create a new row
//   const row = document.createElement("tr");

//   // create a new cell for each property of the item
//   Object.values(item).forEach((value) => {
//     const cell = document.createElement("td");
//     cell.textContent = value;
//     row.appendChild(cell);
//   });

//   // append the row to the table body
//   tableBody.appendChild(row);
// });

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

// localStorage.setItem("Product_Image", JSON.stringify(Product_details));

$(document).ready(function () {
  let allProducts = JSON.parse(localStorage.getItem("Product_Image")) || [];
  console.log(allProducts);

  function deleteProduct(id) {
    console.log("Product id is " + id);
  }

  function maketable() {
    const datatable = $("#dataTable");
    datatable.empty();

    allProducts.forEach((product) => {
      datatable.append(`<tr>
      <td> ${product.Id} </td>
      <td> ${product.Description} </td>
      <td> ${product.Category} </td>
      <td> ${product.Price} </td>
      <td><button class="deleteBtn btn btn-danger" data-id="${product.Id}">Delete</button></td>
      <td><a href="edit.html?index=${product.Id}" class="btn btn-primary">Edit</a></td>


      <br>
  
      
      `);
    });
  }

  $(document).on("click", ".deleteBtn", function () {
    const indexm = $(this).data("id");
    console.log(indexm);
    console.log(allProducts);
    allProducts = allProducts.filter((product) => product.Id !== indexm);
    // console.log(Manan);

    // Update the localStorage
    localStorage.setItem("Product_Image", JSON.stringify(allProducts));

    // Update the table
    maketable();
  });

  // Event listener for the log ID buttons
  $(document).on("click", ".EditBtn", function () {
    var productId = $(this).data("id");
    console.log("Clicked Log ID button for product id: " + productId);
  });

  $("#showFormBtn").on("click", function () {
    $("#addNewForm").show();
  });

  $("#addNewForm").on("submit", function (event) {
    event.preventDefault();

    // Collect values from the form
    const description = $("#new-description").val();
    const category = $("#new-category").val();
    const price = $("#new-price").val();
    // const images = $("#new-images").val().split(",");
    // const images = [];
    // const files = $(".image-input")[0].files;

    // for (let i = 0; i < files.length; i++) {
    //   console.log(i);
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    // images.push(e.target.result);
    // console.log(images);
    // If all images are processed, add new data to the

    // console.log("Sonpal");
    // if (images.length === files.length) {
    //   console.log("Manan");
    // }
    //   };
    //   reader.readAsDataURL(files[i]);
    // }

    // Generate a random ID

    // const newId = Math.floor(Math.random() * 1000) + 1;
    //
    // Add new data to the array
    // const newData = {
    //   Id: newId,
    //   Description: description,
    //   Category: category,
    //   Price: price,
    //   Images: images,
    // };

    // allProducts.push(newData);

    // Update the localStorage
    // localStorage.setItem("Product_Image", JSON.stringify(allProducts));

    // Clear the form
    // $("#addNewForm")[0].reset();

    // Update the table
    // maketable();
    //   });

    const images = [];
    const files = $(".image-input")[0].files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = function (e) {
        images.push(e.target.result);

        // If all images are processed, add new data to the array
        if (images.length === files.length) {
          addNewData();
        }
      };
      reader.readAsDataURL(files[i]);
    }

    // Function to add new data to the array
    function addNewData() {
      // Generate a random ID
      const newId = Math.floor(Math.random() * 1000) + 1;

      // Add new data to the array
      const newData = {
        Id: newId,
        Description: description,
        Category: category,
        Price: price,
        Images: images,
      };

      allProducts.push(newData);

      // Update the localStorage
      localStorage.setItem("Product_Image", JSON.stringify(allProducts));

      // Clear the form and hide it
      $("#addNewForm")[0].reset();
      //   $("#addNewForm").hide();

      // Update the table
      maketable();
    }
  });

  maketable();
});

function addData() {
  alert("Data added");
}
