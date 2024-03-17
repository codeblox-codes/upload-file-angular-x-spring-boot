import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-content-list-page',
  templateUrl: './content-list-page.component.html',
  styleUrls: ['./content-list-page.component.scss']
})
export class ContentListPageComponent implements OnInit{

  constructor(private router:Router){}
  
  
  ngOnInit(): void {
    initFlowbite()
  }

  addUser(){
    this.router.navigate(['add-user'])
  }
}
