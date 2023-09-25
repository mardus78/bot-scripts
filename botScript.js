{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('userInput').addEventListener('keydown', function(e) \{\
    if (e.keyCode === 13) \{  // checks if the pressed key is "Enter"\
        sendMessage();\
    \}\
\});\
\
function sendMessage() \{\
    let input = document.getElementById('userInput').value;\
    let chatHistory = document.getElementById('chatHistory');\
\
    // Display user message\
    chatHistory.innerHTML += '<div>User: ' + input + '</div>';\
\
    // Simple bot response logic\
    if (input.toLowerCase().includes('name')) \{\
        chatHistory.innerHTML += '<div>Bot: What is your name?</div>';\
    \} else if (input.toLowerCase().includes('email')) \{\
        chatHistory.innerHTML += '<div>Bot: What is your email address?</div>';\
    \} else \{\
        chatHistory.innerHTML += '<div>Bot: I didn\\'t understand that. Please provide your name or email.</div>';\
    \}\
\
    // Send data to the server\
    fetch('http://localhost:3000/send-email', \{\
        method: 'POST',\
        headers: \{\
            'Content-Type': 'application/json'\
        \},\
        body: JSON.stringify(\{ message: input \})\
    \});\
\
    // Clear the input field\
    document.getElementById('userInput').value = '';\
\}\
}
