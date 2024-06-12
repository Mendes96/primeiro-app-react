import styles from './HomePage.module.css';
import Header from '../Header/Header'
import PaginaDeClientes from '../Pagina-de-Clientes/Pagina-de-Clientes';
import NavBar from '../NavBar/NavBar';


function HomePage() {
    return (
        <>
            <div className={styles.estilo}>
                <Header />
                <NavBar />
                <PaginaDeClientes />


            </div>
        </>
    );
}

export default HomePage;