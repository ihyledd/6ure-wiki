<template>
  <!-- keep the site's default layout -->
  <DefaultTheme.Layout />

  <!-- POPUP (session-per-tab) -->
  <div
    class="overlay"
    v-if="showPopup"
    @click.self="closePopup"
    role="dialog"
    aria-modal="true"
    aria-label="Promo popup"
  >
    <div class="popup" ref="popup" tabindex="-1">
      <!-- close button is plain text (no FA dependency) so it always renders -->
      <button class="close-btn" @click="closePopup" aria-label="Close popup">✕</button>

      <img
        class="promo-img"
        src="https://cdn.discordapp.com/banners/1353997037145948212/a178108fa6364bd78c7d1c76eaba8f17.webp?size=1024"
        alt="Spade Banner"
      />

      <h2 class="popup-title">Join Spade Clipping to earn money by editing!</h2>

      <div class="actions">
        <a :href="inviteLink" target="_blank" rel="noopener noreferrer" @click.prevent="joinClicked" class="cta">
          Join Now!
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* --- CONFIG: replace these with your actual links --- */
const inviteLink = 'https://discord.gg/RXWAVYMbmB'
const webhookUrl = 'https://discord.com/api/webhooks/1417826990559461407/Zi0mA3PnzHZpJgRYX2olngFHC-x_v1wX5sCLC_l4CQkl7DigqcYoYyAvxJX_fuZq3DD9'
/* ---------------------------------------------------- */

const showPopup = ref(false)

function closePopup() {
  showPopup.value = false
  // restore scrolling
  document.body.style.overflow = ''
}

function joinClicked() {
  // close first so user isn't blocked
  closePopup()

  // send webhook ping (best-effort)
  try {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Popup Tracker',
        content: `🚀 A user clicked "Join Now!" on the popup at ${window.location.href}`
      })
    }).catch(err => console.error('Webhook failed', err))
  } catch (e) {
    console.error('Webhook error', e)
  }

  // open invite
  window.open(inviteLink, '_blank')
}

function onKeyDown(e) {
  if (e.key === 'Escape') closePopup()
}

onMounted(() => {
  // session-per-tab: show once per session (tab) only
  if (!sessionStorage.getItem('popupShown')) {
    showPopup.value = true
    sessionStorage.setItem('popupShown', 'true')
    // lock scrolling while modal is open
    document.body.style.overflow = 'hidden'
  }
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
:root{
  --accent: #5865f2;
  --primary: #b3b9fc;
  --bg-popup: #1a1a24;
  --glow: rgba(114,137,218,0.53);
  --text-on-popup: #f0f0f0;
}

/* overlay */
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  -webkit-overflow-scrolling: touch;
}

/* popup card */
.popup {
  position: relative;
  width: min(94%, 480px);
  border-radius: 16px;
  padding: 1.25rem;
  background: var(--bg-popup);
  border: 2px solid var(--accent);
  box-shadow: 0 8px 30px var(--glow), 0 2px 8px rgba(0,0,0,0.35);
  overflow: visible; /* important so close button is not clipped */
  animation: riseIn 0.48s cubic-bezier(.2,.9,.2,1);
}

/* image */
.promo-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  object-fit: cover;
  z-index: 1;
  position: relative;
}

/* title */
.popup-title {
  margin: 0.9rem 0 0;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.15;
}

/* actions */
.actions {
  margin-top: 0.8rem;
  display:flex;
  justify-content:center;
}

/* CTA styled as a button but it's an <a> so it opens in a new tab */
.cta {
  display:inline-block;
  padding: 0.68rem 1.2rem;
  border-radius: 10px;
  background: var(--accent);
  color: white;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(88,101,242,0.18);
  transition: transform .18s ease, box-shadow .18s ease;
}
.cta:active { transform: translateY(1px); }
.cta:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(88,101,242,0.24); }

/* CLOSE BUTTON - make it unmissable on mobile */
.close-btn {
  position: absolute;
  top: calc(10px + env(safe-area-inset-top));
  right: calc(10px + env(safe-area-inset-right));
  z-index: 99999; /* extremely high so it sits above the image */
  border: none;
  background: rgba(0,0,0,0.28);
  color: var(--text-on-popup);
  padding: 8px;
  min-width: 36px;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: transform .24s ease, background .18s ease, color .18s ease;
  -webkit-tap-highlight-color: transparent;
}
.close-btn:hover { transform: rotate(90deg) scale(1.03); background: rgba(0,0,0,0.4); color: #fff; }
.close-btn:active { transform: scale(0.98); }

/* small screens adjustments */
@media (max-width: 520px) {
  .close-btn { top: calc(6px + env(safe-area-inset-top)); right: calc(6px + env(safe-area-inset-right)); font-size: 20px; padding: 10px; min-width: 40px; min-height: 40px; }
  .popup { padding: 0.9rem; border-radius: 12px; }
  .popup-title { font-size: 1rem; }
}

/* small entrance animation */
@keyframes riseIn {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
