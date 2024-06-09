import { CardContanier, IconContanier, ButtonContanier } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
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
  )
}

