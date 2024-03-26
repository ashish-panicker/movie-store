import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export const userRoutes : Route[] = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
]