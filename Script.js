const tools = [
  { name: "ChatGPT", icon: "chatgpt.png", link: "https://chat.openai.com" },
  { name: "Gemini", icon: "gemini.png", link: "https://gemini.google.com" },
  { name: "Claude", icon: "claude.png", link: "https://claude.ai" },
  { name: "Perplexity", icon: "perplexity.png", link: "https://www.perplexity.ai" },
  { name: "Bard", icon: "bard.png", link: "https://bard.google.com" },
  { name: "Bing", icon: "bing.png", link: "https://www.bing.com/chat" },
  { name: "You.com", icon: "youcom.png", link: "https://you.com" },
  { name: "Phind", icon: "phind.png", link: "https://www.phind.com" },
  { name: "WriteSonic", icon: "writesonic.png", link: "https://writesonic.com" },
  { name: "GrokAI", icon: "grokai.png", link: "https://x.com/grok" },
  { name: "DeepSeek", icon: "deepseek.png", link: "https://deepseek.com" },
  { name: "OpenRouter", icon: "openrouter.png", link: "https://openrouter.ai" },
];

const circle = document.getElementById('ai-circle');
const radius = 120; // adjust as needed

tools.forEach((tool, index) => {
  const angle = (index / tools.length) * (2 * Math.PI);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  const icon = document.createElement('div');
  icon.className = 'ai-icon';
  icon.style.left = 50 + x + 'px';
  icon.style.top = 50 + y + 'px';

  const img = document.createElement('img');
  img.src = 'images/' + tool.icon;
  img.alt = tool.name;

  icon.appendChild(img);
  icon.addEventListener('click', () => {
    window.open(tool.link, '_blank');
  });

  circle.appendChild(icon);
});
