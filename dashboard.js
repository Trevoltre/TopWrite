// Dummy data for client orders
const clientOrders = [
    { id: "#98426001", subject: "History", status: "In Progress", price: "$30.00" },
    { id: "#98426002", subject: "Mathematics", status: "Completed", price: "$50.00" },
];

// Load client orders dynamically
function loadClientOrders() {
    const orderTable = document.getElementById("orderTable");
    orderTable.innerHTML = ""; // Clear previous rows

    clientOrders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.subject}</td>
            <td>${order.status}</td>
            <td>${order.price}</td>
        `;
        orderTable.appendChild(row);
    });
}

// Add event listener for DOMContentLoaded to display client orders
document.addEventListener("DOMContentLoaded", loadClientOrders);
