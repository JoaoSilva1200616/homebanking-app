import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { AccountMovementComponent } from './account-movement/account-movement.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: FrontPageComponent
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: PostLoginComponent, canActivate: [AuthGuardService]
  },
  { path: 'movements', component: AccountMovementComponent, canActivate: [AuthGuardService] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
