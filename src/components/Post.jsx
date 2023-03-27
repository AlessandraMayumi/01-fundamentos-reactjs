import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src='https://www.github.com/AlessandraMayumi.png' />
                    <div className={styles.authorInfo}>
                        <strong>Test User</strong>
                        <span>Web developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 8:00' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir um projeto</p>
                <p><a href=''>test.design/project</a></p>
                <p>
                    <a href=''>#testproject</a>{'  '}
                    <a href=''>#ignite</a>
                </p>
            </div>
        </article>
    )
}