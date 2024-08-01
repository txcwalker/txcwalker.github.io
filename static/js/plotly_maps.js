document.addEventListener('DOMContentLoaded', function() {
    // Function to load and plot the JSON data
    function loadPlot(elementId, jsonFile) {
        fetch(`/images/Housing_price/${jsonFile}`)
            .then(response => response.json())
            .then(data => {
                Plotly.newPlot(elementId, data.data, data.layout);
            })
            .catch(error => console.error('Error loading plot:', error));
    }

    // Load each plot
    loadPlot('residuals-plot', 'residuals_plot.json');
    loadPlot('least-accurate-plot', 'least_accurate_plot.json');
    loadPlot('most-accurate-plot', 'most_accurate_plot.json');
});
