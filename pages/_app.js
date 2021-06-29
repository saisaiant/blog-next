import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-4xl font-bold text-center">My Blog</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li><Link href="/"><a className="text-blue-600 hover: text-blue-500">Home</a></Link></li>
            <li><Link href="/about"><a className="text-blue-600 hover: text-blue-500">About</a></Link></li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
