

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;

  // Collect hobbies
  let hobbies = [];
  document.querySelectorAll(".checkbox-group input:checked").forEach((cb) => {
    hobbies.push(cb.value);
  });

 
  let formData = {
    Name: name,
    Email: email,
    Address: address,
    Phone: phone,
    Gender: gender,
    Hobbies: hobbies.join(", ")
  };

  let storedData = JSON.parse(localStorage.getItem("formDataList")) || [];

  storedData.push(formData);

  localStorage.setItem("formDataList", JSON.stringify(storedData));

  // Redirect to display page
  window.location.href = "display.html";
});
