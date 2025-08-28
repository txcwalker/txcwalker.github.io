document.addEventListener("DOMContentLoaded", function () {
    loadZipCodes();
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        updateTable();
    });
});

function loadZipCodes() {
    fetch('/data/restaurants.json')
        .then(response => response.json())
        .then(data => {
            const zipCodeSelect = document.getElementById("zipCodeDropdown");

            // Clear existing options
            zipCodeSelect.innerHTML = "";

            // Extract unique ZIP codes from the JSON data
            const zipCodes = [...new Set(data.map(item => item['location.zip_code']))];

            // Separate numeric and alphanumeric ZIP codes
            const numericZipCodes = zipCodes.filter(zipCode => /^[0-9]+$/.test(zipCode));
            const alphanumericZipCodes = zipCodes.filter(zipCode => !/^[0-9]+$/.test(zipCode));

            // Convert numeric ZIP codes to floats and sort
            numericZipCodes.sort((a, b) => parseFloat(a) - parseFloat(b));

            // Populate the dropdown with numeric ZIP codes first
            numericZipCodes.forEach(zipCode => {
                const option = document.createElement("option");
                option.value = zipCode;
                option.textContent = zipCode;
                zipCodeSelect.appendChild(option);
            });

            // Add alphanumeric ZIP codes at the end
            alphanumericZipCodes.forEach(zipCode => {
                const option = document.createElement("option");
                option.value = zipCode;
                option.textContent = zipCode;
                zipCodeSelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error loading ZIP codes:", error));
}

function updateTable() {
    const zipCode = document.getElementById("zipCodeDropdown").value;

    fetch('/data/restaurants.json')
        .then(response => response.json())
        .then(data => {
            // Filter data based on selected ZIP code
            const filteredData = data.filter(item => item['location.zip_code'] === zipCode);

            // Sort the filtered data by search score in descending order
            const sortedData = filteredData.sort((a, b) => b.search_score - a.search_score);

            // Select only the top 10 results
            const topTen = sortedData.slice(0, 10);

            const tableContainer = document.getElementById("tableContainer");
            tableContainer.innerHTML = ""; // Clear existing table content

            // Create a new table and apply styling
            const table = document.createElement("table");
            table.id = "dataTable";
            table.classList.add("styled-table"); // Add class for styling

            // Create table header
            const thead = document.createElement("thead");
            thead.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Reviews</th>
                    <th>Search Score</th>
                </tr>
            `;
            table.appendChild(thead);

            // Create table body
            const tbody = document.createElement("tbody");

            // Add rows to the table body
            topTen.forEach((row, index) => {
                const tr = document.createElement("tr");

                // Example condition: Apply red text color to the first 3 rows
                if (index < 3) {
                    tr.classList.add("highlight-row");
                }

                tr.innerHTML = `
                    <td>${row.name}</td>
                    <td>${row.rating}</td>
                    <td>${row.review_count}</td>
                    <td>${row.search_score}</td>
                `;
                tbody.appendChild(tr);
            });

            table.appendChild(tbody);

            // Append the new table to the container
            tableContainer.appendChild(table);
        })
        .catch(error => console.error("Error:", error));
}
