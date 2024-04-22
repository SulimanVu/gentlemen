import styles from "./notFoundPage.module.scss"
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/main')
    }
   return (
    <div className={styles.page}>
        <img className={styles.icon} src="https://cdn.icon-icons.com/icons2/1199/PNG/512/1490971308-map-icons-7_82746.png" alt="" />
        <span className={styles.warning}>Страница не найдена</span>
        <button className={styles.comeBack} onClick={handleGoHome}>Вернуться на главную</button>
    </div>
   );
 };