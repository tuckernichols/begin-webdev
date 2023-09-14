function updating_time () {
    const currentTimeElement = document.getElementById('current-time');

    currentTimeElement.textContent = `changed yay`;
}




updating_time()
setInterval(updateTime, 1000);
