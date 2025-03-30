window.onload = () => {
    startRayaSymbolsRain(); // Start falling symbols
};
  
// Falling symbols background
function startRayaSymbolsRain() {
    const symbolContainer = document.getElementById("heart-container");
    const symbols = ["☪️", "✨", "🌙", "⭐", "🕌"];
    
    setInterval(() => {
        let symbol = document.createElement("div");
        symbol.classList.add("heart"); // Keeping the class name for CSS compatibility
        
        // Randomly select a symbol
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.innerHTML = randomSymbol;
        
        symbol.style.left = Math.random() * window.innerWidth + "px";
        symbol.style.top = "-50px"; // Ensure it starts above the screen
        symbolContainer.appendChild(symbol);
  
        setTimeout(() => {
            symbol.remove();
        }, 5000);
    }, 300);
}