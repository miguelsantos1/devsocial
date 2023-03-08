import { DiscordLogo, GithubLogo } from 'phosphor-react'
import { getSession, signIn } from 'next-auth/react'
import Circle from '@/components/layout/circle'


export default function Login() {

    return(
      <>
        <main className='z-10 flex-col relative text-center justify-center mt-28 items-center sm:bg-[#202020] px-5 py-10 pb-20  w-[100%] max-w-[400px] rounded mx-auto'>
            <img 
            className='absolute w-[100px] left-[-20px] top-[-40px] h-[100px] text-center'
            src="/game-social-logo.png" 
            />
            <h1 className='mt-5 mb-5 font-bold text-3xl'> <span className='font-black text-4xl text-[#5e17eb]'>D</span>ev <br /> <span className="text-4xl text-[#5e17eb] font-black">S</span>ocial </h1>
            <p className='font-semibold text-sm mb-3'> Entrar com </p>
            <button onClick={ () => signIn('discord') } className="text-2xl mb-2 w-[100%] m-auto scroll-mb-0 sm:w-[auto] justify-center font-bold px-20 py-1 rounded flex gap-3 bg-[#303030] items-center shadow-md hover:bg-[#202020]">
                <DiscordLogo size={30} weight='bold' color="#fcfcfc" />  
                Discord
            </button>
            <button onClick={ () => signIn('github') } className="text-2xl w-[100%] m-auto scroll-mb-0 sm:w-[auto] justify-center font-bold px-20 py-1 rounded flex gap-3 bg-[#303030] items-center shadow-md hover:bg-[#202020]">
              <GithubLogo size={30} color="#ffffff" weight="bold" />  
                Github
            </button>
        </main>

       <Circle />

        </>
    )
}

export async function getServerSideProps(context) {

  
    const session = await getSession(context)
    
    if(session) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    
    return {
      props: {
        session
      }
    }
    
  }