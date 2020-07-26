import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockSearchFormComponent } from './stock-search-form/stock-search-form.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stock-form', component: StockSearchFormComponent },
  { path: 'secret', component: SuperSecretComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
