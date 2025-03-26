class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    increaseSpeed(amount) {
        this.speed += amount;
        document.getElementById("speed-display").innerText = `Speed: ${this.speed} km/h`;
    }
}

const myCar = new Car("Toyota", 60);

function increaseSpeed() {
    myCar.increaseSpeed(10);
}
