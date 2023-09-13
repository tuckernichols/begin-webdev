function updating_time () {
    const currentTimeElement = document.getElementById('current-time');

    currentTimeElement.textContent = `Current Time: 12:44`;
}




updating_time()
setInterval(updateTime, 1000);
