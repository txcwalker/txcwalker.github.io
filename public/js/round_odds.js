document.addEventListener("DOMContentLoaded", function () {
    const teamSelect = document.getElementById("teamSelect");
    const searchButton = document.getElementById("searchButton");
    const table = document.getElementById("oddsTable");
    const tableRows = document.querySelectorAll(".team-row");
    let sortOrder = {}; // Track sorting order per column

    function filterTable() {
        const selectedTeams = Array.from(teamSelect.selectedOptions).map(option => option.value);

        // Show table only if at least one team is selected
        table.style.display = selectedTeams.length > 0 ? "" : "none";

        tableRows.forEach(row => {
            if (selectedTeams.includes(row.dataset.team)) {
                row.style.display = "";  // Show matching row
            } else {
                row.style.display = "none";  // Hide non-matching row
            }
        });
    }

    function sortTable(columnIndex) {
        let rowsArray = Array.from(table.querySelectorAll("tbody tr")).filter(row => row.style.display !== "none");

        let isAscending = sortOrder[columnIndex] !== "asc";
        sortOrder[columnIndex] = isAscending ? "asc" : "desc";

        rowsArray.sort((rowA, rowB) => {
            let cellA = rowA.cells[columnIndex].innerText.trim();
            let cellB = rowB.cells[columnIndex].innerText.trim();

            let valueA = isNaN(cellA) ? cellA.toLowerCase() : Number(cellA);
            let valueB = isNaN(cellB) ? cellB.toLowerCase() : Number(cellB);

            return isAscending ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
        });

        rowsArray.forEach(row => table.querySelector("tbody").appendChild(row));
    }

    // Event listener for button click
    searchButton.addEventListener("click", filterTable);

    // Make sortTable function globally accessible
    window.sortTable = sortTable;
});
