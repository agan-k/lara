import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Layout({ children }) {
   const router = useRouter()

const links = [
   {name: 'home', uid: '/'},
   {name: 'about', uid: '/about'},
   {name: 'albums', uid: '/albums'},
   {name: 'calendar', uid: '/calendar'},
   {name: 'press', uid: '/press'},
   {name: 'photos', uid: '/photos'},
   {name: 'videos', uid: '/videos'},
   {name: 'lyrics | letras', uid: '/lyrics'},
   {name: 'contact', uid: '/contact'},
]
const linksList = links.map(link =>
   <li className={router.pathname == `${link.uid}` ? 'active' : ''}>
      <Link href={link.uid}>{link.name}</Link>
   </li>
   )
   return (
         <div className={styles.container}>
            <header className={styles.header}>
               <ul>
                  {linksList}
               </ul>
            </header>
            <main className={styles.main}>
               {children}
            </main>
         <footer className={styles.footer}>
            <p>
               site by | <a href='https://formversuscontent.com' target='_blank'>formVersusContent</a>
            </p>
            </footer>
         </div>
      
   )

}