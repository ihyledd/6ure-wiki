<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref } from 'vue'

const showPopup = ref(true)

function closePopup() {
  showPopup.value = false
}
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div v-if="showPopup" class="overlay">
        <div class="popup">
          <span class="close-btn" @click="closePopup">✕</span>
          <img
            src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024"
            alt="Spade Banner"
          />
          <h2>Join Spade Clipping to earn money by editing!</h2>
          <a href="https://discord.gg/YOUR_INVITE" target="_blank">
            <button>Join Now!</button>
          </a>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(14,14,16,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.popup {
  position: relative;
  background: #1a1a24;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 420px;
  box-shadow: 0 0 20px #7289da88;
  animation: riseIn 0.8s ease;
}
.popup img {
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}
.popup h2 {
  color: #f0f0f0;
  margin-bottom: 1rem;
}
.popup button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  background: #5865f2;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}
.popup button:hover {
  background: #4752c4;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.3rem;
  cursor: pointer;
  color: #ccc;
}
@keyframes riseIn {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
</style>
