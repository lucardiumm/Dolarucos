'use client'

import Image from 'next/image'
import ARG from '$/public/images/ARG.png'
import USA from '$/public/images/USA.png'
import useDollars from '$/hooks/useDollars'
import { IoIosSwap } from 'react-icons/io'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { dollarsList, list, options, series } from '$/src/Constants/config'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('@/components/ui/chart'), {
    ssr: false
})

enum SWITCH {
    USA, ARG
}

export default function Page() {
    const dollars = useDollars()

    const [to, setTo] = useState<SWITCH>(SWITCH.USA)
    const [tabs, setTabs] = useState('')
    const [compra, setCompra] = useState(0)
    const [venta, setVenta] = useState(0)
    const [fechaActualizacion, setFechaActualizacion] = useState('')
    const [tipo, setTipo] = useState('oficial')

    useEffect(() => {
        dollarsList.forEach(value => {
            if (tipo === value.tipo) {
                dollars.forEach(item => {
                    if (item.casa === tipo) {
                        setCompra(item.compra)
                        setVenta(item.venta)
                        setFechaActualizacion(item.fechaActualizacion)

                        console.log(tabs)
                    }
                })
            }
        })
    }, [dollars, tipo, tabs])

    if (!dollars) return 

    return (
        <>
            <div className={'flex flex-col flex-1 w-screen h-screen justify-center items-center content-center bg-white'}>
                <div className={'flex flex-col absolute top-1/4 gap-2 w-4/5 h-1/2 md:w-1/4 md:h-1/3'}>
                    <div className={'text-darkGray flex flex-row gap-3 items-center content-center'}>
                        <b>1 USD</b>

                        <Select onValueChange={(value) => {
                            console.log(value)
                            setTipo(value)
                        }}>
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
                                alt={'FLAG'}
                                width={500}
                                height={500}
                                className={'rounded-full w-8 border-2 border-white h-8'}
                            />
                            <Image
                                src={ARG}
                                alt={'FLAG'}
                                width={500}
                                height={500}
                                className={'-mx-3 rounded-full w-8 border-2 border-white h-8'}
                            />
                        </div>

                        <p className={'font-bold mr-auto ml-7 text-dark text-lg'}>{to === SWITCH.ARG ? `${compra} ARS` : `${venta} ARS`}</p>

                        <button onClick={() => {
                            if (to === SWITCH.ARG) {
                                setTo(SWITCH.USA)
                            } else {
                                setTo(SWITCH.ARG)
                            }
                        }} className={'px-2 py-2 rounded-full border border-light'}>
                            <IoIosSwap size={22.5} className={'text-darkgray'} />
                        </button>
                    </div>

                    <p className={'text-normalGray'}>Actualizado hace {new Date().getSeconds() - new Date(fechaActualizacion).getSeconds()} segundos</p>
                </div>

                <Chart />

                <Tabs onValueChange={(value) => {
                    setTabs(value)
                }} defaultValue={'1d'}>
                    <TabsList>
                        {list.map((item, index) => (
                            <TabsTrigger key={index} value={item.name}>{item.name}</TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </> 
    )
}