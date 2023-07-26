import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { db } from '../firebase'




export default function Home({ session, posts }) {
  if (!session) return <Login />

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Rasbook</title>
        
      </Head>

    {/* Header here */}
    <Header />

    <main className="flex">
      {/* sidebar */}
      <Sidebar />

      {/* feeds */}
      <Feed posts={posts}/>

      {/* widgets */}
      <Widgets />
    </main>
    </div>
  )
}

// Server side rendering
export async function getServerSideProps (context){
 // get user 
  const session = await getSession (context);

  //server side render on post
  const posts = await db.collection("posts").orderBy("timestamp", 'desc').get();
  const docs = posts.docChanges.map(posts => ({
    id: posts.id,
    ...posts.data(),
    timestamp: null,
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}

