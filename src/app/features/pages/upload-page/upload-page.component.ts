import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit{
  
  constructor(private router: Router) { }


  ngOnInit(): void {
    initFlowbite()
  }

  addUser() {
    this.navigateToUserList();
  }

  navigateToUserList(){
    this.router.navigate(['users'])
  }
}
