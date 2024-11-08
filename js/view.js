class View {
    constructor() {
        this.greetingElement = document.getElementById('greeting');
        this.dateTimeElement = document.getElementById('date-time');
        this.lightBulb = document.getElementById('light-bulb');
        this.lightOff = document.getElementById('light-off');
        this.toggleButton = document.getElementById('toggle-light');
    }

    updateGreeting(greeting, dateTime) {
        this.greetingElement.textContent = greeting;
        this.dateTimeElement.textContent = dateTime;
    }

    toggleLight(isLightOn) {
        if (isLightOn) {
            this.lightBulb.style.display = 'block';
            this.lightOff.style.display = 'none';
            this.toggleButton.style.backgroundImage = "url('https://i.postimg.cc/L8z1RhtB/on.jpg')";
        } else {
            this.lightBulb.style.display = 'none';
            this.lightOff.style.display = 'block';
            this.toggleButton.style.backgroundImage = "url('https://i.postimg.cc/654ZjMTP/off.jpg')";
        }
    }

    onToggleLight(callback) {
        this.toggleButton.addEventListener('click', callback);
    }
}
