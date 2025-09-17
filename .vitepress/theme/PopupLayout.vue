<template>
  <div>
    <DefaultTheme.Layout>
      <template #layout-top>
        <transition name="fade">
          <div v-if="showPopup" class="overlay">
            <transition name="popup">
              <div class="popup">
                <span class="close-btn" @click="closePopup">×</span>
                <img
                  src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024"
                  alt="Spade Banner"
                />
                <h2>Join Spade Clipping to earn money by editing!</h2>
                <a
                  href="https://discord.gg/RXWAVYMbmB"
                  target="_blank"
                  class="popup-btn"
                >
                  Join Now!
                </a>
              </div>
            </transition>
          </div>
        </transition>
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted } from 'vue'

const showPopup = ref(false)

onMounted(() => {
  if (!localStorage.getItem('popupDismissed')) {
    showPopup.value = true
  }
})

function closePopup() {
  showPopup.value = false
  localStorage.setItem('popupDismissed', 'true')
}
</script>

<style scoped>
/* Overlay fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Popup zoom-in animation */
.popup-enter-active {
  animation: popupIn 0.5s ease forwards;
}
.popup-leave-active {
  animation: popupOut 0.4s ease forwards;
}

@keyframes popupIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
@keyframes popupOut {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
}

/* Overlay style */
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* Popup box */
.popup {
  background: var(--vp-c-bg, #fff);
  color: var(--vp-c-text-1, #333);
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 480px;
  width: 90%;
  position: relative;
  text-align: center;
  border: 3px solid transparent;
  background-clip: padding-box;
  animation: borderGlow 3s linear infinite;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

@keyframes borderGlow {
  0% { box-shadow: 0 0 6px var(--vp-c-brand); }
  50% { box-shadow: 0 0 20px var(--vp-c-brand); }
  100% { box-shadow: 0 0 6px var(--vp-c-brand); }
}

.popup img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Title */
.popup h2 {
  font-size: 1.2rem;
  margin: 0 0 1rem;
  color: var(--vp-c-text-1, #333);
}

/* Button */
.popup-btn {
  display: inline-block;
  background: var(--vp-c-brand, #3e63dd);
  color: #fff;
  padding: 0.7rem 1.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, background 0.3s;
}
.popup-btn:hover {
  transform: scale(1.08);
  background: var(--vp-c-brand-dark, #3451b2);
}

/* Close button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  transition: transform 0.3s, color 0.3s;
}
.close-btn:hover {
  transform: rotate(90deg);
  color: var(--vp-c-text-1, #000);
}
</style>
