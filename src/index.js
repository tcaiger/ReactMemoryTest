import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Footer from './components/Footer'
import MemoryTest from './components/MemoryTest'

/*
* Note:
* The app is styled using a material design component framework.
* I thought this was a nice way to create a nice looking app without spending too much time.
* On real apps, I enjoy writing my own component driven styles with SCSS drawing on ideas from SMACSS, ITCSS, BEM & Atomic CSS.
*/
const App = () => {
  return (
    <div>
      <Header/>
      <MemoryTest/>
      <Footer/>
    </div>
  )
}

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);