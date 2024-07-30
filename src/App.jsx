import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import ConInput from './components/ConInput'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <ConInput />
      <div className='container max-w-full' style={{ backgroundColor: '#F9F5FF' }}>
        <div className="container max-w-full p-10 text-center animate__animated animate__fadeInLeftBig">
          <h1 className='text-3xl font-bold text-center pb-5' style={{ color: '#260B64' }}>Classification คืออะไร?</h1>
          <p style={{ color: '#260B64' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quia officia architecto aut quis quibusdam. Quas incidunt, dolores doloremque, iure laudantium culpa mollitia maiores cum deserunt sapiente dignissimos reiciendis odio. Est assumenda minima illo adipisci, beatae itaque quia eligendi architecto quidem, aliquid sit nisi fugit ipsa! Provident iusto quas placeat minus. Aliquam dolorum consequatur itaque vitae ea animi pariatur cumque sapiente incidunt, veniam deleniti culpa laudantium nesciunt ad aperiam magni corrupti dicta quo rerum delectus aut? Quibusdam iste distinctio error dolores ex, reiciendis facilis, in officiis veritatis provident eveniet dicta ipsa similique magni veniam beatae id harum possimus animi sed.</p>
        </div>
      </div>
      <div className="container max-w-full pt-14">
        <div className="container max-w-full p-10 text-center animate__animated animate__fadeInRightBig">
          <h1 className='text-3xl font-bold text-center pb-5' style={{ color: '#260B64' }}>การนำไปใช้</h1>
          <p style={{ color: '#260B64' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quia officia architecto aut quis quibusdam. Quas incidunt, dolores doloremque,</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
