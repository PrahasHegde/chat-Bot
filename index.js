//simple ChatBot using node js 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Chatbot: Hi there! How can I help you?\nYou: ', (response) => {
    const userMessage = response.toLowerCase();

    if (userMessage.includes('hello')) {
        console.log("Chatbot: Hello! How can I assist you today?");
    } else if (userMessage.includes('how are you')) {
        console.log("Chatbot: I'm just a chatbot, but I'm here to help!");
    } else if (userMessage.includes('bye')) {
        console.log("Chatbot: Goodbye! Feel free to return if you have more questions.");
    } else if (userMessage.includes('you are an idiot')) {
        console.log("Chatbot: hahahah hoooo ahah");
    }
    else if (userMessage.includes('whats the weather like today?')) {
        console.log("Chatbot: The weathers fantastic .its nice ,sunny and pleasent like you");
    }

    else {
        console.log("Chatbot: I'm sorry, I didn't understand that. Can you please rephrase your question?");
    }

    rl.close();
});
