import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/Components/Sidebar'
import Loader from '@/Components/Loader'

export const metadata: Metadata = {
  title: 'shariful alam ',
  description: 'Full Stack Developer ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Loader>
          <div className="flex min-h-screen">
            <main className="flex-1 overflow-y-auto pb-20 md:pb-0 md:pl-16">
              {children}
            </main>
            <Sidebar />
          </div>
        </Loader>
      </body>
    </html>
  )
}
