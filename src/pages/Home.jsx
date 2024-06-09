import { CardContanier, IconContanier, ButtonContanier, ResultContanier } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true

  return (
    aparecerResultado === false ? (
      <CardContanier>
      <IconContanier>
        <img src= {iconStarImg} alt="icone de estrela" />
      </IconContanier>

      <h1>Como foi o atendimento</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>
      
      <ButtonContanier>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContanier>

      <button>Enviar</button>
    </CardContanier>
  ) : (
    <CardContanier>
      <img src={thankYouImg}  alt="imagem de agradecimento" />
    
      <ResultContanier>
        <p>Você selecionou 4 de 5</p> 
      </ResultContanier>

      <h1>Obrigado</h1>

      <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContanier>
  )
  
)}
