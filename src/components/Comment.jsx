import { ThumbsUp, Trash } from '@phosphor-icons/react';

// Components
import { Avatar } from './Avatar';

// Styles
import styles from './Comment.module.css';


export function Comment({ id, content, onDeleteComment }) {
    return (
        <div className={styles.comment}>
            <Avatar src='https://www.github.com/AlessandraMayumi.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Test Anotheruser</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button
                            title='Deletar comentário'
                            onClick={() => onDeleteComment(id)}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}