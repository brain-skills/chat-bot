document.addEventListener("DOMContentLoaded", function () {
    displayMessage("Привет! Я чат-бот. Задайте мне вопрос.");
});

function displayMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    displayMessage("Вы: " + userInput);

    // Здесь можно добавить логику для поиска ответа в JSON-файле
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const answer = data[userInput.toLowerCase()] || "Извините, не могу понять ваш вопрос.";
            displayMessage("Чат-бот: " + answer);
        })
        .catch(error => {
            console.error('Ошибка при загрузке ответов:', error);
            displayMessage("Чат-бот: Произошла ошибка при обработке запроса.");
        });

    document.getElementById("user-input").value = "";
}