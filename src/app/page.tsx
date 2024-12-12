'use client'

import Image from 'next/image'
import ARG from '$/public/images/ARG.png'
import USA from '$/public/images/USA.png'
import useDollars from '$/hooks/useDollars'
import { IoIosSwap } from 'react-icons/io'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { data } from '$/extra/config'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

enum SWITCH {
    USA, ARG
}

export default function Page() {
    const dollars = useDollars()

    const [to, setTo] = useState<SWITCH>(SWITCH.ARG)
    const [tabs, setTabs] = useState('')

    if (!dollars) return 

    return (
        <>
            <div className={'flex flex-col flex-1 w-screen h-screen justify-center items-center content-center bg-white'}>
                <div className={'flex flex-col absolute top-1/4 gap-2 w-4/5 h-1/2'}>
                    <div className={'text-darkGray flex flex-row gap-3 items-center content-center'}>
                        <b>1 USD</b>

                        <Select>
                            <SelectTrigger className={'outline-none w-32'}>
                                <SelectValue placeholder={'Oficial'}></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {dollars.map((dollar, index) => (
                                    <SelectItem key={index} value={dollar.casa}>{dollar.nombre}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <span>equivale a</span>
                    </div>

                    <div className={'flex flex-row justify-between items-center content-center'}>
                        <div className={'flex flex-row'}>
                            <Image
                                src={USA}
                                alt={'USA'}
                                width={500}
                                height={500}
                                className={'rounded-full w-8 border-2 border-white h-8'}
                            />
                            <Image
                                src={ARG}
                                alt={'ARG'}
                                width={500}
                                height={500}
                                className={'-mx-3 rounded-full w-8 border-2 border-white h-8'}
                            />
                        </div>

                        <p className={'font-bold mr-auto ml-7 text-dark text-lg'}>1052,86 ARS</p>

                        <button onClick={() => {
                            to === SWITCH.ARG ? setTo(SWITCH.USA) : setTo(SWITCH.ARG)
                        }} className={'px-2 py-2 rounded-full border border-light'}>
                            <IoIosSwap size={22.5} className={'text-darkgray'} />
                        </button>
                    </div>

                    <p className={'text-normalGray'}>Actualizado hace 32 segundos</p>
                </div>

                <ReactApexChart type={'area'} series={data.series} options={data.options} />

                <Tabs onValueChange={(value) => {
                    setTabs(value)
                }} defaultValue={'1d'}>
                    <TabsList>
                        <TabsTrigger value={'1d'}>1d</TabsTrigger>
                        <TabsTrigger value={'1w'}>1w</TabsTrigger>
                        <TabsTrigger value={'1m'}>1m</TabsTrigger>
                        <TabsTrigger value={'1y'}>1y</TabsTrigger>
                        <TabsTrigger value={'All'}>All</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </> 
    )
}