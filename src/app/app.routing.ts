//Importes necesario
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Importes de los componentes
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MiPerfilComponent } from "./components/mi-perfil/mi-perfil.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component:LoginComponent},
    { path: 'logout/:sure', component: LoginComponent },
    { path: 'register',component:RegisterComponent },
    { path: 'user-edit',component:UserEditComponent },
    { path: 'miperfil',component:MiPerfilComponent }

];

//Exportar configuraciones
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)