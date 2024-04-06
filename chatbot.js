let openChatBot = document.getElementById("open-chatbot");
    let chatBot = document.getElementById("chatbot");

    let question1 = document.getElementById("container-chatbot-question-1");
    let question2 = document.getElementById("container-chatbot-question-2");

    let question5 = document.getElementById("container-chatbot-question-5");
    let question6 = document.getElementById("container-chatbot-question-6");
    let question7 = document.getElementById("container-chatbot-question-7");
    let question8 = document.getElementById("container-chatbot-question-8");
    let question9 = document.getElementById("container-chatbot-question-9");

    let question10 = document.getElementById("container-chatbot-question-10");
    let question11 = document.getElementById("container-chatbot-question-11");
    let question12 = document.getElementById("container-chatbot-question-12");
    let question13 = document.getElementById("container-chatbot-question-13");
    let question14 = document.getElementById("container-chatbot-question-14");
    let question15 = document.getElementById("container-chatbot-question-15");


    let chatbotbloc1 = document.getElementById("container-chatbot-bloc-1");
    let chatbotbloc2 = document.getElementById("container-chatbot-bloc-2");
    let chatbotbloc3 = document.getElementById("container-chatbot-bloc-3");

    let closeChatbot = document.getElementById("container-chatbot-close");

    function closeChat () {

        openChatBot.classList.remove("chatbot-none");
        chatBot.classList.add("chatbot-none");
        chatBot.classList.remove("chatbot-open");
        chatbotbloc2.classList.add("chatbot-none");
        chatbotbloc1.classList.remove("chatbot-none");
        chatbotbloc3.classList.add("chatbot-none");

    }

    question5.addEventListener("click", closeChat);
    question6.addEventListener("click", closeChat);
    question7.addEventListener("click", closeChat);
    question8.addEventListener("click", closeChat);
    question9.addEventListener("click", closeChat);
    question10.addEventListener("click", closeChat);
    question11.addEventListener("click", closeChat);
    question12.addEventListener("click", closeChat);
    question13.addEventListener("click", closeChat);
    question14.addEventListener("click", closeChat);
    question15.addEventListener("click", closeChat);
    closeChatbot.addEventListener("click", closeChat);

    let closeChatbot1 = document.getElementById("container-chatbot-close1");
    closeChatbot1.addEventListener("click", closeChat);
    let closeChatbot2 = document.getElementById("container-chatbot-close2");
    closeChatbot2.addEventListener("click", closeChat);

    function openTheChatBot () {

        chatBot.classList.remove("chatbot-none");
        chatBot.classList.add("chatbot-open");
        openChatBot.classList.add("chatbot-none");

    }

    openChatBot.addEventListener("click", openTheChatBot);

    function chatBotNavigate () {

        chatbotbloc1.classList.add("chatbot-none");
        chatbotbloc2.classList.remove("chatbot-none");
        chatbotbloc2.classList.add("container-chatbot-bloc");

    }

    question1.addEventListener("click", chatBotNavigate);

    function chatBotReseau () {

        chatbotbloc1.classList.add("chatbot-none");
        chatbotbloc3.classList.add("container-chatbot-bloc");
        chatbotbloc3.classList.remove("chatbot-none");

    }

    question2.addEventListener("click", chatBotReseau);