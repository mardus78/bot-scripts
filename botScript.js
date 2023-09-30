function sendMessage() {
    let input = document.getElementById('userInput').value;
    let chatHistory = document.getElementById('chatHistory');

    // Display user message
    chatHistory.innerHTML += '<div>User: ' + input + '</div>';

    // Call Wit.ai API
    fetch('https://api.wit.ai/message?v=20230927&q=' + encodeURIComponent(input), {
        headers: {
            'Authorization': 'Bearer RKEK5XAE5PDHHJZHYU57LTIQM2ANSG4S'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process the Wit.ai response and determine the reply
        let reply = processWitResponse(data);
        chatHistory.innerHTML += '<div>Bot: ' + reply + '</div>';
    })
    .catch(error => {
        console.error('Error calling Wit.ai:', error);
        chatHistory.innerHTML += '<div>Bot: Sorry, I had trouble processing that. Please try again.</div>';
    });

    // Clear the input field
    document.getElementById('userInput').value = '';
}

function processWitResponse(data) {
    // Here, you'll extract information from the Wit.ai response and determine the bot's reply.
    // For now, let's just return the first intent's name as a placeholder.
    if (data.intents && data.intents.length > 0) {
        return data.intents[0].name;
    } else {
        return "I'm not sure how to respond to that.";
    }
}





