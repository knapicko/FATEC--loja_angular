import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule, RouterModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  mensagem: string = "";
  lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "Furadeira de Impacto 750W",
    "descritivo": "Furadeira elétrica com função impacto, ideal para concreto, madeira e metal.",
    "valor": 349.9,
    "promo": 299.9,
    "quantidade": 15,
    "imagem": "https://www.dutramaquinas.com.br/shared/img/produto/alta/35647_furadeira_de_impacto_5_8_1_300_watts_2_velocidades_variaveis_d21570k.webp"
  },
  {
    "codigo": 2,
    "nome": "Parafusadeira Sem Fio 12V",
    "descritivo": "Parafusadeira compacta com bateria recarregável e controle de torque.",
    "valor": 259.9,
    "promo": 219.9,
    "quantidade": 0,
    "imagem": "https://cdn.awsli.com.br/600x1000/2604/2604240/produto/2269748234724c8cac2.jpg"
  },
  {
    "codigo": 3,
    "nome": "Jogo de Chaves de Fenda 6 Peças",
    "descritivo": "Conjunto de chaves de fenda e philips com cabo ergonômico.",
    "valor": 89.9,
    "promo": 69.9,
    "quantidade": 40,
    "imagem": "https://normatel.fbitsstatic.net/img/p/jogo-chave-fenda-6-pecas-41110-506-tramontina-74816/261359.jpg?w=770&h=770&v=202512121321"
  },
  {
    "codigo": 4,
    "nome": "Martelo Unha 27mm",
    "descritivo": "Martelo com cabeça em aço forjado e cabo emborrachado antiderrapante.",
    "valor": 59.9,
    "promo": 49.9,
    "quantidade": 35,
    "imagem": "https://anhangueraferramentas.fbitsstatic.net/img/p/martelo-unha-de-27mm-com-cabo-de-fibra-1040855-mtx-129964/319579-1.jpg?w=650&h=650&v=no-value"
  },
  {
    "codigo": 5,
    "nome": "Serra Tico-Tico 650W",
    "descritivo": "Serra elétrica para cortes curvos e retos em madeira, plástico e metal.",
    "valor": 329.9,
    "promo": 279.9,
    "quantidade": 0,
    "imagem": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUH8FkXbANd9gpVkfwKwXOwiVng4L8U46nRMkSFY_SIie0jlVnONApgTV5-kisbzZM-lsDfTlzEP_oPmMJidZO2i26OlkyErm9CoJnBbETSHqjOkDVPu6l"
  },
  {
    "codigo": 6,
    "nome": "Trena 5m com Trava",
    "descritivo": "Trena resistente com fita metálica e sistema de trava automática.",
    "valor": 29.9,
    "promo": 19.9,
    "quantidade": 60,
    "imagem": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRE5xZO0DeL3NCf9dUpe4_heEx-0-VkccUTIwLb5JCE-7x3nc5KP0Nj8BkmJrQlbHPM7hIo_Fl8al8BDCKY0bID3sNgMUSp7A"
  },
  {
    "codigo": 7,
    "nome": "Alicate Universal 8\"",
    "descritivo": "Alicate multifuncional em aço carbono com cabo isolado.",
    "valor": 49.9,
    "promo": 39.9,
    "quantidade": 45,
    "imagem": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTi5jzJt7vyA84hwQFMEdkBHC6UlHjFFURGOclJkjVlNZBHPeYN7zA9nnBzsqLJSw_PrWGFp7Kse2rzv1toIsrUx50gm8XoFQ"
  },
  {
    "codigo": 8,
    "nome": "Esmerilhadeira Angular 850W",
    "descritivo": "Ferramenta elétrica para corte e desbaste em metais e concreto.",
    "valor": 379.9,
    "promo": 329.9,
    "quantidade": 10,
    "imagem": "https://m.media-amazon.com/images/I/61UqffCRJOL.jpg"
  },
  {
    "codigo": 9,
    "nome": "Nível de Alumínio 40cm",
    "descritivo": "Nível com estrutura em alumínio leve e bolhas de alta precisão.",
    "valor": 39.9,
    "promo": 29.9,
    "quantidade": 0,
    "imagem": "https://cdn.distribuidoralopes.com.br/produtos/16629/16629.jpg"
  },
  {
    "codigo": 10,
    "nome": "Jogo de Soquetes 40 Peças",
    "descritivo": "Kit completo de soquetes com catraca e maleta organizadora.",
    "valor": 199.9,
    "promo": 159.9,
    "quantidade": 18,
    "imagem": "https://m.media-amazon.com/images/I/615XikUW5KL.jpg"
  }
];



}