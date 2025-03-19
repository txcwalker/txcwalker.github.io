document.addEventListener("DOMContentLoaded", function () {
    const dropdownContainer = document.getElementById("team-dropdowns");
    const searchButton = document.getElementById("search-button");
    const resultText = document.getElementById("result-text");
    const graphDiv = document.getElementById("graph-container");
    let jsonData = [];
    let uniqueTeams = [];

    // Load Final Four data
    fetch("/data/final_four_data.json")
        .then(response => response.json())
        .then(data => {
            jsonData = data;
        });

    // Load unique teams
    fetch("/data/unique_teams.json")
        .then(response => response.json())
        .then(data => {
            uniqueTeams = data.sort();
            createDropdowns();
        });

    function createDropdowns() {
        for (let i = 0; i < 4; i++) {
            let select = document.createElement("select");
            select.classList.add("team-select");
            select.innerHTML = `<option value="">Select a Team</option>`;

            uniqueTeams.forEach(team => {
                let option = document.createElement("option");
                option.value = team;
                option.textContent = team;
                select.appendChild(option);
            });

            dropdownContainer.appendChild(select);
        }
    }

    // Search function
    searchButton.addEventListener("click", function () {
        let selectedTeams = [...document.querySelectorAll(".team-select")]
            .map(d => d.value)
            .filter(v => v);

        if (selectedTeams.length < 1 || selectedTeams.length > 4) {
            alert("Please select between 1 and 4 teams.");
            return;
        }

        let sortedSelection = selectedTeams.sort();
        let matches = jsonData.filter(entry =>
            sortedSelection.every(team => entry.teams.includes(team))
        );

        if (matches.length === 0) {
            resultText.textContent = `No combinations found for ${sortedSelection.join(", ")}`;
            graphDiv.innerHTML = "";
            return;
        }

        let totalOccurrences = matches.reduce((sum, entry) => sum + entry.count, 0);
        resultText.textContent = `Total occurrences: ${totalOccurrences} times (${(totalOccurrences / 100).toFixed(2)}%)`;

        // Sort matches so the most common is on top
        let topMatches = matches
            .sort((a, b) => b.count - a.count)
            .slice(0, 15)
            .map(entry => ({
                x: entry.count,
                y: entry.teams.join(", "),
            }));

        // Create the bar chart with proper spacing
        Plotly.newPlot(graphDiv, [{
            type: "bar",
            x: topMatches.map(d => d.x).reverse(),  // Reverse order so most frequent is on top
            y: topMatches.map(d => d.y).reverse(),  // Reverse order
            orientation: "h",
            marker: {
                color: topMatches.map((_, i) => `hsl(${(240 - (i * 10))}, 100%, 50%)`), // Viridis-like color scale
                colorscale: 'Viridis', // Apply Viridis color scale
                line: {
                    color: 'rgba(0, 0, 0, 1)',
                    width: 1
                }
            }
        }], {
            title: {
                text: `Top Final Four Combinations for ${sortedSelection.join(", ")}`,
                font: { size: 18 },
                yref: 'paper',
                y: 1.05,
            },
            xaxis: { 
                title: "Occurrences", 
                tickfont: { size: 14 },
                automargin: true
            },
            yaxis: { 
                title: "Final Four Combinations", 
                automargin: true, 
                tickfont: { size: 12 } 
            },
            margin: { 
                l: 300,  // More space for Y-axis labels
                r: 100,  // Prevents clipping on the right
                t: 50, 
                b: 50 
            },
            height: 700, // More space for labels
            width: 1100 // Ensure full width usage
        });


    });
});
