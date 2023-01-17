import styles from './Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <span className={styles.loader}></span>
        </div>
    );
}