 import { useState } from "react"
 import "./app.css"
 
 export default function App(){
   const [peso,setPeso] = useState("")
   const[altura,setAltura]= useState("")
   const [mensagem, setMensagem] = useState("")

   function calcularImc(){
   const alt = altura / 100
   const imc = peso / (alt * alt)
   

    if (imc< 18.6){
      setMensagem ("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem ("Você está com o  peso ideal! Seu IMC é: " + imc.toFixed(2))

    }else if(imc >= 24.9 && imc < 34.9 ){
      setMensagem ("Você está Levemente acima do peso! Seu IMC é: " + imc.toFixed(2))

    }else if( imc > 34.9 ){
      setMensagem ("Cuidado você está obeso! Seu IMC é: " + imc.toFixed(2))
      
    }
    

   }
  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
    <span>Vamos calcular seu IMC</span>
    <div className="area-input">
   <input type="text" placeholder="Peso em (Kg) Ex:90" 
     value={peso}
     onChange={(e) => setPeso(e.target.value)}
   />
   <input type="text" placeholder="Altura em (Cm) Ex:180" 
  value={altura}
  onChange={(e) => setAltura(e.target.value)}
   />
   <button onClick={calcularImc}>Calcular</button>

   
    </div>
    <h2>{mensagem}</h2>
    </div>
  )
}

