import { Component, OnInit, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material';
import * as firebase from 'firebase';
import 'firebase/functions';


@Component({
    selector: 'app-new-game-wizard',
    templateUrl: './new-game-wizard.component.html',
    styleUrls: ['./new-game-wizard.component.css']
})
export class NewGameWizardComponent implements OnInit {
    gameTitle: string;
    selectedGameType: string;
    gameMessage: string;
    ownerName: string;

    // Eventually these will be a list of strings in the database so games can be toggled on/off easily
    availableGameTypes = [
        {value: '7 up, 7 down'},
        {value: 'Euchre'},
        {value: 'Go Fish'}
    ];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<NewGameWizardComponent>) { }

    ngOnInit() {
    }

    createAndClose() {
        const gameConfig = {
            title: this.gameTitle || 'New game',
            owner: this.ownerName || 'Anonymous',
            message: this.gameMessage || '',
            type: this.selectedGameType || this.availableGameTypes[0].value,
            dateCreated: new Date().toISOString()
        };

        // TODO: Do something that shows that it is saving...
        const createGame = Object(firebase).functions().httpsCallable('createGame');
        createGame(gameConfig).then((result) => {
            this.dialogRef.close();
        });
    }

}
