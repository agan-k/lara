import Layout from '../components/layout'
import Head from 'next/head'
import BandcampPlayer from 'react-bandcamp'



export default function Albums() {
   return (
      <Layout>   
        <Head>
         <title>Lara Bello</title>
         <link rel="icon" href="/favicon.ico" />
         </Head> 
         <div className='albums container'
            style={{
               display: 'flex',
               width: '60%', 
               margin: '0 auto', 
               padding: '3rem 1rem', 
               textAlign: 'left'
            }}>
            <BandcampPlayer
               // className='audio-player'
               album='1639898348'
               size='large'
               tracklist='true'
               // width='100%'
               height='500px'
               artwork='true'
            />
            <div className='album-info'>
               <h4>Sikame</h4>
               <h5>Biophilia Reacord, 2017</h5>
               <br/>
               <ul>
                  <li>Personnel:</li>
                  <li>Richard Bona</li>
                  <li>Lionel Loueke</li>
                  <li>Romero Lubambo</li>
                  <li>Gil Goldstein</li>
                  <li>Carles Benavent</li>
                  <li>Jorge Pardo</li>
                  <li>Dave Eggar</li>
                  <li>Rajiv Jayaweera</li>
                  <li>Leni Stern</li>
                  <li>Samuel Torres</li>
                  <br/>
                  <li>Arranged by Gil Goldstein</li>
                  <li>Recorded by Steve Addabbo</li>
                  <li>Mixed and Mastered by Dave Darlington</li>
               </ul>
            </div>
         </div>
     </Layout>
  )
}