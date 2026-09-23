import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'
import Cachorros from './assets/cachorros.jpeg'
import Dormida from './assets/dormida.jpeg'
import Ufrj from './assets/ufrj.jpeg'
import Rock from './assets/rockrio.jpeg'


function App() {
  return(
    <>
      <Header />

      <div>
        <p>Vidaaaa, finalmente chegou o seu diaaa. Há exatos 21 anos atrás você estava nascendo e eu com os meus 1 ano e 2 meses não fazia ideia que o amor da minha vida estava chegando ao mundo naquele dia 28 de setembro.</p>
        <p>No dia 22/11/2025 o universo resolveu depois de 20 anos falar "sabe aquilo tudo que você ACHA que sabe o que é amor ? Joga no lixo que você vai aprender a partir de hoje o que é amor de verdade" e colocou você na minha vida.</p>
        <p>Amor, eu quero te desejar as melhores coisas do mundo, que você seja a pessoa mais feliz e realizada desse mundo, porque você é uma mulher espetacular, uma mulher incrível, dedicada, esforçada e que acima de tudo tem o coração mais lindo do mundo. Uma mulher que aonde chega consegue iluminar tudo com a sua beleza e com o seu charme da forma mais natural possível.</p>
        <p>Obrigado por dar um significado novo a palavra "amor", um significado tão lindo e leve que nem nos meus melhores sonhos imaginava que iria viver, obrigado por cuidar de mim sempre que precisei, por estar ao meu lado, me apoiar e por me fazer o homem mais feliz do mundo todos os dias.</p>
        <p>Obrigado por todas as sextas feiras que eu subia a amapurus com um sorriso no rosto e correndo só porque eu sabia que iria te ver, por todas as refeições que você pegava minha pimentinha porque sabe que eu amo, por me ensinar que um cochilo a tarde é muito bom e por fazer até os momentos mais simples com você serem os melhores momentos do mundo.</p>
        <p>Amor, eu quero que você saiba que eu sou muito orgulhoso de ser o seu namorado e futuro marido, sinto muito orgulho da pessoa que você é e de tudo que você conquistou e vai conquistar.</p>
        <p>Quero que conte comigo pra tudo que você precisar, nos piores e nos melhores momentos eu vou estar aqui do seu lado até o fim da minha vida.</p>
        <p>Eu te amo com todo o meu coração.</p>
    
      </div>
      
      <div>
        <Card imagem={Cachorros} titulo="Cachorros"/>
        <Card imagem={Dormida} titulo="dormida" />
        <Card imagem={Ufrj} titulo="dormida" />
        <Card imagem={Rock} titulo="dormida" />
      </div>
      
    </>
  )
}

export default App
