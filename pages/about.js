import Layout from '../components/layout'
import Head from 'next/head'
// import { client } from "../prismic-configuration"
// import Prismic from "prismic-javascript";
// import { RichText } from "prismic-reactjs";


export default function About() {
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
         <div className='bio' style={{width: '60%', margin: '0 auto'}}>
            <p style={{textAlign: 'left'}}>
               Born in Granada, Spain and now based in New York, singer/song-writer, Lara Bello conveys the music of 
               her hometown: Flamenco, Arabic melodies and Mediterranean roots masterfully fused with African and Latin 
               American rhythms. Her magical voice expressively touches your heart whilst her poetic lyrics take you on 
               a beautiful journey.
               <br/>
               <br/>
               Lara Bello nace y crece en Granada, donde desde muy pequeñita muestra interés por las artes escénicas y 
               la literatura. Comienza escribiendo poesías, cuentos y canciones. Sus inquietudes la llevan a estudiar 
               teatro, danza y música. Se especializa en canto clásico y violín en el Conservatorio de Granada, y 
               consigue las más altas clasificaciones como soprano en los exámenes de The Royal School of Music of London.
               <br/>
               <br/>
               Estudia cante y baile flamenco en Granada con diversos profesores, entrando en 2005 en la Escuela de 
               Flamenco de Mario Maya. Estudia jazz en Barcelona en el Taller de Musics y talleres en la ESMUC con Ana 
               Maria Finger y Gillyanne Kayes.
               <br/>
               <br/>
               En 2006 comienza a dar conciertos con sus propias composiciones y en 2007 es seleccionada por el 
               Ministerio de Trabajo y Asuntos Sociales y el Ministerio de Cultura para el circuito INJUVE, recibiendo 
               en 2009 el Segundo Premio en el Certamen Nacional de Canción de Autor de Ceutí (Murcia, España). En ese 
               mismo año saca su primer disco “Niña Pez” con el que se coloca en 2010 como la Mejor Artista Española, 
               votada por las Listas Europeas de Músicas del Mundo (WMCE).
               <br/>
               <br/>
               Este disco le abre las puertas de Estados Unidos y Latinoamérica, y al poco de sacar el disco en España 
               se muda a Nueva York. Forma una banda neoyorquina con la que comienza a dar conciertos por todo el mundo 
               (Kennedy Center en Washington DC, Festival de Jazz de Damasco en Siria, Ninegates International Jazz 
               Festival en Pekín, Universidad Javeriana de Bogotá, Aga Khan Museum de Toronto, etc)
               <br/>
               <br/>
               Ya en Nueva York graba su segundo disco Primero Amarillo Después Malva, apoyado por el Festival 
               Internacional de Jazz de Granada; y con este trabajo se consolida como artista en Estados Unidos, 
               siendo entrevistada por la revista PEOPLE en Español, apareciendo en la Revista de las Aerolineas 
               Mexicanas, en NY1 news, PRI’s “The World”, etc.
               <br/>
               <br/>
               Después de varios años viviendo en Nueva York, forma parte esencial de la representación de la cultura 
               española en la ciudad participando en infinidad de proyectos como La Ruta de Lorca en Nueva York, el 
               documental “Lunas de Nueva York” sobre la vida del poeta en su paso por esta ciudad (producido por 
               Producciones Cibeles y Canal Sur), o en 2014 cuando fue elegida por la Embajada de España en Washington 
               para representar al país en la Semana de la Cultura Europea de la ciudad. En 2013 saca “Por el Agua de 
               Granada: cancionero lorquiano” junto al guitarrista neoyorquino Eric Kurimski.
               <br/>
               <br/>
               En contacto con España, también colabora en proyectos relacionados con su país natal, como la 
               participación en el Festival Viva la Vega 2014, para salvar la Vega de Granada. Es compositora y 
               productora de la obra teatro-musical “A la sombra del granado” basada en la novela histórica de Tariq 
               Ali que transcurre en Granada. Esta obra se presentó en el Palacio de Congresos de la misma ciudad en 2014.
               <br/>
               <br/>
               En 2017 publica su disco SIKAME junto a la discográfica neoyorquina Biophilia Records. Este álbum cuenta 
               con los arreglos de Gil Goldstein, y la colaboración de artistas como Richard Bona, Lionel Loueke, Jorge 
               Pardo, Carles Benavent y Romero Lubambo. Este disco ha sido recomendado por The New York Times y NPR 
               (National Public Radio) en Estados Unidos.
               <br/>
               <br/>
               Licenciada en Psicología por la Universidad de Granada, forma parte de proyectos sociales donde se trabaja 
               a través del arte. Actualmente participa en the Lullaby Project, una actividad del área de Impacto Social 
               del Carnegie Hall en Nueva York.
            </p>
         </div>
     </Layout>
  )
}
// export async function getStaticProps() {
//    const calendar = await client.getSingle("calendar")
//    const bios = await client.query(
//      Prismic.Predicates.at("document.type", "about"),
//      { orderings: "[my.about.date desc]" }
//    )
//    return {
//      props: {
   
//        bios,
//      },
//    }
//  }