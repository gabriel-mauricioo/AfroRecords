import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule} from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ListarModule } from './listar/listar.module';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { AdicionarModule } from './adicionar/adicionar.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemoverModule } from './remover/remover.module';
import { RemoverComponent } from './remover/remover.component';
import { EditarModule } from './editar/editar.module';
import { EditarComponent } from './editar/editar.component';
import { SairModule } from './sair/sair.module';
import { SairComponent } from './sair/sair.component';





const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent  },
    {path: 'listar', component: ListarComponent},
    {path: 'adicionar', component: AdicionarComponent},
    {path: 'remover', component: RemoverComponent},
    { path: 'editar/:id', component: EditarComponent },
    {path: 'sair', component: SairComponent  },
    
  
    
]


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HomeModule,
        ListarModule,
        RemoverModule,
        RouterModule.forRoot(routes),
        AdicionarModule,
        HttpClientModule,
        EditarModule,
        SairModule
    ],
    exports: [AppComponent, RouterModule],
    declarations: [AppComponent, 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
