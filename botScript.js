function sendMessage() {
    let input = document.getElementById('userInput').value;
    let chatHistory = document.getElementById('chatHistory');

    // Display user message
    chatHistory.innerHTML += '<div>User: ' + input + '</div>';

    // Bot logic for Cleaning Contractors
    if (input.toLowerCase().includes('how can i join')) {
        chatHistory.innerHTML += '<div>Bot: To join our platform, you\'ll need to sign up, complete your profile, and upload relevant business documents like insurance and WSIB. Once verified, you\'ll be listed and potential clients can view your services and reviews.</div>';
    } else if (input.toLowerCase().includes('fee to join')) {
        chatHistory.innerHTML += '<div>Bot: We offer both free and premium listings. The premium listing comes with added benefits like featured placement. Would you like more details on the pricing?</div>';
    } else if (input.toLowerCase().includes('get reviews')) {
        chatHistory.innerHTML += '<div>Bot: Customers who avail your services through our platform can leave reviews. Encourage your clients to provide feedback to build your reputation.</div>';
    }

    // Bot logic for Visitors
    else if (input.toLowerCase().includes('find a cleaner')) {
        chatHistory.innerHTML += '<div>Bot: You can browse through our list of verified cleaning contractors, view their profiles, services offered, and reviews to make an informed choice.</div>';
    } else if (input.toLowerCase().includes('cleaners verified')) {
        chatHistory.innerHTML += '<div>Bot: Yes, all our cleaning contractors are required to upload their business documents, which we verify. You can also view reviews from other customers for added assurance.</div>';
    } else if (input.toLowerCase().includes('type of cleaning')) {
        chatHistory.innerHTML += '<div>Bot: We have cleaners specializing in residential, commercial, and deep cleaning. What type of cleaning service are you looking for?</div>';
    }

    // ... (You can continue to expand the logic based on more scenarios)

    // Fallback response
    else {
        chatHistory.innerHTML += '<div>Bot: I\'m sorry, I didn\'t understand that. Can you rephrase or provide more details?</div>';
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
}


