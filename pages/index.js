import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'




export default function Home({ session }) {
  if (!session) return <Login />

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
        
      </Head>

    {/* Header here */}
    <Header />

    <main className="flex">
      {/* sidebar */}
      <Sidebar />

      {/* feeds */}

      {/* widgets */}
    </main>
    </div>
  )
}

// Server side rendering
export async function getServerSideProps (context){
 // get user 
  const session = await getSession (context);

  return {
    props: {
      session
    }
  }
}

