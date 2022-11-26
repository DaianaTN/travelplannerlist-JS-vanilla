const submitButton = document.getElementById("btnSubmit");
const destinations = document.getElementById("destinations");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");


submitButton.addEventListener('click', addDestination);
destinations.addEventListener("click", handleDestinationsClick);
clearButton.addEventListener("click", clearList);


const greetingMessage = "No destinations yet. The world is waiting :)";
displayMessage("No destinations yet. The world is waiting :)")

function clearList() {
    const destinationsList = destinations.getElementsByClassName("list-group-item");
    while (destinationsList.length > 0) {
        destinationsList[0].parentNode.removeChild(destinationsList[0]);
    }
    displayMessage(greetingMessage);
}

function handleDestinationsClick(event) {
    const style = event.target.style;
    if (!style.textDecoration) {
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = "";
    }
}

function addDestination() {
    const newDestination = document.getElementById("newDestination");
    if (inputIsValid(newDestination.value)) {
        destinations.innerHTML += '<li class="list-group-item">' + newDestination.value + '</li>';
        newDestination.value = "";
        messageElement.style.visibility = "hidden";
    } else {
        displayMessage("Please provide a destination!");
    }
}

function displayMessage(message) {
    messageElement.innerText = message;
    messageElement.style.visibility = "visible";
}

function inputIsValid(input) {
    if (input) {
        return true;
    }
    return false;
}
