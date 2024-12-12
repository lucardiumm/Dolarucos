export const config = {
    apis: {
        estacionesTrenes: 'https://api-servicios.sofse.gob.ar/v1/arribos/estacion/',
    }
}

export const list = [
    {
        name: '1d',
    },
    {
        name: '1w',
    },
    {
        name: '1m',
    },
    {
        name: '1y',
    },
    {
        name: 'All',
    },
]

export const dollarsList = [
    {
        tipo: 'oficial',
    },
    {
        tipo: 'blue',
    },
    {
        tipo: 'contadoconliqui',
    },
    {
        tipo: 'mayorista',
    },
    {
        tipo: 'cripto',
    },
    {
        tipo: 'bolsa',
    },
    {
        tipo: 'tarjeta',
    },
]

export const data = {
    series: [
        {
            name: 'PRECIO',
            data: [
                [1327359600000,30.95],
                [1327446000000,31.34],
                [1327532400000,31.18],
                [1327618800000,31.05],
                [1327878000000,31.00],
                [1327964400000,30.95],
                [1328050800000,31.24],
                [1328137200000,31.29],
                [1328223600000,31.85],
                [1328482800000,31.86],
                [1328569200000,32.28],
                [1328655600000,32.10],
                [1328742000000,32.65],
                [1328828400000,32.21],
                [1329087600000,32.35],
            ],
        },
    ],
    options: {
        chart: {
            type: 'area',
            zoom: {
                enabled: false,
            },
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            show: false,
            opposite: false,
        }
    }
}