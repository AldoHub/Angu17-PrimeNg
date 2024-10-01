import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//primeng
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


//interfaces
import { City } from '../../interfaces/city';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [DropdownModule, FormsModule, InputTextModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  cities: City[] | undefined;

  selectedCity: City | undefined;
  fullname: string | undefined;
  bio: string | undefined;
 
  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }


}


//TODO - 20:01