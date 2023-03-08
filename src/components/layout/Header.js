import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { PlusCircle } from 'phosphor-react'

export default function Header() {

    const { data: session } = useSession()

    return(
        <header className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
                <Link href="/">
                     <img className='h-[100px]' src="/game-social-logo.png" />
                </Link>
        </div>
        <div className='flex gap-2 items-center'>
            <Link title="Postagem" href='/post'>
                <PlusCircle size={80} color="#ffffff" weight="bold" />
             </Link>
                <Link title="Conta" href='/user'>
                    <img
                    className='rounded-full outline outline-violet-200 h-[80px] w-[80px]'
                    src={ session?.user?.image }
                    />
                </Link>
        </div>

        
        </header>
    )
}