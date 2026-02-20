async function load() {
    const res = await fetch("predictions.json");
    const data = await res.json();
  
    let html = "";
  
    for (let team in data) {
      html += `
        <div class="team">
          <h2>${team}</h2>
          <p>Playoff Chance: ${data[team]}%</p>
        </div>
      `;
    }
  
    document.getElementById("teams").innerHTML = html;
  }
  load();