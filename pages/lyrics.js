import Head from 'next/head'
import Layout from '../components/layout'
import { client } from "../prismic-configuration"
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";



export default function Lyrics(props) {
console.log(props)   
   const songs = props.songs.results.map(item =>
      item.data.song_body.map(item =>
         item.type == 'heading5' ? 
            <h5>{item.text}</h5>
            :
            (item.type == 'paragraph') ?
               <p className={
                  item.spans[0] !== 0 &&
                  item.spans[0] !== undefined &&
                  item.spans[0].type == 'em' ?
                  (
                     `${item.spans ? 'italic' : ''} paragraph`
                     ) : null   
               }>
                  {item.text}
                  <style jsx>{`
                     p {
                        font-family: courier;
                        font-size: .8rem;
                        margin-bottom: .4rem;
                     }
                     .italic {
                        font-style: italic;
                     }
                  `}</style>
               </p>
            : '' 
   ))
   return (
     <Layout>    
         <Head>
         <title>Lara Bello</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>

         <h2 style={{fontFamily: 'courier'}}>{RichText.asText(props.lyrics.data.heading)}</h2>

         {songs.map(item =>
            <div style={{ textAlign: 'left', width: '20%', margin: '2rem auto', ackgroundColor: 'yellow' }}>
               {item}
            </div>
         )}
     </Layout>
  )
}

export async function getStaticProps() {
   const lyrics = await client.getSingle("lyrics")
   const songs = await client.query(
     Prismic.Predicates.at("document.type", "song_lyrics"),
     { orderings: "[my.song_lyrics.date desc]" }
   )
   return {
     props: {
       lyrics,
         songs,
     },
   }
 }
