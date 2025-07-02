/* this componet was composed to give an initial random user output and shuffle that output upon a button click */


// import { Component, signal, computed } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.html',
//   styleUrl: './user.css'
// })
// export class User {
//    selectedUser = signal(DUMMY_USERS[randomIndex]);
//    //when using a signal for state changes, cannot rely on the get method but must call a function with the computed method. this informs Angular that a change is occuring within just this specific data
//    imagePath = computed(() => 'users/' + this.selectedUser().avatar)

//   //  get imagePath() {
//   //   return  'users/' + this.selectedUser.avatar
//   //  }

//    onSelectUser() {
//     // console.log('button is buttoning')
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//    }
// }
