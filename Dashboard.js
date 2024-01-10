hideAllSections();
document.getElementById("dashboard").style.display = "block";
updateCartCount();
function showDashboard() {
  hideAllSections();
  document.getElementById("dashboard").style.display = "block";
}

function showItems() {
  hideAllSections();
  document.getElementById("items").style.display = "block";
}

function showFAQ() {
  hideAllSections();
  document.getElementById("faq").style.display = "block";
}

function showAbout() {
  hideAllSections();
  document.getElementById("about").style.display = "block";
}

function hideAllSections() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

function addToCart(itemName) {
  const cartItemsDiv = document.getElementById("cart-items");

  // Create a new card-like div for the item
  const newItemCard = document.createElement("div");
  newItemCard.classList.add("cart-card"); // Add a class for styling

  // Add image to the card
  const img = document.createElement("img");
  img.src = itemName.toLowerCase() + ".jpg"; // Assuming image names match item names
  img.alt = itemName;
  img.classList.add("card-image"); // Add card-image class for styling
  newItemCard.appendChild(img);

  // Add title to the card
  const title = document.createElement("h3");
  title.textContent = itemName;
  newItemCard.appendChild(title);

  // Add the card to the cart
  cartItemsDiv.appendChild(newItemCard);

  // Update cart count
  updateCartCount();
}

function updateCartCount() {
    const cartItems = document.querySelectorAll(".cart-card");
    const noItemsMessage = document.getElementById("no-items-message");
  
    if (cartItems.length === 0) {
      noItemsMessage.style.display = "block"; 
    } else {
      noItemsMessage.style.display = "none";  
    }
  
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartItems.length.toString();
  }