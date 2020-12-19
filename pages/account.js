import Menu from '../components/Menu'

import styles from '../styles/Home.module.css'


const Account = () => {

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.main}>
                <h1>Account Page</h1>
            </div>
        </div>
    )
}

export default Account;