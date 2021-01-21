import Layout from '../components/layout'
import Head from 'next/head'
import { client } from "../prismic-configuration"
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";


export default function Calendar(props) {
console.log(props)
   const events = props.events.results.map((event) => (
      <div className='event-container'>
         <li key={event.uid}>
               <a href={RichText.asText(event.data.link_venue_url)}>
                  <h2>{RichText.render(event.data.location_venue)}</h2>
               </a>
               <h4>{RichText.render(event.data.date)} </h4>
               <p>{RichText.asText(event.data.event_description)}</p>
               <a href={RichText.asText(event.data.link1_address)}>{RichText.asText(event.data.link1)}</a><br/>
               <a href={RichText.asText(event.data.link2_address)}>{RichText.asText(event.data.link2)}</a>
         </li>
         
         <style jsx>{`
            .event-container {
               text-align: left;
               width: 50%;
               margin: 3rem auto;
               
            }
            h2, h4 {
               font-size: 1rem;
               margin: 0;
            }
            li {
               list-style: none;
               // color: red;
               background-color: rgba(196, 196, 196, 0.1);
               margin-bottom: .2rem;
               padding: 1rem;
            }
            p {
               text-align: 'justify'
               margin: 0;
               font-size: .8rem;
            }
            a {
               font-size: .7rem;
               margin: 0;
               text-decoration: underline;
            }
        `}</style>
      </div>
      )) 
   return (
      <Layout>   
        <Head>
            <title>Lara Bello</title>
            <link rel="icon" href="/favicon.ico" />
         </Head> 

         <div style={{backgroundColor: '#07032A'}}>
            <img src='/images/hero-calendar.jpg' style={{width: '70%', display: 'block', margin: '0 auto'}}></img>
         </div>
         
            <h1>{RichText.asText(props.calendar.data.calendar)}</h1>
            <ul>{events}</ul>
      </Layout>
  )
}

export async function getStaticProps() {
   const calendar = await client.getSingle("calendar")
   const events = await client.query(
     Prismic.Predicates.at("document.type", "event"),
     { orderings: "[my.event.date desc]" }
   )
   return {
     props: {
       calendar,
       events,
     },
   }
 }
