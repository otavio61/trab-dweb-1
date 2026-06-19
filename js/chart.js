const ctx = document.getElementById('graficoIngresso');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            '2010','2011','2012','2013','2014',
            '2015','2016','2017','2018','2019','2020'
        ],
        datasets: [
            {
                label: 'Bacharelado',
                backgroundColor: '#1f6d99',
                data: [
                    1340003,
                    1450000,
                    1600000,
                    1750000,
                    1950000,
                    1850000,
                    1900000,
                    1950000,
                    2000000,
                    2062155,
                    2073519
                ]
            },
            {
                label: 'Licenciatura',
                backgroundColor: '#14a8d5',
                data: [
                    452527,
                    470000,
                    500000,
                    520000,
                    570000,
                    550000,
                    560000,
                    620000,
                    700000,
                    731682,
                    695790
                ]
            },
            {
                label: 'Tecnológico',
                backgroundColor: '#84b4cf',
                data: [
                    381885,
                    450000,
                    650000,
                    500000,
                    560000,
                    530000,
                    520000,
                    650000,
                    750000,
                    820711,
                    980164
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Número de ingressos em cursos de graduação por grau acadêmico (2010–2020)',
                font: {
                    size: 14
                }
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    callback: function(value){
                        return value.toLocaleString('pt-BR');
                    }
                }
            }
        }
    }
});
