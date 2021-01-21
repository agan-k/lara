import Head from 'next/head'
import Layout from '../components/layout'

export default function Contact() {
   return (
   <Layout>    
     <div>    
         <Head>
         <title>Lara Bello</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>
         <div style={{backgroundColor: 'black'}}>
            <img src='/images/hero-contact.jpg' style={{width: '70%', display: 'block', margin: '0 auto'}}></img>
         </div>
            <div style={{
               width: '100%', display: 'flex', justifyContent: 'space-evenly',
               textAlign: 'left'
            }}>
               <div className='contact-card'>
                  <h2>MANAGEMENT AND BOOKING</h2>
                  <p>
                     Mercè Porras (+34) 637 439 999 <br/>
                     merce@gatonegroproductions.com
                  </p>
               </div>
               <div className='contact-card'>
                  <h2>BOOKING GERMANY</h2>
                  <p>
                     Sun Drop Productions <br/>
                     +49(0)15786885621<br/>
                     info@sundropproductions.com<br/>
                  </p>
               </div>
               <div className='contact-card'>
                  <h2>PRESS</h2>
                  <p>
                     Cindy Byram <br/>
                     (+1) 201-400-4104<br/>
                     cindybyramPR (at) AOL (dot) com<br/>
                  </p>
               </div>
               <div className='contact-card'>
                  <h2>SAY HI &#128578;</h2>
                  <p>
                     lara@larabello.com
                  </p>
               </div>
               <style jsx>{`
                     h2, p {
                        margin: 0;
                        font-size: 1rem;
                     }
                     h2 { color: orange}
               `}</style>
            </div>
         
     </div>
     </Layout>
  )
}
