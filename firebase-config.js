// ============================================
// Firebase Configuration & Initialization
// ============================================
// قم بتعبئة معلومات Firebase الخاصة بمشروعك هنا

const firebaseConfig = {
  apiKey: "AIzaSyANISI4x4Nu7M8DATgaUDIqmBxHFib46AM",
  authDomain: "certificates-32cb7.firebaseapp.com",
  databaseURL: "https://certificates-32cb7-default-rtdb.firebaseio.com",
  projectId: "certificates-32cb7",
  storageBucket: "certificates-32cb7.firebasestorage.app",
  messagingSenderId: "389257774600",
  appId: "1:389257774600:web:50855f4b381934221ff3bd"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============================================
// دالة تشغيل صوت التنبيه
// ============================================
function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // نغمة أولى
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.frequency.value = 880;
    osc1.type = 'sine';
    gain1.gain.setValueAtTime(0.5, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.25);

    // نغمة ثانية أعلى
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.frequency.value = 1100;
    osc2.type = 'sine';
    gain2.gain.setValueAtTime(0.5, ctx.currentTime + 0.3);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.55);
    osc2.start(ctx.currentTime + 0.3);
    osc2.stop(ctx.currentTime + 0.55);

    // نغمة ثالثة أعلى
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.frequency.value = 1320;
    osc3.type = 'sine';
    gain3.gain.setValueAtTime(0.5, ctx.currentTime + 0.6);
    gain3.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.9);
    osc3.start(ctx.currentTime + 0.6);
    osc3.stop(ctx.currentTime + 0.9);

  } catch (e) {
    console.log('الصوت غير مدعوم:', e);
  }
}
