'use client'

import { useRouter } from 'next/navigation'
import { GrGithub } from 'react-icons/gr'

export default function Header() {
    const router = useRouter()

    const Redirect = () => {
        router.push('https://github.com/lucardiumm/dolarucos')
    }

    return (
        <div className={'bg-white'}>
            <GrGithub className={'text-3xl ml-auto relative right-10 top-10 cursor-pointer text-github'} onClick={Redirect} />
        </div>
    )
}