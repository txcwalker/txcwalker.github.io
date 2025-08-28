document.addEventListener('DOMContentLoaded', async function () {
    // Load city data and populate the dropdown
    const [responseDf5, responseDf10, responseDf6] = await Promise.all([
        fetch('/data/df5.json'),
        fetch('/data/df10.json'),
        fetch('/data/df6.json')
    ]);

    if (!responseDf5.ok || !responseDf10.ok || !responseDf6.ok) {
        console.error('Failed to load data:', responseDf5.statusText, responseDf10.statusText, responseDf6.statusText);
        return;
    }

    const df5 = await responseDf5.json();
    const df10 = await responseDf10.json();
    const df6 = await responseDf6.json();

    const statesData = df5.map(item => item['location.state']);
    const citiesData = df10.map(item => item['location.city']);
    const zipCodesData = df5.map(item => item['location.zip_code']);

    // Ensure data is unique and sorted
    const uniqueSortedStates = [...new Set(statesData)].sort();
    const uniqueSortedCities = [...new Set(citiesData)].sort();
    const uniqueSortedZipCodes = [...new Set(zipCodesData)].sort((a, b) => a - b);

    // Populate the dropdowns
    document.getElementById('target_states').innerHTML = uniqueSortedStates.map(state => `<option value="${state}">${state}</option>`).join('');
    document.getElementById('target_cities').innerHTML = uniqueSortedCities.map(city => `<option value="${city}">${city}</option>`).join('');
    document.getElementById('target_zip_codes').innerHTML = uniqueSortedZipCodes.map(zip => `<option value="${zip}">${zip}</option>`).join('');

    window.graphData = df6; // Assuming df6 contains the tag data
});

window.updateGraph = function (formType) {
    console.log(`updateGraph called for: ${formType}`);

    const selectedValues = Array.from(document.getElementById(`target_${formType}`).selectedOptions).map(option => option.value);
    console.log(`Selected values: ${selectedValues}`);

    // Filter graphData based on selected values
    const filteredData = window.graphData.filter(entry => {
        if (formType === 'states' && entry['location.state']) {
            return selectedValues.includes(entry['location.state']);
        } else if (formType === 'cities' && entry['location.city']) {
            return selectedValues.includes(entry['location.city']);
        } else if (formType === 'zip_codes' && entry['location.zip_code']) {
            return selectedValues.includes(entry['location.zip_code']);
        }
        return false;
    });

    console.log(`Filtered data: ${JSON.stringify(filteredData)}`);

    // Count the frequency of each tag
    const tagCounts = {};
    filteredData.forEach(entry => {
        let tags = entry.tags;
        if (typeof tags === 'string') {
            // Assuming tags are stored as a comma-separated string
            tags = tags.split(',').map(tag => tag.trim());
        }
        if (Array.isArray(tags)) {
            tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        } else {
            console.warn(`Tags are not an array for entry: ${JSON.stringify(entry)}`);
        }
    });

    console.log(`Tag counts: ${JSON.stringify(tagCounts)}`);

    // Sort tags by frequency and take the top 10
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    console.log(`Sorted tags: ${JSON.stringify(sortedTags)}`);

    if (sortedTags.length > 0) {
        const trace = {
            x: sortedTags.map(d => d[0]), // Tags
            y: sortedTags.map(d => d[1]), // Counts
            type: 'bar',
            marker: {
                color: sortedTags.map((_, i) => i),
                colorscale: 'Viridis',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            }
        };
        const layout = {
            title: `Most Common Tags in Selected ${formType.charAt(0).toUpperCase() + formType.slice(1)}`,
            xaxis: { title: 'Tags' },
            yaxis: { title: 'Total Count' }
        };

        Plotly.react(`plotly-graph-${formType}`, [trace], layout);
    } else {
        console.log('No data available for the selected criteria.');
    }
};
