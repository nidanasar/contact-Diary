// Get references to DOM elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const contactList = document.getElementById("contactList");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page from reloading

  const name = nameInput.value.trim();
  const number = numberInput.value.trim();

  // Check if both fields are filled
  if (name && number) {
    // Create contact item
    const listItem = document.createElement("li");
    listItem.className = "bg-white p-3 rounded shadow-md flex justify-between items-center";

    // Text for contact
    const contactText = document.createElement("span");
    contactText.textContent = `${name} - ${number}`;

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4";

    // Remove on click
    removeBtn.addEventListener("click", function () {
      contactList.removeChild(listItem);
    });

    // Add text and button to the list item
    listItem.appendChild(contactText);
    listItem.appendChild(removeBtn);

    // Add item to the contact list
    contactList.appendChild(listItem);

    // Clear input fields
    nameInput.value = "";
    numberInput.value = "";
  } else {
    alert("Please fill in both name and number.");
  }
});
