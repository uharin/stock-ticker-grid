import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StockDashboardComponent } from './stock/stock-dashboard/stock-dashboard.component';
import { SuperSecretComponent } from './components/super-secret/super-secret.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stock-dashboard', component: StockDashboardComponent },
  { path: 'secret', component: SuperSecretComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
