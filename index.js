const submitBtn = document.getElementById("submit");
const name = document.getElementById("name");
const whatsappNumber = document.getElementById("whatsappNumber");
const status = document.getElementById("status");

const sc = "https://script.google.com/macros/s/AKfycbwkR3qHhcfYxf35tI9UmKedoMycNh1_tUfCzAqCQ-uCyfLnAsUfbXujUHa1lK46NKsi/exec";

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
        name.value.trim() === "" ||
        whatsappNumber.value.trim() === "" ||
        status.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }
    const data = {
        name: name.value.trim(),
        whatsappNumber: whatsappNumber.value.trim(),
        status: status.value
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
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong.");
        });
});