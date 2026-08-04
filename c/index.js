const container = document.getElementById("datacollection");

const sheetId = "1Y0i2Ms4bEWttFasdmmPlufdLQntlRY7XONxE27dqRms";

fetch(`https://opensheet.elk.sh/${sheetId}/feedback`)
    .then(res => res.json())
    .then(data => {

        container.innerHTML = "";

        data.forEach(item => {

            const div = document.createElement("div");
            div.className = "numn";

            const name = (item.name || "Unknown").toUpperCase();
            const number = item.whatsappNumber || "N/A";
            const status = (item.status || "").trim().toUpperCase();

            div.innerHTML = `
                <strong>${name}  </strong> 
                   (   ${number}  )
            `;

            div.style.color = "#fff";
            div.style.borderRadius = "6px";

            if (status === "YES") {
                div.style.backgroundColor = "#28a745";
            } else {
                div.style.backgroundColor = "#dc3545";
            }

            container.appendChild(div);
        });

    })
    .catch(err => {
        console.error(err);
        container.innerHTML = "<h3>Data Load Failed!</h3>";
    });