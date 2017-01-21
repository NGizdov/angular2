import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SidebarComponent],
    bootstrap: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SidebarModule { }
