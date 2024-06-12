import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <>
            <div className={styles.estilo}>
                <button className={styles.ativo}>HOME</button>
                <button>CLIENTES</button>
            </div>
        </>
    ) 

}

export default NavBar;