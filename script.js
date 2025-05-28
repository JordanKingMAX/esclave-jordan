
const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const userText = input.value.trim();
    chat.innerHTML += `<div>> ${userText}</div>`;
    if (userText === "-MODE_HACKED-") {
      document.body.classList.add("hacked");
      chat.innerHTML += "<div>💀💥 Mode HACKED activé ! Recharge la page pour revenir à la normale 💥💀</div>";
    } else {
      const response = getAIResponse(userText);
      chat.innerHTML += `<div>${response}</div>`;
    }
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
});

function getAIResponse(input) {
  const txt = input.toLowerCase();
  if (txt.includes("triche") || txt.includes("hack") || txt.includes("cheat")) {
    return "😈 Essaie un petit Xray en solo, ou regarde un client moddé comme Wurst ou Sigma… mais attention au ban !";
  }
  return "🤖 Je suis l'esclave fidèle de Jordan Le BG. Pose une autre question ou tape une commande.";
}
