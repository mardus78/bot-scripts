document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {  // checks if the pressed key is "Enter"
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById('userInput').value;
    let chatHistory = document.getElementById('chatHistory');

    // Display user message
    chatHistory.innerHTML += '<div>User: ' + input + '</div>';

    // Simple bot response logic
    if (input.toLowerCase().includes('name')) {
        chatHistory.innerHTML += '<div>Bot: What is your name?</div>';
    } else if (input.toLowerCase().includes('email')) {
        chatHistory.innerHTML += '<div>Bot: What is your email address?</div>';
    } else {
        chatHistory.innerHTML += '<div>Bot: I didn\'t understand that. Please provide your name or email.</div>';
    }

    // Send data to the server
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
    });

    // Clear the input field
    document.getElementById('userInput').value = '';
}

// This line should be at the very end:
document.getElementById('sendBotMessage').addEventListener('click', sendMessage);

