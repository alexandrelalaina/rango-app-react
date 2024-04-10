import styles from "./Cabecalho.module.css";

function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <span>Rango</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Receitas</a>
                <a href="#">Itens</a>
            </nav>
        </header>
    );
}

export default Cabecalho;