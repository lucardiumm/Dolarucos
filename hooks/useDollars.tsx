import { useEffect, useState } from 'react'
import { Dollar } from '@/types/include'
import axios from 'axios'

export default function useDollars() {
    const [data, setData] = useState<Dollar[]>([])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_DOLLARAPI as string).then((response) => {
            if (response.status === 200) {
                response.data.forEach((item: Dollar) => {
                    setData(prevData => [...prevData, item])
                })
            }
        })
    }, [])

    return data
}