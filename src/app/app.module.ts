import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from './components/card/card.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DividerComponent } from './components/divider/divider.component';
import { HomeComponent } from './components/home/home.component';
import { SafePipePipe } from './pipes/safe-pipe.pipe';

@NgModule({
  declarations: [AppComponent, CardComponent, RendererComponent, ToolbarComponent, DividerComponent, HomeComponent, SafePipePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
