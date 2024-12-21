const premiumSubjects = ["Calculus", "Accounting", "Economics"];

function calculatePrice() {
    const academicLevel = document.getElementById("academicLevel").value;
    const subject = document.getElementById("subject").value;
    const deadline = document.getElementById("deadline").value;
    const pages = parseInt(document.getElementById("pages").value, 10);

    let basePricePerPage;

    // Set base price per page based on academic level
    switch (academicLevel) {
        case "High School": basePricePerPage = 8; break;
        case "College": basePricePerPage = 10; break;
        case "University": basePricePerPage = 12; break;
        case "PhD": basePricePerPage = 15; break;
        default: basePricePerPage = 10;
    }

    // Add premium for certain subjects
    if (premiumSubjects.includes(subject)) {
        basePricePerPage += 5;
    }

    // Adjust price based on deadline
    let urgencyMultiplier = 1;
    if (deadline <= 2) urgencyMultiplier = 2; // 2 hours
    else if (deadline <= 6) urgencyMultiplier = 1.5; // 6 hours
    else if (deadline <= 24) urgencyMultiplier = 1.2; // 24 hours

    const totalPrice = (basePricePerPage * pages * urgencyMultiplier).toFixed(2);

    document.getElementById("priceDisplay").textContent = `Total Price: $${totalPrice}`;
}

// Add event listener for calculating price
document.getElementById("calculatePriceBtn").addEventListener("click", calculatePrice);
