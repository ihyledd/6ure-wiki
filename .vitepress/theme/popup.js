export default {
  mounted() {
    // Only show once per session
showPopup();
  }
}

function showPopup() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.id = "popupOverlay";
  overlay.innerHTML = `
    <div class="popup" onclick="event.stopPropagation()">
      <span class="close-btn" id="popupClose">&times;</span>
      <img src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024" alt="Spade Banner" />
      <h2>Join Spade Clipping to earn money by editing!</h2>
      <a href="https://discord.gg/RXWAVYMbmB" target="_blank">
        <button>Join Now!</button>
      </a>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  // Close handlers
  const closeBtn = overlay.querySelector("#popupClose");
  closeBtn.addEventListener("click", closePopup);
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "popupOverlay") closePopup();
  });

  function closePopup() {
    overlay.style.animation = "fadeOut 0.4s ease forwards";
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = "auto";
    }, 400);
  }
}
