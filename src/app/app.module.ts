import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { InterfazpredeterminadaComponent } from './interfazpredeterminada/interfazpredeterminada.component';
import { InterfazconsumoComponent } from './interfazconsumo/interfazconsumo.component';

const rutas: Route[] = [
  {path:'', component: InterfazpredeterminadaComponent},
  {path:'inicioPre', component: InterfazpredeterminadaComponent},
  {path:'inicioCon', component: InterfazconsumoComponent},
  {path:'*', component: InterfazpredeterminadaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InterfazpredeterminadaComponent,
    InterfazconsumoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
