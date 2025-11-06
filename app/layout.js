export const metadata = {
  title: 'Vacation Reality',
  description: 'Going on vacation with wife... is just a change of location',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
