import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './share/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemeService } from 'ng2-charts';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
