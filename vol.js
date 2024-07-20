const projections = {
    title: "Sales Projections",
    hasAxes: true,
    data: [
        { year: 2021, sales: 100 },
        { year: 2022, sales: 150 },
        { year: 2023, sales: 200 }
    ],
    render: function() {
        if (this.title || this.hasAxes) {
            console.log(`Rendering chart: ${this.title}`);
            // Logic to render the chart with axes
        } else {
            console.log("Rendering chart without title or axes");
            // Logic to render the chart without axes
        }

        console.log("Data:", this.data);
        // Additional rendering logic here...
    }
};

// Example usage
projections.render();
