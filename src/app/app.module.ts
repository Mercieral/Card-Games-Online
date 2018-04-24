import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { GamesComponent } from '../games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
