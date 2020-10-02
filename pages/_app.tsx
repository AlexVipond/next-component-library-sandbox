import '../styles/index.css'
// import 'antd/dist/antd.css'
import Nav from '../components/Nav'

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Nav />
    </>
  )
}

export default App
