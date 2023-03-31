// Components
import { PostItem } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Styles
import './global.css'
import styles from './App.module.css'
import { CONTENT_TYPE_PARAGRAPH, CONTENT_TYPE_LINK } from './constants/constants'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlessandraMayumi',
      name: 'Test User',
      role: 'manager'
    },
    content: [
      {id:1, type: CONTENT_TYPE_PARAGRAPH, content: 'Fala galera' },
      {id:2, type: CONTENT_TYPE_PARAGRAPH, content: 'Acabei de subir mais um projeto' },
      {id:3, type: CONTENT_TYPE_LINK, content: 'domain/testuser' },
    ],
    publishedAt: new Date('2023-03-30 21:00:00'),
  },
];

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(p => {
            const { author, content, publishedAt } = p;
            return <PostItem
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          })};
        </main>
      </div>
    </>
  )
}

export default App
