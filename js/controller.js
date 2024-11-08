class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // Initial View Update
        this.updateView();

        // Setup listener for light toggle
        this.view.onToggleLight(() => this.toggleLight());
    }

    toggleLight() {
        this.model.toggleLight();
        this.view.toggleLight(this.model.getLightStatus());
    }

    updateView() {
        const { greeting, dateTime } = this.model.getGreeting();
        this.view.updateGreeting(greeting, dateTime);
        this.view.toggleLight(this.model.getLightStatus());

        // Update energy usage doughnut chart
        this.updateEnergyChart();
    }

    updateEnergyChart() {
        const ctx = document.getElementById('energyChart').getContext('2d');
        const usedEnergy = parseInt(this.model.getEnergyUsage()); // Get energy usage from the model

        // Update the energy usage value display
        document.getElementById("energyUsageValue").textContent = `${usedEnergy} W`;

        const data = {
            labels: ['Used', 'Remaining', 'Excess'],
            datasets: [{
                data: [usedEnergy, 500 - usedEnergy, 250], // Example segments
                backgroundColor: ['#FFD700', '#36A2EB', '#FF6384'], // Segment colors
                hoverBackgroundColor: ['#FFD700', '#36A2EB', '#FF6384'],
                borderWidth: 2
            }]
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                cutout: '75%',  // Inner circle size
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw} W`;
                            }
                        }
                    }
                }
            }
        });
    }
}
