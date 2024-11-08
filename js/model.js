class Model {
    constructor() {
        this.isLightOn = true;
        this.lightData = {
            temperature: '30°C',
            humidity: '28%',
            energyUsage: '250W'
        };
    }

    toggleLight() {
        this.isLightOn = !this.isLightOn;
    }

    getGreeting() {
        const now = new Date();
        const hours = now.getHours();

        let greeting = '';
        if (hours >= 0 && hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours >= 12 && hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const date = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const dateTime = `${time} | ${date}`;

        return { greeting, dateTime };
    }

    getLightStatus() {
        return this.isLightOn;
    }

    getTemperature() {
        return this.lightData.temperature;
    }

    getHumidity() {
        return this.lightData.humidity;
    }

    getEnergyUsage() {
        return this.lightData.energyUsage;
    }
}
