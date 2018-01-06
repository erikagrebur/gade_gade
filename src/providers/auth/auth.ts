import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor() {
  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string, username: string): Promise<any> {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      console.log("USEEEER", username);
      firebase
      .firestore()
      .collection('/users')
      .doc(newUser.uid)
      .set({ 
        email: email,
        username: username, 
        played_times: 0,
        completed_games: {
          games_city: {},
          games_name: {}
        }
       });
    });
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }
}
