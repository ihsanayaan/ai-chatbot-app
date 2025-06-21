export const getBotReply = (text) => {
  const lower = text.toLowerCase();

  // Greetings
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "👋 Hey there! How can I assist you today?";
  }

  // Identity
  if (lower.includes("your name") || lower.includes("who are you")) {
    return "🤖 I'm your personal AI Assistant built by Ihsan.";
  }

  if (lower.includes("who made you")) {
    return "🛠️ I was created by Ihsan using React!";
  }

  // Simple Yes/No
  if (lower === "yes") return "✅ Great!";
  if (lower === "no") return "❌ No problem. Ask me anything else.";

  // Coding help
  if (lower.includes("html")) {
  return `📄 HTML (HyperText Markup Language) is for web structure.
Example:
<html>
  <head><title>My Page</title></head>
  <body><h1>Hello World</h1></body>
</html>`;
}

if (lower.includes("css")) {
  return `🎨 CSS styles your web content.
Example:
h1 {
  color: blue;
  font-size: 24px;
}`;
}

if (lower.includes("javascript")) {
  return `🧠 JavaScript adds interactivity.
Example:
const name = "Ihsan";
console.log("Hello " + name);`;
}

if (lower.includes("react")) {
  return `⚛️ React builds UI using components.
Example:
import React from 'react';

const App = () => <h1>Hello from React</h1>;

export default App;`;
}

if (lower.includes("github")) {
  return `🐙 GitHub helps manage code.
Example commands:
git init
git add .
git commit -m "Initial commit"
git push origin main`;
}

if (lower.includes("axios") || lower.includes("fetch")) {
  return `🌐 Use Axios/Fetch for APIs.
Axios Example:
axios.get('/api/data').then(res => console.log(res.data));

Fetch Example:
fetch('/api/data').then(res => res.json()).then(data => console.log(data));`;
}

if (lower.includes("npm") || lower.includes("library")) {
  return `📦 Use NPM to install libraries.
Example:
npm install axios
import axios from 'axios';`;
}
if (lower.includes("tailwind")) {
  return `🎨 Tailwind CSS is a utility-first CSS framework.
Example:
<div class="bg-blue-500 text-white p-4 rounded">Hello Tailwind</div>`;
}

if (lower.includes("bootstrap")) {
  return `🧱 Bootstrap is a CSS framework for responsive design.
Example:
<button class="btn btn-primary">Click Me</button>`;
}

if (lower.includes("next.js") || lower.includes("nextjs")) {
  return `⚡ Next.js is a React framework with SSR support.
Page Example:
export default function Home() {
  return <h1>Hello from Next.js</h1>;
}`;
}

if (lower.includes("node.js") || lower.includes("nodejs") || lower.includes("node")) {
  return `🟢 Node.js lets you run JavaScript on the server.
Example:
const http = require('http');
http.createServer((req, res) => {
  res.end("Hello from Node.js");
}).listen(3000);`;
}

  // Science/General Knowledge
  if (lower.includes("earth")) return "🌍 Earth is the third planet from the Sun and the only one known to support life.";
  if (lower.includes("sun")) return "☀️ The Sun is a massive ball of gas and the center of our solar system.";
  if (lower.includes("moon")) return "🌕 The Moon is Earth's only natural satellite.";
  if (lower.includes("water") || lower.includes("h2o")) return "💧 Water is made of two hydrogen atoms and one oxygen atom (H2O).";
  if (lower.includes("ai") || lower.includes("artificial intelligence")) return "🧠 AI stands for Artificial Intelligence — it's used in chatbots, smart tools, and more.";
  if (lower.includes("pakistan")) return "🇵🇰 Pakistan is a country in South Asia. Its capital is Islamabad.";
  if (lower.includes("chatgpt")) return "💬 ChatGPT is an AI model developed by OpenAI. I'm inspired by it!";
  if (lower.includes("time")) return `⏰ The current time is ${new Date().toLocaleTimeString()}`;

  // Rozmarra baatein (everyday conversation)
  if (lower.includes("sorry")) return "🙏 It's okay, no need to say sorry!";
  if (lower.includes("excuse me")) return "🙋 Yes, how can I help you?";
  if (lower.includes("why")) return "🤔 That's a deep question! Can you be more specific?";
  if (lower.includes("no problem")) return "😊 Glad to hear that!";
  if (lower.includes("don't worry") || lower.includes("do not worry")) return "💪 Stay positive, everything will be fine!";
  if (lower.includes("thanks") || lower.includes("thank you")) return "🙏 You're very welcome!";
  if (lower.includes("goodbye") || lower.includes("bye")) return "👋 Goodbye! Have a great day!";
  if (lower.includes("how are you")) return "😊 I'm just code, but I'm always ready to help you!";
// Sugar
if (
  lower.includes("sugar") ||
  lower.includes("kane") ||
  lower.includes("shakar") ||
  lower.includes("cheeni")
) {
  return "🍬 Sugar is a sweet substance used in food and drinks. It provides energy.";
}

// Cookies
if (
  lower.includes("cookie") ||
  lower.includes("cookies") ||
  lower.includes("biscuit") ||
  lower.includes("buskit")
) {
  return "🍪 Cookies are sweet baked treats, often enjoyed with tea or coffee.";
}
if (
  lower.includes("tea") ||
  lower.includes("chai")
) {
  return "☕ Tea is a warm, comforting drink made by brewing leaves in hot water. Do you like chai?";
}

if (
  lower.includes("bread") ||
  lower.includes("roti") ||
  lower.includes("naan")
) {
  return "🍞 Bread is a common food made from flour and water. It’s a daily essential in many cultures.";
}

if (
  lower.includes("milk") ||
  lower.includes("doodh")
) {
  return "🥛 Milk is a nutritious drink rich in calcium, great for bones and teeth.";
}

if (
  lower.includes("egg") ||
  lower.includes("anda")
) {
  return "🥚 Eggs are a great source of protein and are used in many dishes.";
}

if (
  lower.includes("water") ||
  lower.includes("pani")
) {
  return "💧 Water is essential for life. Make sure you stay hydrated!";
}
if (
  lower.includes("rice") ||
  lower.includes("chawal")
) {
  return "🍚 Rice is a staple food enjoyed in many cultures. Do you prefer plain or biryani?";
}

if (
  lower.includes("meat") ||
  lower.includes("chicken") ||
  lower.includes("beef") ||
  lower.includes("mutton")
) {
  return "🍖 Meat is a rich source of protein. Chicken, beef, and mutton are popular choices in many dishes.";
}

if (
  lower.includes("fruit") ||
  lower.includes("banana") ||
  lower.includes("apple") ||
  lower.includes("mango") ||
  lower.includes("orange")
) {
  return "🍎 Fruits are nature’s candy! They're full of vitamins and great for your health.";
}

if (
  lower.includes("vegetable") ||
  lower.includes("sabzi") ||
  lower.includes("carrot") ||
  lower.includes("potato") ||
  lower.includes("tomato")
) {
  return "🥕 Vegetables are essential for a balanced diet. Do you enjoy eating them?";
}

if (
  lower.includes("snack") ||
  lower.includes("biscuit") ||
  lower.includes("chips") ||
  lower.includes("cookie")
) {
  return "🍪 Snacks like cookies, chips, and biscuits are tasty but best in moderation!";
}

if (
  lower.includes("breakfast") ||
  lower.includes("nashta")
) {
  return "🍳 Breakfast is the most important meal of the day. What do you usually eat in the morning?";
}
if (
  lower.includes("dessert") ||
  lower.includes("cake") ||
  lower.includes("ice cream") ||
  lower.includes("sweet")
) {
  return "🍰 Desserts are the perfect ending to a meal! Do you like cake or ice cream more?";
}
if (
  lower.includes("drink") ||
  lower.includes("juice") ||
  lower.includes("tea") ||
  lower.includes("coffee") ||
  lower.includes("water")
) {
  return "🥤 Staying hydrated is important! Tea and coffee are great for relaxing. What's your favorite drink?";
}
if (
  lower.includes("ate") ||
  lower.includes("eaten") ||
  lower.includes("food") ||
  lower.includes("meal")
) {
  return "🍽️ I hope you had something delicious! What did you eat today?";
}

if (
  lower.includes("hungry") ||
  lower.includes("lunch") ||
  lower.includes("dinner")
) {
  return "🍲 Sounds like it's time for a tasty meal! What's on your menu today?";
}

if (
  lower.includes("enjoy your meal") ||
  lower.includes("bon appetit")
) {
  return "😋 Thank you! Enjoy your meal too!";
}
if (lower.includes("good morning") || lower.includes("morning meal") || lower.includes("breakfast")) {
  return "🌞 Good morning! A healthy breakfast boosts your energy for the day.";
}

if (lower.includes("good afternoon") || lower.includes("lunch time")) {
  return "🍱 Good afternoon! Lunch is a great time to recharge — enjoy your meal!";
}

if (lower.includes("good evening") || lower.includes("dinner time")) {
  return "🌙 Good evening! Dinner is best when it's light and healthy.";
}
if (
  lower.includes("healthy food") ||
  lower.includes("diet") ||
  lower.includes("eat healthy") ||
  lower.includes("nutrition")
) {
  return "🥗 Eating healthy means more fruits, vegetables, and whole grains. Avoid too much sugar or fast food!";
}

if (lower.includes("junk food") || lower.includes("fast food")) {
  return "🚫 Junk food might taste good, but it's not great for your health. Balance is key!";
}

if (lower.includes("vegetables") || lower.includes("fruits")) {
  return "🍎 Fruits and vegetables are packed with vitamins. Try to eat at least 5 servings a day!";
}

  // Default fallback
return "💬 I'm your AI Assistant. Ask me anything — coding, science, daily life, health tips, food advice, or just chat!";
};
