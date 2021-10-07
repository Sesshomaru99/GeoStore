import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { TiendasComponent } from './tiendas/tiendas.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'contacto', component:ContactoComponent},
  {'path': 'ayuda', component: AyudaComponent},
  {'path': 'mapa', component: MapaComponent},
  {'path': 'Tiendas', component: TiendasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
