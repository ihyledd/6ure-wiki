<template>
  <!-- keep the default theme layout -->
  <DefaultTheme.Layout />

  <!-- overlay + popup (rendered as a sibling so it sits on top) -->
  <transition name="overlay-fade" appear>
    <div v-if="showPopup" class="overlay" role="dialog" aria-modal="true" aria-label="Promo popup">
      <transition name="popup-scale" appear>
        <div class="popup-wrapper" role="document" tabindex="-1" ref="popupWrapper">
          <div class="popup-inner">
            <button class="close-btn" @click="closePopup" aria-label="Close popup">✕</button>

            <!-- banner image -->
            <img
              class="promo-img"
              src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024"
              alt="Spade Clipping banner"
            />

            <h2 class="popup-title">Join Spade Clipping to earn money by editing!</h2>

            <div class="actions">
              <!-- replace YOUR_INVITE with your actual discord invite -->
              <a
                class="popup-btn"
                href="https://discord.gg/YOUR_INVITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now!
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showPopup = ref(false)

function closePopup() {
  showPopup.value = false
}

// allow closing via Escape key
function onKeyDown(e) {
  if (e.key === 'Escape') closePopup()
}

onMounted(() => {
  // show popup on every page load
  // setting this in onMounted ensures the transition/animations trigger
  showPopup.value = true

  // listen for Escape
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<style>
/* ---------- TRANSITIONS ---------- */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 320ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

.popup-scale-enter-active {
  animation: popupIn 360ms cubic-bezier(.2,.9,.2,1) both;
}
.popup-scale-leave-active {
  animation: popupOut 260ms cubic-bezier(.4,.0,.2,1) both;
}

@keyframes popupIn {
  from { transform: translateY(10px) scale(0.96); opacity: 0; }
  to   { transform: translateY(0) scale(1);     opacity: 1; }
}
@keyframes popupOut {
  from { transform: translateY(0) scale(1);     opacity: 1; }
  to   { transform: translateY(10px) scale(0.96); opacity: 0; }
}

/* ---------- OVERLAY ---------- */
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(2px);
}

/* ---------- ANIMATED GRADIENT BORDER WRAPPER ---------- */
/* This wrapper holds the animated gradient border; inner box is the actual popup card */
.popup-wrapper {
  border-radius: 16px;
  padding: 4px; /* thickness of the gradient border */
  background: linear-gradient(90deg,
    var(--vp-c-brand, #3e63dd) 0%,
    #84a0ff 30%,
    #ff8a66 60%,
    var(--vp-c-brand, #3e63dd) 100%);
  background-size: 300% 300%;
  animation: gradientShift 5.5s linear infinite;
  box-shadow: 0 8px 30px rgba(62,99,221,0.12), 0 2px 8px rgba(0,0,0,0.25);
  max-width: 520px;
  width: min(94%, 520px);
}

/* inner popup content that matches VitePress default card (light/dark friendly) */
.popup-inner {
  border-radius: 12px;
  background: var(--vp-c-bg, #fff);
  color: var(--vp-c-text-1, #333);
  padding: 1.25rem 1.25rem 1.6rem 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  overflow: hidden;
}

/* gradient motion */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* glowing pulse for the wrapper (subtle) */
.popup-wrapper {
  animation: gradientShift 5.5s linear infinite, wrapperGlow 3.8s ease-in-out infinite;
}
@keyframes wrapperGlow {
  0% { box-shadow: 0 6px 18px rgba(62,99,221,0.06); }
  50% { box-shadow: 0 10px 40px rgba(62,99,221,0.12); }
  100% { box-shadow: 0 6px 18px rgba(62,99,221,0.06); }
}

/* ---------- CONTENT ---------- */
.promo-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  object-fit: cover;
}

/* title (uses VitePress text var if available) */
.popup-title {
  margin: 0;
  font-size: 1.05rem;
  text-align: center;
  color: var(--vp-c-text-1, #222);
  line-height: 1.2;
  font-weight: 600;
}

/* actions area */
.actions {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4px;
}

/* primary CTA */
.popup-btn {
  display: inline-block;
  background: var(--vp-c-brand, #3e63dd);
  color: #fff;
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 200ms cubic-bezier(.2,.9,.2,1), box-shadow 200ms;
  will-change: transform;
  box-shadow: 0 6px 18px rgba(62,99,221,0.18);
}
.popup-btn:hover,
.popup-btn:focus {
  transform: translateY(-4px) scale(1.06); /* grows smoothly */
  box-shadow: 0 14px 34px rgba(62,99,221,0.22);
  outline: none;
}

/* close button (top-right) */
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--vp-c-text-2, #666);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: transform 260ms ease, color 200ms ease;
}
.close-btn:hover {
  transform: rotate(90deg) scale(1.05); /* rotation on hover */
  color: var(--vp-c-text-1, #111);
}

/* accessibility focus */
.close-btn:focus,
.popup-btn:focus {
  box-shadow: 0 0 0 4px rgba(62,99,221,0.12);
}

/* responsive tweaks */
@media (max-width: 520px) {
  .popup-title { font-size: 1rem; }
  .popup-wrapper { padding: 3px; }
  .popup-inner { padding: 1rem; }
  .close-btn { top: 6px; right: 6px; }
}
</style>
