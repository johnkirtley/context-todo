import { useState } from 'react'
import GlobalContext from '../context/GlobalContext';

import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function MyApp({ Component, pageProps }) {

  const [todo, setTodo] = useState([])

  return (
    <GlobalContext.Provider value={todo}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
