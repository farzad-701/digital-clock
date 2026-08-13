function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const strHours = String(hours).padStart(2, '0');

    document.getElementById('time').textContent = `${strHours}:${minutes}`;
    document.querySelector('.ampm').textContent = ampm;

    /* ترفند طلایی برای دقیق‌ترین ثانیه‌شماری!
       به جای setInterval که ممکن است تاخیر داشته باشد، 
       دقیقاً محاسبه می‌کنیم چه زمانی ثانیه بعدی شروع می‌شود */
    const nextTick = 1000 - now.getMilliseconds();
    setTimeout(updateClock, nextTick);
}

updateClock();