//import Header from '@/components/header/Header'
import './globals.css'
//import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar/Sidebar'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={'h-full min-h-screen font-sans'}>
        <div className="flex h-full min-h-screen">
          <Sidebar /> 
          <div className="w-full ml-64">{children}</div> 
        </div>
      </body>
    </html>
  )
};
