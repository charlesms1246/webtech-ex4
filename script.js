function validateForm() {
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let quantity = document.getElementById("quantity").value;
  let comments = document.getElementById("comments").value.trim();
  let terms = document.getElementById("terms").checked;

  // 1. Validate name
  if (name.length < 3) {
    alert("Name must be at least 3 characters long!");
    return false;
  }

  // 2. Validate password (min 6 chars, 1 number, 1 special char)
  let passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
  if (!passPattern.test(password)) {
    alert("Password must be at least 6 characters long, include a number and a special character!");
    return false;
  }

  // 3. Validate phone number
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits!");
    return false;
  }

  // 4. Validate quantity
  if (quantity < 1 || quantity > 5) {
    alert("Quantity must be between 1 and 5!");
    return false;
  }

  // 5. Validate comments (if entered)
  if (comments.length > 0 && comments.length < 5) {
    alert("If provided, comments should be at least 5 characters.");
    return false;
  }

  // 6. Validate brand and model (already required but rechecked)
  let brand = document.getElementById("brand").value.trim();
  let model = document.getElementById("model").value.trim();
  if (brand === "" || model === "") {
    alert("Car brand and model cannot be empty!");
    return false;
  }

  // 7. Validate accessory selection
  let accessory = document.getElementById("accessory").value;
  if (accessory === "") {
    alert("Please select an accessory type!");
    return false;
  }

  // 8. Validate terms checkbox
  if (!terms) {
    alert("You must agree to the terms & conditions!");
    return false;
  }

  alert("Order submitted successfully!");
  return true;
}
