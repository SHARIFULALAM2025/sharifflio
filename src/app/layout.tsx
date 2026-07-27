import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/Components/Sidebar'
import Loader from '@/Components/Loader'

export const metadata: Metadata = {
  title: 'shariful alam | Portfolio',
  description: 'Full Stack Developer Portfolio',
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
          {' '}
          <div className="flex min-h-screen">
            <main className="flex-1 overflow-y-auto">{children}</main>

            <Sidebar />
          </div>
        </Loader>
      </body>
    </html>
  )
}
