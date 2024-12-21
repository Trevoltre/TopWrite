const db = require("./db-config");

function getUsers(callback) {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

function createOrder(orderData, callback) {
    const query = "INSERT INTO orders SET ?";
    db.query(query, orderData, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

module.exports = { getUsers, createOrder };
