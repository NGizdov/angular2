import { NgModule } from '@angular/core';
import { CarouselModule } from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './modules/home/home.module';
import { BdModule } from './modules/bd/bd.module';
import { FamilyModule } from './modules/family/family.module';
import { FutureModule } from './modules/future/future.module';
import { MomentModule } from './modules/moment/moment.module';
import { YouModule } from './modules/you/you.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { appRouting, appRoutingProviders } from './app.routing';
import { SidebarModule } from './modules/sidebar/sidebar.module';

@NgModule({
  imports: [BrowserModule, SidebarModule, CarouselModule.forRoot(), HomeModule, BdModule, FamilyModule, FutureModule, MomentModule, YouModule, appRouting],
  providers: [AppService, appRoutingProviders],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
