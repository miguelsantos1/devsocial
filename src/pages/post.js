import Header from "@/components/layout/Header";
import Circle from "@/components/layout/circle";
import { useSession, getSession } from "next-auth/react";
import axios from 'axios'

export default function Post() {

    const { data: session } = useSession()

    function submit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        try {
          axios.post(`/api/post`, {
            userImage: data.userImage,
            user: data.user,
            content: data.content
          })

          alert("Dados enviados")
        } catch (error) {
          alert(error)
        }


    }

    return(
        <>
            <Header />
            <form onSubmit={submit}
            className="mt-32 flex flex-col justify-center max-w-[400px] text-center m-auto"

            method="POST"
            >

            <h1 className="font-bold text-2xl mb-5">NOVA POSTAGEM</h1>
            <input className="hidden" name="userImage" value={session?.user?.image} required />
            <input className="hidden" name="user" value={session?.user?.name} required />
            <textArea name="content" placeholder="Escreva.." className="bg-[#202020] mb-5 rounded px-2 py-5 focus:outline-none" required />
            <input className="bg-[#5e17ebef] hover:bg-[#5e17ebac] font-bold p-2 cursor-pointer" value={"Postar"} type="submit" />

            </form>


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