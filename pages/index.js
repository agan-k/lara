import Head from 'next/head'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'


export default function Home() {
   return (
     <Layout>    
         <Head>
         <title>Lara Bello</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>
         <div style={{backgroundColor: '#141000', paddingBottom: '.1rem'}}>
            <img src='/images/hero-home.jpg' style={{width: '70%', display: 'block', margin: '0 auto'}}></img>
         </div>
         <br/>
         <br />
         <div className='media-link'>
            <ReactPlayer
               className='react-player'
               url='https://youtu.be/tO9uLyVn_TY'
               light={`/images/sikame-thumb.png`}
               width='100%'
               // height='100%'
               playing
               controls
            />
         </div>
         <h2 className='quote'>“Lara Bello’s voice is a haunting and soothing reminder that the past is always present in the human spirit”</h2>
         <h3 className='quote source'> – Ed Morales</h3>
         <br/>
         <br />
         <br/>
         <br />
         <div className='media-link'>
            <a href='https://larabello.bandcamp.com/releases' target='_blank'>
               <img src='/images/bandcamp-logotype-color-128.png' style={{ width: '30%', margin: '0 0 -1.2rem 0'}} /><br/>
               <img src='/images/album-sikame.jpg' style={{width: '80%', margin: '0'}}></img>
            </a>
         </div>

         <h2 className='quote'>“She´s courageous. Lara Bello is a diamond that shines far away”</h2>
         <h3 className='quote source'> – José Miguel López (Radio3 - National Radio, Spain)</h3>
      
         <br/>
         <br/>
         <br/>
         <div className='media-link'>
            <a href='https://www.npr.org/2018/04/10/599755616/lara-bello-tiny-desk-concert' target='_blank'>
               <img src='/images/tinydesk3.png' style={{ width: '30%', margin: '0 0 -1.2rem 0'}} /><br/>
               <img src='/images/tiny_desk_video_thumb.png' style={{width: '100%', margin: '0'}}></img>
            </a>
         </div>
         <h2 className='quote'>Lara Bello – “Best Spanish Artist 2010”</h2>
         <h3 className='quote source'>- The World Music Charts Europe (WMCE)</h3>
         
     </Layout>
  )
}
