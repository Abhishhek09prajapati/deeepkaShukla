const submitBtn = document.getElementById("submit");
const name = document.getElementById("name");
const whatsappNumber = document.getElementById("whatsappNumber");
const status = document.getElementById("status");
const fatherName = document.getElementById("fatherName")
const addhress = document.getElementById("fullAddress")
const gender = document.getElementById("gender")

var pleaseDiv = document.querySelector(".divPlease");
pleaseDiv.style.display = "none"

const sc = "https://script.google.com/macros/s/AKfycbwkR3qHhcfYxf35tI9UmKedoMycNh1_tUfCzAqCQ-uCyfLnAsUfbXujUHa1lK46NKsi/exec";

submitBtn.addEventListener("click", function (e) {
    pleaseDiv.style.display = "flex"
    e.preventDefault();
    if (
        name.value.trim() === "" ||
        whatsappNumber.value.trim() === "" ||
        status.value === ""
    ) {
        pleaseDiv.style.display = "none"
        alert("Please fill all fields.");
        return;
    }
    const data = {
        name: name.value.trim(),
        whatsappNumber: whatsappNumber.value.trim(),
        status: status.value,
        fatherName: fatherName.value,
        addhress: addhress.value,
        gender: gender.value
    };
    fetch(`${sc}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(() => {

            alert("Feedback Submitted Successfully!");
            name.value = "";
            whatsappNumber.value = "";
            status.selectedIndex = 0;
            fatherName.value = "";
            addhress.value = "";
            pleaseDiv.style.display = "none"


            if (data.status === "YES") {
                window.open("https://chat.whatsapp.com/CDlXJFYXNhw4hwajX2hVsD?s=cl&p=a&ilr=0", "_blank")
            }
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong.");
        });
});