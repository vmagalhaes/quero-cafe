import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  insert(coffee: any) {
    this.db.list('coffee').push(coffee)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(coffee: any, key: string) {
    this.db.list('coffee').update(key, coffee)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('coffee')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`coffee/${key}`).remove();
  }
}