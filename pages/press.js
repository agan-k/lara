import Head from 'next/head'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'


export default function Press() {
   return (
     <Layout>    
         <Head>
         <title>Lara Bello</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>
         <div style={{backgroundColor: '#2C2312'}}>
            <img src='/images/hero-press.jpg' style={{width: '70%', display: 'block', margin: '0 auto'}}></img>
         </div>
         <br/>
         <br />
         <div className='media-link'>
            <ReactPlayer
               className='react-player'
               url='https://youtu.be/lu838izjpKc'
               width='100%'
               controls
            />
         </div>
         <br/>
         <div className='media-link'>
            <ReactPlayer
               className='react-player'
               url='https://youtu.be/BpE1ErOWtdQ'
               width='100%'
               controls
            />
         </div>
         <br/>
         <div className='media-link'>
            <ReactPlayer
               className='react-player'
               url='https://youtu.be/4arfznfGtBM'
               width='100%'
               controls
            />
         </div>
     </Layout>
  )
}
