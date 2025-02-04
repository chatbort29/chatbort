const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');
const typingIndicator = document.getElementById('typingIndicator');

// Function to display user message
function displayUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to display bot message
function displayBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerText = message;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'block';
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Simple AI bot response with more options
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello')) {
        return 'Hi! How can I assist you today?';
    } else if (userMessage.includes('how are you')) {
        return 'I am doing great, thanks for asking!';
    } else if (userMessage.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (userMessage.includes('your name')) {
        return 'I am your friendly chatbot.';
    } else if (userMessage.includes('time') || userMessage.includes('date')) {
        const now = new Date();
        return `The current time is ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
    } else {
        return 'Sorry, I didn\'t understand that. Can you try asking something else?';
    }
}

// Event listener for sending message when clicking the button
sendBtn.addEventListener('click', function() {
    const message = userInput.value;
    if (message.trim() !== '') {
        displayUserMessage(message);

        userInput.value = ''; // Clear input field
        showTypingIndicator(); // Show typing indicator

        setTimeout(function() {
            hideTypingIndicator(); // Hide typing indicator
            const botResponse = getBotResponse(message);
            displayBotMessage(botResponse);
        }, 1000); // Simulate delay before bot response
    }
});

// Event listener for sending message when pressing "Enter" key
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
