document.addEventListener("DOMContentLoaded", function() {
    // When the button is clicked, calculate the carbon footprint
    document.getElementById("calculate-btn").addEventListener("click", function() {
        // Get the input values from the form
        const transport = parseFloat(document.getElementById("transport").value) || 0;
        const electricity = parseFloat(document.getElementById("electricity").value) || 0;
        const diet = document.getElementById("diet").value;
        const waste = parseFloat(document.getElementById("waste").value) || 0;

        // Validate input (ensure it's not negative)
        if (transport < 0 || electricity < 0 || waste < 0) {
            document.getElementById("res").textContent = "Please enter valid (non-negative) values.";
            return;
        }

        // Calculate carbon footprint based on the input values
        let carbonFootprint = (transport * 0.25) + (electricity * 0.5) + (waste * 0.1);

        // Adjust based on the diet
        if (diet === "meat") {
            carbonFootprint += 1.5;  // Meat-based diet has a larger carbon footprint
        } else if (diet === "vegetarian") {
            carbonFootprint += 1;  // Vegetarian diet is less carbon-intensive
        } else if (diet === "vegan") {
            carbonFootprint += 0.5;  // Vegan diet has the smallest carbon footprint
        }

        // // Display the result in the "result" div
        // document.getElementById("res").innerHTML = `Your estimated carbon footprint is: ${carbonFootprint.toFixed(2)} tons of CO2 per year.`;

        // alert("result").textContent = `Your estimated carbon footprint is: ${carbonFootprint.toFixed(2)} tons of CO2 per year.`;

        const result=`Your estimated carbon footprint is: ${carbonFootprint.toFixed(2)} tons of CO2 per year.`;

        alert(result);
    });
});


// Community Story Submission Logic
document.querySelector("#story-form button").addEventListener("click", () => {
const name = document.getElementById("name").value;
const story = document.getElementById("story").value;

if (name && story) {
    const storyList = document.querySelector(".story-list");
    const storyCard = document.createElement("div");
    storyCard.className = "story-card";
    storyCard.innerHTML = `<h3>${name}</h3><p>${story}</p>`;
    storyList.appendChild(storyCard);

    document.getElementById("name").value = "";
    document.getElementById("story").value = "";
    alert("Thank you for sharing your story!");
} else {
    alert("Please fill in all fields.");
}
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}