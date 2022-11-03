import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() {  }
  async getStore(){
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "testid"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.get("id")}`);
      console.log(`${doc.get("vle")}`);
      
    });
  }

  async setStore(id: number,vle: String){
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "testid"), {
        id: id,
        vle: vle
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async getasync(){
    alert("OKOKOK getasync");
  }
  login() {

    

  }
  logout() {

  }
}
