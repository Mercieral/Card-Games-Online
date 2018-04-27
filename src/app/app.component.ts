import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: Observable<any>;

    constructor(private db: AngularFireDatabase) {
        this.title = db.object('title').valueChanges();
    }

    signin() {
        alert('LOL you thought this was implemented.\nAren\'t Popup alerts annoying?');
    }
}
