import { useState } from 'react';
import styles from './form.module.css';

const Form = () =>{
 
    //visualizar o valor, altera o valor
    let [peso, setPeso] = useState("");
    let [altura, setAltura] = useState("");
    let [resultado, setResultado] = useState("");
   
    

    const calcImc =() =>{
        if(peso <= 0){
            alert('-insira um peso valido')
            return;
        };
        if(altura <= 0){
            alert('-insira uma altura valida')
            return;
        };

        const imc = peso /(altura * altura);
        const imcFixed =imc.toFixed(2);
        setResultado(imcFixed);
    };


return(
   <div className={styles.container}>
        <h1>Calculadora de IMC</h1>
        <div className={styles.containerInput}>

            <label htmlFor="peso">Peso(KG)</label>  
            <input className={styles.peso}
             onChange={e => setPeso(e.target.value)} 
             type="number" 
             placeholder="EX: 75.1" />


            <label htmlFor="altura">Altura(M)</label>
            <input className={styles.altura}
            onChange={e => setAltura(e.target.value)}
             type="number" 
             placeholder="EX: 1.75"/>


            <button className={styles.btn} 
            onClick={calcImc}>Calcular</button>


            <label htmlFor="imc">IMC</label>
            <p>Seu imc e de {resultado}</p>
            
            
        </div>
   </div>
)

}

export default Form

