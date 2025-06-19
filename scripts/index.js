let clickCount = 0;

function displayMessage() {
    return `message ${clickCount}`;
}

function showTextarea() {
    clickCount++;
    const container = document.getElementById('textarea-container');
    container.innerHTML = `<textarea rows="5" cols="40">${displayMessage()}</textarea>`;
}