import styles from './Message.module.css'
import error_img from '../images/error-400.svg'

export default function Message({text}) {
    return (
        <>
        <div className={styles.error__container} id="message">
            <h3 className={styles.error__title}>{text}</h3>
            <img src={error_img} alt="error" className={styles.error__img} />
        </div>
        </>        
    );
}