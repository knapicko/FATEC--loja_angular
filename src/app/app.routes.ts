import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';
import { CadastroCliente } from './cadastro-cliente/cadastro-cliente';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';

export const routes: Routes = [
    {path:"cadastro", component:CadastroCliente},
    {path:"fale", component:Contato},
    {path:"vitrine", component:Vitrine},
    {path:"produto/:codigo", component:ProdutoDetalhe},
    {path:"", component:Vitrine}
];