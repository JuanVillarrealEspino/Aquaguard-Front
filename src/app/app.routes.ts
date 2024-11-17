import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './page/acerca-de/acerca-de.component';
import { ArticulosComponent } from './page/articulos/articulos.component';
import { AyudaComponent } from './page/ayuda/ayuda.component';
import { ConservacionComponent } from './page/conservacion/conservacion.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { CuidadoComponent } from './page/cuidado/cuidado.component';
import { FaqComponent } from './page/faq/faq.component';
import { RecursosComponent } from './page/recursos/recursos.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './page/inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'acerca-de', component: AcercaDeComponent},
    {path: 'articulos', component: ArticulosComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'conservacion', component: ConservacionComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'cuidado', component: CuidadoComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'recursos', component: RecursosComponent},
    {path:  '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}