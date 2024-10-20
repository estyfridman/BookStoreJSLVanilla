
class Book {
    constructor(id, name, price, rate, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.image = image;
    }
}

let gBooks = [
    new Book(1, "The Martian", 100, 0, "assets/themartian.jpg"),
    new Book(2, "Artemis", 150, 0, "assets/artemis.jpg"),
    new Book(3, "Project Hail Mary", 100, 0, "assets/hailmary.jpg"),
    new Book(4, "Theft of Pride", 150, 0, "assets/ThinkOutsideTheBox.jpg"),
    new Book(5, "RIHANIE", 100, 0, "assets/RIHANIE.jpg"),
    new Book(6, "Think Outside The Box", 150, 0, "assets/ThinkOutsideTheBox.jpg"),
    new Book(7, "RIHANIE", 100, 0, "assets/RIHANIE.jpg"),
    new Book(8, "Think Outside The Box", 150, 0, "assets/ThinkOutsideTheBox.jpg"),
    new Book(9, "Dont Look Back", 200, 0, "assets/DontLookBack.jpg")
];