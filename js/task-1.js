const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);
numberOfCategories.forEach((category) => {
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.querySelectorAll("ul li").length);
});
