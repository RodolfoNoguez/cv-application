import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Education, Experience, Projects, Additional } from './body.jsx'
import './body.css'
import  Header  from './header.jsx'

function App() {
  const [count, setCount] = useState(0)

      return(
        <>
          <Header />
          <Education />
          <Experience />
          <Projects />
          <Additional />
        </>
      )

}

export default App
