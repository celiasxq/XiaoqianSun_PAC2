document.addEventListener('DOMContentLoaded', function () {
    const chartContainer = document.getElementById('languageChart');
    if (chartContainer) {
        Highcharts.chart('languageChart', {
            chart: { type: 'column', backgroundColor: 'transparent' },
            title: { text: null },
            xAxis: {
                categories: ['Chinese', 'English', 'Spanish'],
                labels: { style: { color: '#666', fontWeight: 'bold' } }
            },
            yAxis: { min: 0, max: 3, visible: false },
            series: [{
                name: 'Level',
                color: '#2bb3a5',
                data: [3, 2, 2],
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        const levels = { 3: 'Native', 2: 'C1' };
                        return levels[this.y];
                    },
                    style: { fontSize: '12px', fontWeight: 'bold', textOutline: 'none' }
                }
            }],
            legend: { enabled: false },
            credits: { enabled: false }
        });
    }
});