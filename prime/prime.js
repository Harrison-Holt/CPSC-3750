// Harrison S. Holt
// June 19, 2023
// CPSC 3750
// program exam #1 
// Grade Level: A

// Check if a number is prime
function isPrime(n) {

    if (n <= 1) {

    return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {

        if (n % i == 0) return false;
    }
    
    return true;
}

// Generate and display prime and non-prime lists
function generateLists() {

    const number = parseInt(document.getElementById("number").value);
    const primeList = document.getElementById("primeList");
    const nonPrimeList = document.getElementById("nonPrimeList");

    primeList.innerHTML = "";
    nonPrimeList.innerHTML = "";

    for (let i = 1; i <= number; i++) {

        const li = document.createElement("li");
        li.textContent = i;
        isPrime(i) ? primeList.appendChild(li) : nonPrimeList.appendChild(li);
    }
}

// Calculate and display the sum of list items
function sumList(list, sumElement) {

    let sum = 0;

    for (let item of list.children) {

        sum += parseInt(item.textContent);
    }
    sumElement.textContent = sum;
}

// Change the background colors of list items
function changeListColors() {

    const primeListItems = document.querySelectorAll("#primeList li");
    const nonPrimeListItems = document.querySelectorAll("#nonPrimeList li");

    primeListItems.forEach((item) => {

        item.style.backgroundColor = getRandomColor();
    });

    nonPrimeListItems.forEach((item) => {

        item.style.backgroundColor = getRandomColor();
    });
}

// Generate a random hex color
function getRandomColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", generateLists);

document.getElementById("sumPrime").addEventListener("click", () => {

    sumList(document.getElementById("primeList"), document.getElementById("primeSum"));
});

document.getElementById("sumNonPrime").addEventListener("click", () => {

    sumList(document.getElementById("nonPrimeList"), document.getElementById("nonPrimeSum"));
});

// Change list colors every 5 seconds
setInterval(changeListColors, 5000);
