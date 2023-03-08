import Header from "@/components/layout/Header";
import Circle from "@/components/layout/circle";

import { useSession, getSession, signOut } from 'next-auth/react'
import { Door } from "phosphor-react";


export default function User() {

    const { data: session } = useSession()

    return(
        <>
         
        <Header />

        <main className="flex sm:max-w-[400px] bg-[#202020] px-5 py-5 rounded m-auto text-center justify-center flex-col mt-10">
            <img className="w-[180px] self-center mb-5 h-[180px] rounded-full" src={session?.user?.image} />
            <p className="font-bold rounded  bg-[#181818] mb-2 py-2"> @{session?.user?.name} </p>
            <p className="font-bold rounded bg-[#181818] mb-9 py-2"> {session?.user?.email} </p>
            <button onClick={() => signOut()} className="flex items-center justify-center gap-2 font-black py-2 rounded bg-red-800 hover:bg-red-900"> <Door size={20} weight="bold" /> Sair</button>
        </main>


        <Circle />
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession(context)
  
    if(!session) {
      return {
        redirect: {
          destination: '/login',
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