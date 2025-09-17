<style scoped>
:root{
  --accent: #5865f2;
  --primary: #b3b9fc;
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
  background: var(--vp-c-bg, rgba(20,20,30,0.95)); /* fallback to translucent */
  backdrop-filter: blur(12px);
  border: 1px solid var(--vp-c-divider, var(--accent));
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  max-width: 480px;
  width: 90%;
  position: relative;

  /* Glow & elevation */
  box-shadow: 
    0 0 25px var(--glow),
    0 8px 30px rgba(0,0,0,0.6);

  /* animation */
  animation: fadeZoom 0.5s ease-out;
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

/* CTA button */
.cta {
  display:inline-block;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  background: var(--accent);
  color: white;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 0 14px var(--glow);
  transition: transform .18s ease, box-shadow .18s ease;
}
.cta:active { transform: translateY(1px); }
.cta:hover { transform: translateY(-3px); box-shadow: 0 0 24px var(--glow); }

/* CLOSE BUTTON */
.close-btn {
  position: absolute;
  top: calc(10px + env(safe-area-inset-top));
  right: calc(10px + env(safe-area-inset-right));
  z-index: 99999;
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

/* mobile tweaks */
@media (max-width: 520px) {
  .close-btn { top: calc(6px + env(safe-area-inset-top)); right: calc(6px + env(safe-area-inset-right)); font-size: 20px; padding: 10px; min-width: 40px; min-height: 40px; }
  .popup { padding: 0.9rem; border-radius: 12px; }
  .popup-title { font-size: 1rem; }
}

/* animations */
@keyframes fadeZoom {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
