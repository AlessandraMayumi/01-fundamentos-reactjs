import { Post } from "./Post"
import { Header } from "./components/Header"
import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

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
