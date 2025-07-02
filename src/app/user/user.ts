import { Component, Input, Output, EventEmitter, computed, output, input } from '@angular/core';
import { type UserData } from './user.model';
import { Card } from "../shared.ui/card/card";


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card]
})
export class User {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: UserData;
  // @Input({ required: true }) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // avatar = input.required<string>();
  // name = input();

  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });


  //Output decorator method is a long used means while the output function is a relatively new approach
  // @Output() select = new EventEmitter<string>();
  select = output<string>();


  get imagePath() {
    return 'users/' + this.user.avatar;
  }

   onSelectUser() {
    this.select.emit(this.user.id);
   }
}
