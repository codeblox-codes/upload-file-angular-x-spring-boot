import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-content-list-page',
  templateUrl: './content-list-page.component.html',
  styleUrls: ['./content-list-page.component.scss']
})
export class ContentListPageComponent implements OnInit{
  users!: any[];
  localhost = 'http://localhost:9090/'
  constructor(private router:Router, private userService:UploadService){}
  
  
  ngOnInit(): void {
    initFlowbite()
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    });
  }

  addUser(){
    this.router.navigate(['add-user'])
  }
}
