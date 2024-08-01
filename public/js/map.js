document.addEventListener('DOMContentLoaded', async function () {
    // Load city data and populate the dropdown
    const response = await fetch('/static/data/df5.json');
    const data = await response.json();

    // Approved cities list
    const approvedCities = [
        'Chicago', 'New York', 'Los Angeles', // ... (and other cities)
    ];

    const citySelect = document.getElementById('target_city');
    approvedCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    // Handle form submission
    document.getElementById('heatmap-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const city = document.getElementById('target_city').value;
        const variable = document.getElementById('target_variable').value;

        // Filter data based on selected city
        const filteredData = data.filter(item => item['location.city'] === city);

        // Generate map based on selected variable
        let fig;
        if (variable === 'review_count') {
            fig = {
                data: [{
                    type: 'scattermapbox',
                    lat: filteredData.map(d => d['coordinates.latitude']),
                    lon: filteredData.map(d => d['coordinates.longitude']),
                    mode: 'markers',
                    marker: {
                        size: filteredData.map(d => d['review_count'] / 10),
                        color: filteredData.map(d => d['review_count']),
                        colorscale: 'Plasma',
                        opacity: 0.6
                    },
                    text: filteredData.map(d => d['name'])
                }],
                layout: {
                    mapbox: {
                        style: 'carto-positron',
                        center: {
                            lat: filteredData[0]['coordinates.latitude'],
                            lon: filteredData[0]['coordinates.longitude']
                        },
                        zoom: 10
                    },
                    title: `${city} Yelp Reviews Scatter Map`,
                    margin: { t: 0, b: 0 }
                }
            };
        } else if (variable === 'price') {
            fig = {
                data: [{
                    type: 'scattermapbox',
                    lat: filteredData.map(d => d['coordinates.latitude']),
                    lon: filteredData.map(d => d['coordinates.longitude']),
                    mode: 'markers',
                    marker: {
                        size: filteredData.map(d => d['price'] / 10),
                        color: filteredData.map(d => d['price']),
                        colorscale: 'Plotly3',
                        opacity: 0.6
                    },
                    text: filteredData.map(d => d['name'])
                }],
                layout: {
                    mapbox: {
                        style: 'carto-positron',
                        center: {
                            lat: filteredData[0]['coordinates.latitude'],
                            lon: filteredData[0]['coordinates.longitude']
                        },
                        zoom: 10
                    },
                    title: `${city} Yelp Price Scatter Map`,
                    margin: { t: 0, b: 0 }
                }
            };
        } else {
            fig = {
                data: [{
                    type: 'scattermapbox',
                    lat: filteredData.map(d => d['coordinates.latitude']),
                    lon: filteredData.map(d => d['coordinates.longitude']),
                    mode: 'markers',
                    marker: {
                        size: filteredData.map(d => d['rating'] * 2),
                        color: filteredData.map(d => d['rating']),
                        colorscale: 'YlGnBu',
                        opacity: 0.6
                    },
                    text: filteredData.map(d => d['name'])
                }],
                layout: {
                    mapbox: {
                        style: 'carto-positron',
                        center: {
                            lat: filteredData[0]['coordinates.latitude'],
                            lon: filteredData[0]['coordinates.longitude']
                        },
                        zoom: 10
                    },
                    title: `${city} Yelp Rating Scatter Map`,
                    margin: { t: 0, b: 0 }
                }
            };
        }

        Plotly.react('plotly-map', fig);
    });
});
