const tools = [
  { name: "ChatGPT", icon: "images/chatgpt.png", url: "https://chat.openai.com" },
  { name: "Gemini", icon: "images/gemini.png", url: "https://gemini.google.com" },
  { name: "Claude", icon: "images/claude.png", url: "https://claude.ai" },
  { name: "Perplexity", icon: "images/perplexity.png", url: "https://www.perplexity.ai" },
  { name: "GrokAI", icon: "images/grok.png", url: "https://x.ai" },
  { name: "You.com", icon: "images/youcom.png", url: "https://you.com" },
  { name: "Bing AI", icon: "images/bing.png", url: "https://www.bing.com/chat" },
  { name: "Phind", icon: "images/phind.png", url: "https://www.phind.com" },
  { name: "DeepSeek", icon: "images/deepseek.png", url: "https://deepseek.com" },
  { name: "OpenRouter", icon: "images/openrouter.png", url: "https://openrouter.ai" },
  { name: "WriteSonic", icon: "images/writesonic.png", url: "https://writesonic.com" },
  { name: "Bard", icon: "images/bard.png", url: "https://bard.google.com" }
];

const aiCircle = document.getElementById("aiCircle");
const loader = document.getElementById("loader");

tools.forEach((tool, i) => {
  const angle = (i / tools.length) * 2 * Math.PI;
  const x = 120 + 120 * Math.cos(angle);
  const y = 120 + 120 * Math.sin(angle);

  const a = document.createElement("a");
  a.href = "#";
  a.style.left = `${x}px`;
  a.style.top = `${y}px`;

  const img = document.createElement("img");
  img.src = tool.icon;
  img.alt = tool.name;
  a.appendChild(img);

  a.onclick = (e) => {
    e.preventDefault();
    loader.style.display = "flex";
    setTimeout(() => {
      window.location.href = tool.url;
    }, 1500);
  };

  aiCircle.appendChild(a);
});
