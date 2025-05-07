function chat() {
  const input = document.getElementById("chat-input").value;
  const log = document.getElementById("chat-log");
  const response = getResponse(input.toLowerCase());

  log.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  log.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  document.getElementById("chat-input").value = "";
}

function getResponse(input) {
  if (input.includes("skills")) return "I have experience in Python, HTML, CSS, JavaScript, and cybersecurity.";
  if (input.includes("projects")) return "I’ve worked on ransomware detection and chatbot projects. Check out my Projects section!";
  if (input.includes("experience")) return "I’ve had internships and freelance work in cybersecurity.";
  return "I'm still learning. Try asking something else!";
}
