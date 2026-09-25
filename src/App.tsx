import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'
import Cachorros from './assets/cachorros.jpeg'
import Dormida from './assets/dormida.jpeg'
import Ufrj from './assets/ufrj.jpeg'
import Rock from './assets/rockrio.jpeg'
import { Fireworks } from './components/Fireworks'


function App() {
  return(
    <>

      <Fireworks />

      <Header />

      <div>
        <p className='texto'>Vidaaaa, finalmente chegou o seu diaaa. Há exatos 21 anos atrás você estava nascendo e eu com os meus 1 ano e 2 meses não fazia ideia que o amor da minha vida estava chegando ao mundo naquele dia 28 de setembro.</p>
        <p className='texto'>No dia 22/11/2025 o universo resolveu depois de 20 anos falar "sabe aquilo tudo que você ACHA que sabe o que é amor ? Joga no lixo que você vai aprender a partir de hoje o que é amor de verdade" e colocou você na minha vida.</p>
        <p className='texto'>Amor, eu quero te desejar as melhores coisas do mundo, que você seja a pessoa mais feliz e realizada desse mundo, porque você é uma mulher espetacular, uma mulher incrível, dedicada, esforçada e que acima de tudo tem o coração mais lindo do mundo. Uma mulher que aonde chega consegue iluminar tudo com a sua beleza e com o seu charme da forma mais natural possível.</p>
        <p className='texto'>Obrigado por dar um significado novo a palavra "amor", um significado tão lindo e leve que nem nos meus melhores sonhos imaginava que iria viver, obrigado por cuidar de mim sempre que precisei, por estar ao meu lado, me apoiar e por me fazer o homem mais feliz do mundo todos os dias.</p>
        <p className='texto'>Obrigado por todas as sextas feiras que eu subia a amapurus com um sorriso no rosto e correndo só porque eu sabia que iria te ver, por todas as refeições que você pegava minha pimentinha porque sabe que eu amo, por me ensinar que um cochilo a tarde é muito bom e por fazer até os momentos mais simples com você serem os melhores momentos do mundo.</p>
        <p className='texto'>Amor, eu quero que você saiba que eu sou muito orgulhoso de ser o seu namorado, sinto muito orgulho da pessoa que você é e de tudo que você conquistou e vai conquistar.</p>
        <p className='texto'>Quero que conte comigo pra tudo que você precisar, nos piores e nos melhores momentos eu vou estar aqui do seu lado até o fim da minha vida.</p>
        <p className='texto'>Eu te amo muito ❤️.</p>
    
      </div>
      
      <div className='instrucao'>
        <p className='texto'>(clica nos cards)</p>
      </div>

      <div>
        <Card 
          imagem={Cachorros} 
          mensagem="Obrigado por ser a melhor titia do mundo pros meus filhos (eles te amam muito de verdade) ❤️🐶🐶"
        />
        <Card
          imagem={Dormida}  
          mensagem="Obrigado por me mostrar que os momentos mais simples são também os melhores do mundo quando estou com você (e que um soninho da tarde tem seu valor) 😴​❤️"
         />
        <Card
          imagem={Ufrj}  
          mensagem="Obrigado por sempre me deixar orgulhoso e por isso sempre vou gritar pro mundo que tenho a namorada mais foda do mundo 🦊​❤️​"
         />
        <Card
          imagem={Rock}  
          mensagem="E obrigado por sempre estar do meu lado colecionando muitas primeiras vezes incríveis e que seja assim até o último dia das nossas vidas ❤️​"
         />
      </div>

      <div className='footer'>
          <p className='texto'> Você merece o mundo meu amor e eu vou te amar pra sempre, feliz aniversário vida.</p>
      
          <p className='texto'> Ass: Seu futuro marido ❤️</p>
      </div>
      
      
      
    </>
  )
}

export default App
