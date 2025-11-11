document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn")
    const res = document.getElementById("res")
  
    btn.addEventListener("click", () => {
      fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
          res.innerHTML = `
            <div class="res-card">
              <p>Country: ${data.country}</p>
              <p>Region: ${data.region}</p>
              <p>City: ${data.city}</p>
            </div>
          `;
        })
    })
  })
  