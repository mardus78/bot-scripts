document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot UI elements
    const chatBox = document.getElementById('chatBox');
    const chatToggle = document.getElementById('chatToggle');
    const chatHistory = document.getElementById('chatHistory');

    chatToggle.addEventListener('click', function() {
        chatBox.classList.toggle('open');
    });

    document.getElementById('sendButton').addEventListener('click', sendMessage);
});

function sendMessage() {
    let input = document.getElementById('userInput').value;

    // Display user message
    document.getElementById('chatHistory').innerHTML += '<div>User: ' + input + '</div>';

    // Call Wit.ai API
    fetch('https://api.wit.ai/message?v=20230927&q=' + encodeURIComponent(input), {
        headers: {
            'Authorization': 'Bearer QM6VVEVRHPGQQ2XONVU4JNQ6HSJWLEDK' // Updated Token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let reply = processWitResponse(data);
        document.getElementById('chatHistory').innerHTML += '<div>Bot: ' + reply + '</div>';
    })
    .catch(error => {
        console.error('Error calling Wit.ai:', error);
        document.getElementById('chatHistory').innerHTML += '<div>Bot: Sorry, I had trouble processing that. Please try again.</div>';
    });

    // Clear the input field
    document.getElementById('userInput').value = '';
}

function processWitResponse(data) {
    if (data.intents && data.intents.length > 0) {
        return data.intents[0].name;
    } else {
        return "I'm not sure how to respond to that.";
    }
}
