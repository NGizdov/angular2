import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { HomeComponent }  from './modules/home/home.component';
import { BdComponent }  from './modules/bd/bd.component';
import { FamilyComponent }  from './modules/family/family.component';
import { FutureComponent }  from './modules/future/future.component';
import { MomentComponent }  from './modules/moment/moment.component';
import { YouComponent }  from './modules/you/you.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'bd',  component: BdComponent },
  { path: 'family',  component: FamilyComponent },
  { path: 'future',  component: FutureComponent },
  { path: 'moment',  component: MomentComponent },
  { path: 'you',  component: YouComponent }
];
export const appRoutingProviders: any[] = [
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });