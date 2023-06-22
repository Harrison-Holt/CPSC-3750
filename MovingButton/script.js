
window.addEventListener('DOMContentLoaded', (event) => {

    // Get references to the required elements
    const colorList = document.getElementById('colorList');
    const makeButton = document.getElementById('makeButton');
    const moveButton = document.getElementById('moveButton');
    const viewingArea = document.getElementById('viewingArea');
    const totalLabel = document.getElementById('totalLabel');

    // Initialize variables
    let total = 0;
    let isMoving = false;

    // Event listener for the "Make Button" button
    makeButton.addEventListener('click', () => {

        // Get the selected color and generate random coordinates and text for the button
        const selectedColor = colorList.value;
        const randomX = Math.floor(Math.random() * (viewingArea.clientWidth - 50));
        const randomY = Math.floor(Math.random() * (viewingArea.clientHeight - 50));
        const randomText = Math.floor(Math.random() * 99) + 1;

        // Create a new button element
        const button = document.createElement('button');
        button.classList.add('colored-button');
        button.style.backgroundColor = selectedColor;
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
        button.textContent = randomText;

        // Event listener for the colored button
        button.addEventListener('click', () => {

            // Update the button's color and update the total
            button.style.backgroundColor = selectedColor;
            const clickedValue = parseInt(button.textContent);
            total += clickedValue;
            totalLabel.textContent = `Total: ${total}`;
        });

        // Append the button to the viewing area
        viewingArea.appendChild(button);
    });

    // Event listener for the "Move" button
    moveButton.addEventListener('click', () => {

        // Toggle the value of isMoving and update the button text
        isMoving = !isMoving;
        moveButton.textContent = isMoving ? 'Pause' : 'Move';
        moveButtons();
    });

    // Function to move the buttons within the viewing area
    function moveButtons() {

        const buttons = document.getElementsByClassName('colored-button');
        const maxX = viewingArea.clientWidth - 50;
        const maxY = viewingArea.clientHeight - 50;

        for (let i = 0; i < buttons.length; i++) {

            const button = buttons[i];
            const directionX = Math.random() < 0.5 ? -1 : 1;
            const directionY = Math.random() < 0.5 ? -1 : 1;
            let newX = parseInt(button.style.left) + directionX * 5;
            let newY = parseInt(button.style.top) + directionY * 5;

            if (newX < 0) {

                newX = 0;

            } else if (newX > maxX) {

                newX = maxX;
            }

            if (newY < 0) {

                newY = 0;

            } else if (newY > maxY) {

                newY = maxY;
            }

            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }

        if (isMoving) {
            
            setTimeout(moveButtons, 100);
        }
    }
});
