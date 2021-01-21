import Layout from '../components/layout'
import Head from 'next/head'
import { client } from "../prismic-configuration"
import Prismic from "prismic-javascript";


export default function About(props) {

   const bioEnglish = props.bios.results.map(result => 
      result.uid == 'bio_english' && (         
            result.data.about_body.map(item => item.text)
      )
   )
   console.log(bioEnglish)
   const bioSpanish = props.bios.results.map(result => 
      result.uid == 'bio_spanish' && (
      result.data.about_body.map(item => item.text)
      )
   )
   return (
      <Layout>   
        <Head>
            <title>Lara Bello</title>
            <link rel="icon" href="/favicon.ico" />
         </Head> 
         <div style={{
            backgroundColor: '#2C2312', height: '190px', overflow: 'hidden',
         }}>
            <img src='/images/hero-about.jpg' style={{width: '70%', display: 'block', margin: '-150px auto'}}></img>
         </div>
         <h2 className='quote'>
         “Larita is a gifted singer with a beautiful and unusual instrument. Singing her own compositions, it makes a beautiful combination“</h2>
         <h3 className='quote source'> – Lila Downs</h3>

         <div className='about-content-container'>
            
            {bioEnglish.map(item =>
               item !== false ?
                  item.map(paragraph =>
                     < p > { paragraph }</p>
                     )
                : ''
            )}

            <span> &#42; </span>

            {bioSpanish.map(item =>
               item !== false ?
                  item.map(paragraph =>
                     <p>{ paragraph }</p>
                     )
                : ''
            )}
            <style jsx>{`
            .about-content-container {
               text-align: justify;
               width: 60%;
               margin: 3rem auto;
            }
            li {
            }
            span {
               font-size: 2rem;
               display: block;
               text-align: center;
            }
         `}</style>
         </div>
     </Layout>
  )
}
export async function getStaticProps() {
   const calendar = await client.getSingle("calendar")
   const bios = await client.query(
     Prismic.Predicates.at("document.type", "about"),
     { orderings: "[my.about.date desc]" }
   )
   return {
     props: {
   
       bios,
     },
   }
 }