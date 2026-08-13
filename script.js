// برای ساعت زنده (دیجیتال)
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
}

setInterval(updateClock, 1000);
updateClock();