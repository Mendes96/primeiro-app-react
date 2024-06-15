import styles from './Clientes.module.css'
import { useState } from 'react';
import DeleteIcon from '../../assets/delete.svg';

function Clientes() {
  const [fichaClientes, setFichaClientes] = useState([]);

  const adicionarFicha = () => {
    const novaFicha = {nome: 'Novo Cliente', id: Date.now() };
    setFichaClientes([...fichaClientes, novaFicha]);
  }

  const excluirFicha = (id) => {
    setFichaClientes(fichaClientes.filter(ficha => ficha.id !== id));
  }
 

  return (
    <div className={styles.ClientesEstilo}>
        <h2>Página de Clientes</h2>
        <button onClick={adicionarFicha}>Adicionar Cliente</button>
        <div>
          {fichaClientes.map(ficha => (
            <div key={ficha.id} className={styles.novaFicha}>
              <p>Cliente: {ficha.nome}</p>

              <div onClick={() => excluirFicha(ficha.id)} className={styles.btnErase}>
                <img src={DeleteIcon}></img>
              </div>
              
            </div>
          ))}
        </div>

        
    </div>
  )
}

export default Clientes