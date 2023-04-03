import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Components
import { Avatar } from './Avatar';
import { Comment } from './Comment';

// Styles
import styles from './Post.module.css';

import { CONTENT_TYPE_PARAGRAPH, CONTENT_TYPE_LINK } from '../constants/constants'
import { useState } from 'react';


export function Post({ author, content, publishedAt }) {
    // State
    const [commentList, setCommentList] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

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
        const newComment = { id: Math.random().toString(16).slice(2), content: commentMessage }
        setCommentList([...commentList, newComment])

        // Reset form textarea
        setNewCommentText('');
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
                {content.map(line => {
                    const { id, type, content } = line;
                    if (type === CONTENT_TYPE_PARAGRAPH) {
                        return <p key={id}>{content}</p>
                    }
                    if (type === CONTENT_TYPE_LINK) {
                        return <p key={id}><a href="#">{content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='commentMessage'
                    onChange={e => setNewCommentText(e.target.value)}
                    value={newCommentText}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {commentList.map(({ id, content }) => {
                    return <Comment key={id} content={content} />
                })}
            </div>
        </article>
    );
}