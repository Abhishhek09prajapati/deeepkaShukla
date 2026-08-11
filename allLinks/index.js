var sh = "1Y0i2Ms4bEWttFasdmmPlufdLQntlRY7XONxE27dqRms";
var myList = document.getElementById("myList");

fetch(`https://opensheet.elk.sh/${sh}/myListData`)
    .then(res => res.json())
    .then(data => {

        data.forEach(l => {

            var div = document.createElement("div");
            div.className = "dataList";

            div.innerHTML = `
                <label>${l.name}</label>

                <div class="btnBox">
                    <button class="shareBtn">↗ Share</button>
                    <button class="CopyBTn">📋 Copy</button>
                </div>
            `;

            // Copy button
            div.querySelector(".CopyBTn").addEventListener("click", () => {
                navigator.clipboard.writeText(l.links);

                alert("Copied: " + l.links);
            });

            // Share button
            div.querySelector(".shareBtn").addEventListener("click", async () => {

                if (navigator.share) {

                    await navigator.share({
                        title: "My Data",
                        text: l.links
                    });

                } else {

                    navigator.clipboard.writeText(l.links);
                    alert("Share not supported. Data copied!");
                }
            });

            myList.appendChild(div);
        });

    })
    .catch(error => {
        console.error("Error:", error);
    });