import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useSession, getSession, signOut } from 'next-auth/react'
import Header from '@/components/layout/Header'
import Link from 'next/link'
import Circle from '@/components/layout/circle'
import Post from '@/components/Post'
import axios from 'axios'

export default function Home(props) {

  const { data: session } = useSession()

  const [posts, setPost] = useState([])


  useEffect(() => {
    axios(`/api/get/posts`).then((response => {
      setPost(response.data)
    }))
  }, [])

  return (
    <>
      <Header />

      <main className='bg-[#20202090] p-5 rounded mt-24'>
        <h2 className='font-bold text-center text-3xl my-10'> NOVAS POSTAGENS </h2>


        { posts.map(post => {
          return(
            <Post 
            key={ post?.id }
            user={ post?.user }
            userImage={ post?.userImage }
            content={ post?.content }
            
            />
          )
        }) }


      </main>


   

      <Circle />

    </>
  )
}



export async function getServerSideProps(context) {


  const session = await getSession(context)

  // if(!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false
  //     }
  //   }
  // }
  
  return {
    props: {
      session,
    }
  }

  
}
