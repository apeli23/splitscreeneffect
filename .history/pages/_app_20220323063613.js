import '../styles/globals.css'
import Script from "next/script"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <script src="https://unpkg.com/split.js/dist/split.min.js"></script>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
