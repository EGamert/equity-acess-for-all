import './App.css'
import { Header } from './components'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
     <div className="full-page">
      <div className="page">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
