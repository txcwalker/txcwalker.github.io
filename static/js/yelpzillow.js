document.addEventListener('DOMContentLoaded', function() {
    function loadPlot(elementId, jsonFile) {
        fetch(`/static/data/${jsonFile}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Ensure layout settings
                data.layout = data.layout || {};
                data.layout.width = 800;  // Adjust width
                data.layout.height = 600; // Adjust height

                Plotly.newPlot(elementId, data.data, data.layout)
                    .catch(error => console.error(`Error plotting ${elementId}:`, error));
            })
            .catch(error => console.error(`Error loading ${jsonFile}:`, error));
    }

    // Load each plot
    loadPlot('residuals-plot', 'residuals_plot.json');
    loadPlot('least-accurate-plot', 'least_accurate_plot.json');
    loadPlot('most-accurate-plot', 'most_accurate_plot.json');
});
