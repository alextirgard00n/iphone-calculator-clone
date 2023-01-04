const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');


// Set up the time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();