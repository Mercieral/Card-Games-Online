import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material';
import { NewGameWizardComponent } from "../new-game-wizard/new-game-wizard.component";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
    games: Object[];

    constructor(private db: AngularFireDatabase, public dialog: MatDialog) {
        db.list('games').snapshotChanges().subscribe((result) => {
            // Use snapshotChanges so we can get the key which will be useful later when getting current user's games
            this.games = result.map((game) => {
                return game.payload.val();
            });
        });
    }

    ngOnInit() {}

    newGame() {
        this.dialog.open(NewGameWizardComponent, {
            width: '500px',
            data: {}
        });
    }
}
