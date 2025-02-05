'use client'

import useDollars from '@/hooks/useDollars'

export default function Home() {
    const dollars = useDollars()
    
    return (
        <div className={'flex flex-1 justify-center items-center content-center bg-back w-screen h-screen flex-col'}>
            {dollars.map((_, i) => (
                <div key={i}>
                    <h2>{_.name}</h2>
                    <p>Compra: {_.buy}</p>
                    <p>Venta: {_.sell}</p>
                </div>
            ))}
        </div>
    )
}