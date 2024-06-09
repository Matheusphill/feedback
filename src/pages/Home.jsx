import { CardContanier, IconContanier, ButtonContanier, ResultContanier } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";


export function Home() {
  const [mostrarResultado, setmostrarResultado] = useState(false)
  const [feedbackNote, setfeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event){
    const feedback = Number(event.target.innerText)

    setfeedbackNote(feedback)
  }

  function handleSubmit() {
    if (feedbackNote === 0)return

    setmostrarResultado(true)
  }

  return (
    mostrarResultado === false ? (
      <CardContanier>
      <IconContanier>
        <img src= {iconStarImg} alt="icone de estrela" />
      </IconContanier>

      <h1>Como foi o atendimento</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>
      
      <ButtonContanier>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <button onClick={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
      </ButtonContanier>

      <button onClick={handleSubmit}>Enviar</button>
    </CardContanier>
  ) : (
    <CardContanier>
      <img src={thankYouImg}  alt="imagem de agradecimento" />
    
      <ResultContanier>
        <p>Você selecionou {feedbackNote} de 5</p> 
      </ResultContanier>

      <h1>Obrigado</h1>

      <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContanier>
  )
  
)}
