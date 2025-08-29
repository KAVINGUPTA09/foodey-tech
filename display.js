
window.onload = function () {
  let outputDiv = document.getElementById("output");

  // Get all saved records
  let storedData = JSON.parse(localStorage.getItem("formDataList"));

  if (storedData && storedData.length > 0) {
    // Create a table
    let table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    let headerRow = document.createElement("tr");
    ["Name", "Email", "Address", "Phone", "Gender", "Hobbies"].forEach((heading) => {
      let th = document.createElement("th");
      th.textContent = heading;
      th.style.border = "1px solid #ccc";
      th.style.padding = "8px";
      th.style.background = "#f0f0f0";
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Add all rows
    storedData.forEach((record) => {
      let row = document.createElement("tr");
      for (let key in record) {
        let cell = document.createElement("td");
        cell.textContent = record[key];
        cell.style.border = "1px solid #ccc";
        cell.style.padding = "8px";
        row.appendChild(cell);
      }
      table.appendChild(row);
    });

    outputDiv.appendChild(table);
  } else {
    outputDiv.innerHTML = "<p>No data found!</p>";
  }

  document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.removeItem("formDataList");
    outputDiv.innerHTML = "<p>All data cleared!</p>";
  });
};
