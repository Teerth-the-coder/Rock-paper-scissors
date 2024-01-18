

let playerOption = 0;
let botOption = 0;
let playerScore = 0;
let botScore = 0;
function start() {
    document.getElementById("opo").style.display = `inline`;
    document.getElementById("opo2").style.display = `inline`;
    document.getElementById("opo3").style.display = "inline";
    document.getElementById("opo").disabled = false;
    document.getElementById("opo2").disabled = false;
    document.getElementById("opo3").disabled = false;
    document.getElementById("you").src = "https://img.freepik.com/premium-photo/modern-abstract-background_694282-896.jpg";
    document.getElementById("bot").src = "https://img.freepik.com/premium-photo/modern-abstract-background_694282-896.jpg";
}
function rock() {
    playerOption = 1;
    botOption = Math.floor((Math.random() * 3) + 1);
    // document.getElementById("opo").style.opacity = 0;
    // document.getElementById("opo2").style.opacity = 0;
    // document.getElementById("opo3").style.opacity = 0;
    document.getElementById("opo").disabled = true;
    document.getElementById("opo2").disabled = true;
    document.getElementById("opo3").disabled = true;
    
    if (playerOption == 1 && botOption == 1) {
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#000000";
        document.getElementById("eval").innerHTML = `It is a draw`
        document.getElementById("you").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
        document.getElementById("bot").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
    } else if (playerOption == 1 && botOption == 2) {
        playerScore--;
        botScore++;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#FF0000";
        document.getElementById("eval").innerHTML = `You lost`;
        document.getElementById("you").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
        document.getElementById("bot").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
    } else if (playerOption == 1 && botOption == 3) {
        playerScore++;
        botScore--;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#008000";
        document.getElementById("eval").innerHTML = `You won`;
        document.getElementById("you").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
        document.getElementById("bot").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
    }
}
function paper() {
    playerOption = 2;
    botOption = Math.floor((Math.random() * 3) + 1);
    // document.getElementById("opo").style.opacity = 0;
    // document.getElementById("opo2").style.opacity = 0;
    // document.getElementById("opo3").style.opacity = 0;
    document.getElementById("opo").disabled = true;
    document.getElementById("opo2").disabled = true;
    document.getElementById("opo3").disabled = true;
    
    if (playerOption == 2 && botOption == 1) {
        playerScore++;
        botScore--;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#008000";
        document.getElementById("eval").innerHTML = `You won`;
        document.getElementById("you").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
        document.getElementById("bot").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
    } else if (playerOption == 2 && botOption == 2) {
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#000000";
        document.getElementById("eval").innerHTML = `It's a draw`;
        document.getElementById("you").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
        document.getElementById("bot").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
    } else if (playerOption == 2 && botOption == 3) {
        playerScore--;
        botScore++;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#FF0000";
        document.getElementById("eval").innerHTML = `You lost`;
        document.getElementById("you").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
        document.getElementById("bot").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
    }
}
//rock = 1
//paper = 2
//scissors = 3
//https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png
//https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU
function scissors() {
    playerOption = 3;
    botOption = Math.floor((Math.random() * 3) + 1);
    // document.getElementById("opo").style.opacity = 0;
    // document.getElementById("opo2").style.opacity = 0;
    // document.getElementById("opo3").style.opacity = 0;
    document.getElementById("opo").disabled = true;
    document.getElementById("opo2").disabled = true;
    document.getElementById("opo3").disabled = true;
    
    if (playerOption == 3 && botOption == 1) {
        playerScore--;
        botScore++;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#FF0000";
        document.getElementById("eval").innerHTML = `You lost`;
        document.getElementById("you").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
        document.getElementById("bot").src = "https://cdn.icon-icons.com/icons2/390/PNG/512/rock_39413.png";
    } else if (playerOption == 3 && botOption == 2) {
        playerScore++;
        botScore--;
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#008000";
        document.getElementById("eval").innerHTML = `you won`;
        document.getElementById("you").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
        document.getElementById("bot").src = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
    } else if (playerOption == 3 && botOption == 3) {
        document.getElementById("player-score").innerText = `Your Score: ${playerScore}`
        document.getElementById("bot-score").innerText = `Bot Score: ${botScore}`
        document.getElementById("eval").style.color = "#000000";
        document.getElementById("eval").innerHTML = `It's a draw`;
        document.getElementById("you").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
        document.getElementById("bot").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SGOugbk6C36u4GucBrAxllANTKtW_QkIAQ&usqp=CAU";
    }
}