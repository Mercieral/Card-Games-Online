import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MomentModule } from 'ngx-moment';

// Angular Material modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
} from '@angular/material';

// Components
import { GamesComponent } from '../pages/games/games.component';
import { AppComponent } from './app.component';
import { NewGameWizardComponent } from '../pages/new-game-wizard/new-game-wizard.component';


@NgModule({
    declarations: [
        AppComponent,
        GamesComponent,
        NewGameWizardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AppRoutingModule,
        MomentModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule
    ],
    entryComponents: [
        NewGameWizardComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
