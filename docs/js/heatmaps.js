document.addEventListener('DOMContentLoaded', async function () {
    // Load city data and populate the dropdown
    try {
        const response = await fetch('/data/df5.json');
        if (!response.ok) throw new Error('Failed to load data');
        const data = await response.json();
        console.log('Data loaded:', data);

        // Approved cities list (update this list as needed)
        const approvedCities = [
        'Chicago', 'New York', 'Los Angeles', 'Portland', 'Honolulu', 'Nashville', 'Brooklyn',
        'San Francisco', 'Seattle', 'San Diego', 'Las Vegas', 'Houston', 'Dallas', 'Philadelphia',
        'Denver', 'Austin', 'Sacramento', 'Phoenix', 'Atlanta', 'Long Beach', 'Tucson', 'San Antonio',
        'Charlotte', 'Albuquerque', 'Pittsburgh', 'Raleigh', 'Fresno', 'Baltimore', 'Tampa', 'New Orleans',
        'Charleston', 'Columbus', 'Orlando', 'San Jose', 'Kansas City', 'Richmond', 'Louisville',
        'Minneapolis', 'Fort Worth', 'Tulsa', 'Indianapolis', 'Jacksonville', 'Omaha', 'Oklahoma City',
        'Boston', 'Reno', 'Salt Lake City', 'Rochester', 'Milwaukee', 'Boise', 'Cleveland', 'Oakland',
        'Memphis', 'Miami', 'Buffalo', 'Cincinnati', 'Detroit', 'Anchorage', 'El Paso', 'Birmingham',
        'Providence', 'New Haven', 'Des Moines', 'Anaheim', 'Wilmington', 'Mobile', 'Little Rock', 'Santa Fe',
        'Saint Louis', 'Sioux Falls', 'Montgomery', 'Manchester', 'Hartford', 'Billings', 'Orange', 'St. Louis',
        'Culver City', 'Dover', 'Van Nuys', 'Cheyenne', 'Burlington', 'Sparks', 'Compton', 'West Hartford',
        'Coral Gables', 'Berkeley', 'Gardena', 'Flushing', 'Fullerton', 'Cambridge', 'Windsor', 'Queens',
        'South Portland', 'Astoria', 'Hamden', 'Alameda', 'Garden Grove', 'Jackson', 'Sherman Oaks',
        'North Charleston', 'Santa Monica', 'Cranston', 'West Haven', 'Mission', 'West Hollywood',
        'North Hollywood', 'Santa Clara', 'Homewood', 'Carson', 'Covington', 'Shawnee', 'Bronx', 'Elmhurst',
        'Lakewood', 'Forest Hills', 'Doral', 'Fargo', 'Pawtucket', 'Jackson Heights', 'Campbell',
        'Long Island City', 'Newport', 'Johnston', 'Cheektowaga', 'Santa Ana', 'South Burlington',
        'Vestavia Hills', 'Somerville', 'Lynwood', 'Clovis', 'North Little Rock', 'St Louis', 'West Valley City',
        'East Hartford', 'South Gate', 'Marina Del Rey', 'Glastonbury', 'Encino', 'North Haven',
        'Wethersfield', 'East Providence', 'Northridge', 'Ridgewood', 'Venice', 'Newington', 'Dearborn',
        'Beverly Hills', 'East Haven', 'Paramount', 'Emeryville', 'Brookline', 'Garden City', 'Wauwatosa',
        'North Providence', 'Amherst', 'West Allis', 'Tonawanda', 'Studio City', 'La Vista', 'Clayton', 'Downey',
        'Woodside', 'Williamsville', 'Decatur', 'Henrico', 'Glendale', 'Jamaica', 'Panorama City', 'Haltom City',
        'Torrance', 'Hoover', 'Arlington', 'Maplewood', 'Bedford', 'Scarborough', 'Westbrook', 'Mountain Brook',
        'Brea', 'San Fernando Valley', 'Mount Pleasant', 'Jeffersonville', 'Kirkwood', 'Hamtramck', 'Parma',
        'South Salt Lake', 'Seal Beach', 'Hooksett', 'North Kansas City', 'Sunnyside', 'West Des Moines',
        'Signal Hill', 'Urban Honolulu', 'Tampa Bay', 'New Castle', 'Bloomfield', 'Inglewood', 'Camden',
        'Webster Groves', 'Gretna', 'Colchester', 'Independence', 'Falmouth', 'South Miami', 'Corona', 'Winooski',
        'South Charleston', 'Jenks', 'Brentwood', 'Rego Park', 'University City', 'Papillion', 'Newark',
        'Metairie', 'Bellevue', 'Bellflower', 'Coronado', 'Artesia', 'Granada Hills', 'Cerritos', 'Miami Springs',
        'Johns Island', 'Richmond Heights', 'Reseda', 'Ridgeland', 'Huntington Park', 'West Sacramento', 'Warr Acres',
        'El Segundo', 'Valley Village', 'North Hills', 'Tarzana', 'Tustin', 'Greenfield', 'Bayside', 'San Fernando',
        'Edina', 'Saint Paul', 'Upper Arlington', 'Kenmore', 'Merriam', 'Placentia', 'Kew Gardens', 'Pearl',
        'New Britain', 'Glen Allen', 'Irondale', 'Edgewater', 'North Salt Lake', 'Fort Bliss', 'West Milwaukee',
        'Hollywood', 'Central Falls', 'Coconut Grove', 'Londonderry', 'Windsor Heights', 'Towson', 'Shelburne',
        'Dorchester', 'Urbandale', 'Harvey', 'Maspeth', 'Worthington', 'Shorewood', 'Seekonk', 'Parkville',
        'Los Gatos', 'Chamblee', 'St Louis Park', 'Moorhead', 'Henrietta', 'Ciudad Juarez', 'Castle Hills', 'Bell',
        'Brookhaven', 'Crescent Springs', 'Bellaire', 'Lake Worth', 'Essex Junction', 'Fresh Meadows', 'Riverside',
        'Sun Valley', 'Lincoln', 'South Windsor', 'Branford', 'Garnet Valley', 'Mission Hills', 'Woodbridge',
        'Fort Lee', 'Rocky Hill', 'Playa Del Rey', 'Orinda', 'Highland Park', 'Bell Gardens', 'St. Louis Park',
        'Milford', 'Sausalito', 'Woodhaven', 'Yorba Linda', 'Warwick', 'Bartlett', 'East Elmhurst', 'Hialeah',
        'Overland Park', 'Middle Village', 'Pacoima', 'Greenville', 'Cape Elizabeth', 'Valley View', 'Farmington',
        'Crown Heights', 'West Fargo', 'National City', 'Bexley', 'Beech Grove', 'Phila', 'Jamaica Plain',
        'Richmond Hill', 'West Miami', 'Ft. Worth', 'San Leandro', 'Glen Mills', 'Juarez', 'Goffstown', 'Greece',
        'Cliffside Park', 'Irondequoit', 'Prairie Village', 'Albany', 'Chadds Ford', 'Arleta', 'Columbia Heights'
        ];

        // Sort the approved cities alphabetically
        approvedCities.sort();

        // Populate city dropdown
        const citySelect = document.getElementById('target_city');
        if (!citySelect) {
            console.error('City select element not found');
            return;
        }

        // Clear existing options
        citySelect.innerHTML = '';

        // Append sorted city options
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
            console.log(`City: ${city}, Variable: ${variable}`);

            // Check if a city was selected
            if (!city) {
                console.error('No city selected');
                return;
            }

            // Filter data for the selected city
            const filteredData = data.filter(item => item['location.city'] === city);
            if (filteredData.length === 0) {
                console.error(`No data found for city: ${city}`);
                return;
            }

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
                            size: filteredData.map(d => d['review_count'] / 250),
                            color: filteredData.map(d => d['review_count']),
                            colorscale: 'Viridis',
                            colorbar: {
                                title: 'Reviews',
                                tickprefix: '',
                                len: 0.75,
                                thickness: 15,
                                x: 1.05,
                                y: 0.5
                            },
                            opacity: 0.7
                        },
                        text: filteredData.map(d => `Name: ${d['name']}<br>Coordinates: (${d['coordinates.latitude']}, ${d['coordinates.longitude']})<br>Reviews: ${d['review_count']}`),
                        hoverinfo: 'text'
                    }],
                    layout: {
                        mapbox: {
                            style: 'carto-positron',
                            center: {
                                lat: filteredData[0]['coordinates.latitude'],
                                lon: filteredData[0]['coordinates.longitude']
                            },
                            zoom: 11
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
                            size: filteredData.map(d => d['price'] * 2.35),
                            color: filteredData.map(d => d['price']),
                            colorscale: 'Rainbow',
                            colorbar: {
                                title: 'Price',
                                tickprefix: '',
                                len: 0.75,
                                thickness: 15,
                                x: 1.05,
                                y: 0.5
                            },
                            opacity: 0.6
                        },
                        text: filteredData.map(d => `Name: ${d['name']}<br>Coordinates: (${d['coordinates.latitude']}, ${d['coordinates.longitude']})<br>Price: ${d['price']}`),
                        hoverinfo: 'text'
                    }],
                    layout: {
                        mapbox: {
                            style: 'carto-positron',
                            center: {
                                lat: filteredData[0]['coordinates.latitude'],
                                lon: filteredData[0]['coordinates.longitude']
                            },
                            zoom: 11
                        },
                        title: `${city} Yelp Price Scatter Map`,
                        margin: { t: 0, b: 0 },
                        coloraxis: {
                            colorbar: {
                                title: 'Price',
                                tickprefix: '',
                                len: 0.75,
                                thickness: 15,
                                x: 1.05,
                                y: 0.5
                            }
                        }
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
                            size: filteredData.map(d => d['rating'] * 1.65),
                            color: filteredData.map(d => d['rating']),
                            colorscale: 'Jet',
                            colorbar: {
                                title: 'Rating',
                                tickprefix: '',
                                len: 0.75,
                                thickness: 15,
                                x: 1.05,
                                y: 0.5
                            },
                            opacity: 0.75
                        },
                        text: filteredData.map(d => `Name: ${d['name']}<br>Coordinates: (${d['coordinates.latitude']}, ${d['coordinates.longitude']})<br>Rating: ${d['rating']}`),
                        hoverinfo: 'text'
                    }],
                    layout: {
                        mapbox: {
                            style: 'carto-positron',
                            center: {
                                lat: filteredData[0]['coordinates.latitude'],
                                lon: filteredData[0]['coordinates.longitude']
                            },
                            zoom: 11
                        },
                        title: `${city} Yelp Rating Scatter Map`,
                        margin: { t: 0, b: 0 },
                        coloraxis: {
                            colorbar: {
                                title: 'Rating',
                                tickprefix: '',
                                len: 0.75,
                                thickness: 15,
                                x: 1.05,
                                y: 0.5
                            }
                        }
                    }
                };
            }
            Plotly.react('plotly-map', fig.data, fig.layout);
        });
    } catch (error) {
        console.error('Error loading city data:', error);
    }
});
