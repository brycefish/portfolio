import './globals.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Portfolio | About',
  description: 'A Portfolio to showcase recent work by Bryce Fish, a software developer from Boise, Idaho',
  script: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`,
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark:bg-gray-600'>
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
