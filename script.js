// Smoothie class
class Smoothie {
    constructor(name, fruit, milk, toppings) {
        this.name = name;
        this.fruit = fruit;
        this.milk = milk;
        this.toppings = toppings;
    }

    getDescription() {
        let description = `Your ${this.name} smoothie is made with ${this.fruit} and ${this.milk}.`;
        if (this.toppings.length > 0) {
            description += ` Toppings: ${this.toppings.join(', ')}`;
        }
        return description;
    }

    getImage() {
        const images = {
            'strawberry': 'strawberry-smoothie.jpg',
            'banana': 'banana-smoothie.jpg',
            'mango': 'mango-smoothie.jpg',
            'pineapple': 'pineapple-smoothie.jpg'
        };
        return images[this.fruit];
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const smoothieName = form.elements['smoothie-name'].value;
    const fruit = form.elements['fruit'].value;
    const milk = form.elements['milk'].value;
    const toppings = Array.from(form.elements['toppings']).filter(topping => topping.checked).map(topping => topping.value);
    const smoothie = new Smoothie(smoothieName, fruit, milk, toppings);
    displaySmoothie(smoothie);
}

// Function to display smoothie information
function displaySmoothie(smoothie) {
    const outputDiv = document.getElementById('smoothie-output');
    outputDiv.innerHTML = `
        <h2>${smoothie.name}</h2>
        <p>${smoothie.getDescription()}</p>
        <img src="images/${smoothie.getImage()}" alt="Smoothie image" class="smoothie-image">
    `;
}

// Add event listener to form submission
document.getElementById('smoothie-form').addEventListener('submit', handleSubmit);