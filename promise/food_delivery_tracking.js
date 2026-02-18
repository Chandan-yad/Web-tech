function placeOrder(item, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order confirmed");
            resolve({ orderId: 101, item });
        }, delay);
    });
}

function assignRider(orderId, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Rider assigned");
            resolve({ riderId: 5001, orderId });
        }, delay);
    });
}

function pickupOrder(riderId, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("On the way");
            resolve(riderId);
        }, delay);
    });
}

function deliverOrder(orderId, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Delivered");
            resolve(orderId);
        }, delay);
    });
}

function trackFoodDelivery() {

    placeOrder("Pizza", 1000)
        .then((order) => {
            return assignRider(order.orderId, 2000);
        })
        .then((rider) => {
            return pickupOrder(rider.riderId, 2000);
        })
        .then(() => {
            return deliverOrder(101, 3000);
        })
        .catch((err) => {
            console.log("Error:", err);
        })
        .finally(() => {
            console.log("Tracking closed");
        });
}

trackFoodDelivery();