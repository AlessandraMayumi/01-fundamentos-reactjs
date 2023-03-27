// Components
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

// Styles
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post author="batata quente quente" />
        </main>
      </div>
    </>
  )
}

export default App
