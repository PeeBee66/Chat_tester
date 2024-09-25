const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && chatInput.value.trim() !== "") {
        const sender = document.querySelector('input[name="sender"]:checked').value;
        const message = document.createElement('div');
        message.textContent = `${sender}: ${chatInput.value}`;
        message.classList.add('chat-message');
        chatWindow.appendChild(message);

        // Ensure the newest message is visible by scrolling to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;

        chatInput.value = ''; // Clear the input field
    }
});
