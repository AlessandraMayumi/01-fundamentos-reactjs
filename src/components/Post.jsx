import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Components
import { Avatar } from './Avatar';
import { Comment } from './Comment';

// Styles
import styles from './Post.module.css';

import { CONTENT_TYPE_PARAGRAPH, CONTENT_TYPE_LINK } from '../constants/constants'
import { useState } from 'react';


export function PostItem({ author, content, publishedAt }) {
    // State
    const [comments, setComments] = useState([]);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishedDateRelative = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());

        const { commentMessage } = formJson;
        setComments([...comments, commentMessage])
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src='https://www.github.com/AlessandraMayumi.png' />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelative}</time>
            </header>
            <div className={styles.content}>
                {content.map(p => {
                    if (p.type === CONTENT_TYPE_PARAGRAPH) {
                        return <p>{p.content}</p>
                    }
                    if (p.type === CONTENT_TYPE_LINK) {
                        return <p><a href="#">{p.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name='commentMessage' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((c) => {
                    return <Comment content={c} />
                })}
            </div>
        </article>
    );
}