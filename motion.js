let position = { x: 0, y: 1.6, z: 0 }; // موقع الكاميرا
let velocity = { x: 0, z: 0 }; // السرعة
let lastTime = 0; // آخر وقت لتحديث البيانات

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", (event) => {
    const now = Date.now();
    const deltaTime = (now - lastTime) / 1000; // الفارق الزمني بالثواني
    lastTime = now;

    const accel = event.accelerationIncludingGravity;
    if (accel) {
      // تصفية البيانات (تجنب الضوضاء)
      const threshold = 0.1;
      const ax = Math.abs(accel.x) > threshold ? accel.x : 0;
      const az = Math.abs(accel.z) > threshold ? accel.z : 0;

      // حساب السرعة والموقع
      velocity.x += ax * deltaTime;
      velocity.z += az * deltaTime;

      position.x += velocity.x * deltaTime;
      position.z += velocity.z * deltaTime;

      // تحديث الكاميرا
      const camera = document.getElementById("camera");
      camera.setAttribute("position", `${position.x} ${position.y} ${position.z}`);
    }
  });
} else {
  alert("جهازك لا يدعم حساسات الحركة.");
}
