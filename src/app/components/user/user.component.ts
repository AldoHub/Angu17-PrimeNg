import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//primeng
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableModule, HttpClientModule, IconFieldModule, InputIconModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  constructor(private httpClient:HttpClient){}
  @ViewChild('dt2') dt2: Table | undefined;
  users!: object[];

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt2!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  ngOnInit() {

    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any) => {
      this.users = users;
    });
    
}

}

