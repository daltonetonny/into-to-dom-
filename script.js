function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text changed dynamically!';
}

function toggleStyle() {
    const textElement = document.getElementById('dynamicText');
    textElement.style.color = textElement.style.color === 'red' ? 'black' : 'red';
    textElement.style.fontSize = textElement.style.fontSize === '1.5em' ? '1em' : '1.5em';
}

function addItem() {
    const container = document.getElementById('itemContainer');
    const newItem = document.createElement('article');
    newItem.className = 'item';
    newItem.textContent = `Item ${container.children.length + 1}`;
    container.appendChild(newItem);
}

function removeItem() {
    const container = document.getElementById('itemContainer');
    if (container.children.length > 0) {
        container.removeChild(container.lastChild);
    }
}
