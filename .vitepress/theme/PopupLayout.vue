<template>
  <DefaultTheme.Layout />

  <!-- POPUP BANNER -->
  <div class="overlay" v-if="showPopup">
    <div class="popup">
      <span class="close-btn" @click="closePopup">
        <i class="fas fa-times"></i>
      </span>
      <img
        src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024"
        alt="Spade Banner"
      />
      <h2>Join Spade Clipping to earn money by editing!</h2>
      <a :href="inviteLink" target="_blank" @click.prevent="joinClicked">
        <button>Join Now!</button>
      </a>
    </div>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted } from 'vue'

// your Discord invite link
const inviteLink = 'https://discord.gg/RXWAVYMbmB'

// webhook URL (replace with your real webhook!)
const webhookUrl = 'https://discord.com/api/webhooks/1417826990559461407/Zi0mA3PnzHZpJgRYX2olngFHC-x_v1wX5sCLC_l4CQkl7DigqcYoYyAvxJX_fuZq3DD9'

const showPopup = ref(true)

function closePopup() {
  showPopup.value = false
  document.body.style.overflow = 'auto'
}

function joinClicked() {
  // always close the popup
  closePopup()

  // send webhook ping
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'Popup Tracker',
      content: `🚀 A user clicked "Join Now!" on the popup at ${window.location.href}`
    })
  }).catch(err => console.error('Webhook failed', err))

  // open invite link
  window.open(inviteLink, '_blank')
}

onMounted(() => {
  // check sessionStorage
  if (!sessionStorage.getItem("popupShown")) {
    showPopup.value = true
    document.body.style.overflow = 'hidden'
    sessionStorage.setItem("popupShown", "true")
  }
})
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css');

:root {
  --bg: #0e0e10;
  --primary: #b3b9fc;
  --accent: #5865f2;
  --text: #f0f0f0;
  --glow: #7289da88;
}

.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.5s ease;
}

.popup {
  background: #1a1a24;
  border: 2px solid var(--accent);
  border-radius: 16px;
  box-shadow: 0 0 20px var(--glow);
  padding: 1.5rem;
  text-align: center;
  max-width: 480px;
  width: 90%;
  position: relative;
  animation: riseIn 0.6s ease-out;
}

.popup img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.popup h2 {
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.popup button {
  background: var(--accent);
  color: white;
  padding: 0.7rem 1.3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.2s ease;
}
.popup button:hover { opacity: 1; transform: scale(1.05); }

.close-btn {
  position: absolute;
  top: 10px; right: 12px;
  font-size: 1.2rem;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s ease;
}
.close-btn:hover { color: white; }

@keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
@keyframes riseIn {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
</style>
