// إعدادات تتبع الموقع باستخدام الجيروسكوب
if (navigator.geolocation) {
    window.addEventListener('deviceorientation', function(event) {
        const alpha = event.alpha; // الزاوية من الشمال (أفقياً)
        const beta = event.beta;   // الزاوية عمودياً
        const gamma = event.gamma; // الزاوية حول المحور العرضي

        // تحديث الكاميرا بناءً على الاتجاه
        let camera = document.querySelector('#camera');
        camera.setAttribute('rotation', `${beta} ${alpha} ${gamma}`);
    });

    // إضافة تتبع الحركة
    let steps = 0;  // عدد الخطوات
    let lastPosition = { x: 0, y: 0, z: 0 };

    window.addEventListener('devicemotion', function(event) {
        let acceleration = event.acceleration;
        if (acceleration) {
            let moveX = acceleration.x;
            let moveY = acceleration.y;
            let moveZ = acceleration.z;

            // حساب عدد الخطوات بناءً على الحركة (ملاحظة: يجب تعديل الخوارزمية لحساب المسافة الفعلية)
            if (Math.abs(moveX) > 2 || Math.abs(moveY) > 2 || Math.abs(moveZ) > 2) {
                steps++;
                console.log(`عدد الخطوات: ${steps}`);
            }
        }
    });
} else {
    alert("الجهاز لا يدعم تتبع الموقع باستخدام الجيروسكوب.");
}

// الوظيفة لتوجيه المستخدم للمكان المطلوب مثل المطبخ
function navigateToRoom(roomName) {
    // هنا يمكن إضافة الخوارزميات التي تحسب المسار داخل النموذج 3D
    console.log(`التوجيه إلى: ${roomName}`);
}
