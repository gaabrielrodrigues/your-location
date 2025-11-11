const btn = document.getElementById("btn")
const res = document.getElementById("res")

btn.addEventListener("click", () => {
    fetch('https://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            res.innerHTML = `
            <div class="res-card">
                <p>Country: ${data.country}</p>
                <p>Region: ${data.regionName}</p>
                <p>City: ${data.city}</p>
            </div>
        `;
        })
        .catch(error => console.error('Error fetching data:', error));
})