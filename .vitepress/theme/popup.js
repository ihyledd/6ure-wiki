// js
import discordBanner from '/assets/SPADE_DISCORD_BANNER.png'; 

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
      <img src="${discordBanner}" alt="Spade Banner" />
      <h2>Earn Money by posting edits to Popular Songs!</h2>
      <a href="https://discord.gg/Wc3Tzs5rTM" target="_blank">
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
