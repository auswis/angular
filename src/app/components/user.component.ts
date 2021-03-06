import { Component }   from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>
  {{name}}
  </h1>
  <p > <strong> Email:</strong> {{email}} </p>
  <p><strong> Adresse: </strong>{{address.street}} {{address.city}} {{address.state}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hoobies</h3>
    <ul>
        <li *ngFor="let hobby of hobbies; let i =index">
            {{hobby}} <button (click)="deleteHobby(i)">X</button>
        </li>
    </ul>
    <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label><br />
        <input type="text"  #hobby/><br />
    </form>
  </div>
  <hr />
  <h3>Edit User</h3>
  <form>
    <label>Name: </label><br />
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label>Email: </label><br />
    <input type="text" name="email" [(ngModel)]="email" /><br />
    <label>Street: </label><br />
    <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
    <label>City: </label><br />
    <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
    <label>State: </label><br />
    <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
  </form>

  `,
 
})
export class UserComponent  { 
  name: String;
  email: String;
  address: Adresse;
  hobbies: string[];
  showHobbies: boolean;
// test

  constructor() {
    this.name = 'Dominic'; 
    this.email = 'dominic@dw.com',
    this.address = {
         street: 'Frascatistraße 3',
         city: 'Boston',
         state: 'MA'
        }
    this.hobbies = ["Snowboar", "Musik", "Cooking"]
    this.showHobbies = false;

  

    
  }

  toggleHobbies(){
      if(this.showHobbies == true){
        this.showHobbies = false;
      }else{
        this.showHobbies = true;
      }  
  }

addHobby(hobby: string){
    this.hobbies.push(hobby);
}

deleteHobby(index: number){
    this.hobbies.splice(index, 1);
}

}

interface Adresse{
    street:String;
    city:String;
    state:String;
}