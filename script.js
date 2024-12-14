function getData(event) {
    event.preventDefault();

    const value = input.value;
    const url = `https://restcountries.com/v3.1/name/${value}`;
    const nameList = document.getElementById('nameList')

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            const countryDetails = data[0];

            // Populate country details
            capital.innerHTML = countryDetails.capital[0];
            region.innerHTML = countryDetails.region;
            country.innerHTML = countryDetails.name.common;
            flag.src = countryDetails.flags.png;
            official.innerHTML = countryDetails.name.official;

            // Handle languages
            const languages = countryDetails.languages;
            const languageList = Object.values(languages); // Convert to array

            // Clear previous list if any
            languages.innerHTML = '';

            // Display languages dynamically
            languageList.forEach((language) => {
                const li = document.createElement('li');
                li.textContent = language;
                nameList.appendChild(li);
                console.log(language); // Logs each language to console
            });
        })
        .catch((error) => console.error('Error:', error));
}
    