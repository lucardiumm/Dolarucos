'use client'

import ReactApexChart from 'react-apexcharts'
import { options, series } from '$/src/Constants/config'

export default function Chart() {
    return (
        <ReactApexChart type={'area'} series={series} options={options} />
    )
}