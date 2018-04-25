import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Game } from '../models/game';
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase';
// Required for side-effects
import 'firebase/functions';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
    games: Game[];

    constructor(private db: AngularFireDatabase) {
        db.list('games').snapshotChanges().subscribe((result) => {
            this.games = result.map((game) => {
                const data = game.payload.val();
                return new Game(game.key, data.author, data.message);
            });
        });
    }

    ngOnInit() {}

    newGame() {
        const createGame = Object(firebase).functions().httpsCallable('createGame');
        createGame({message: 'this is my new game!'}).then(function(result) {
            console.log('game created!');
        });
    }
}
