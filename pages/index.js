import Head from 'next/head'
import Header from '../components/Header'


export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div >
      <Head>
        <title>Facebook</title>
        
      </Head>

    {/* Header here */}
    <Header />

    <main>
      {/* sidebar */}

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