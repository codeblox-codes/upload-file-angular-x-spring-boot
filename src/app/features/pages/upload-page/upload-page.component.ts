import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit{
  imageToUpload!: any;
  imageUrl: any;
  userForm!: FormGroup;
  
  constructor(private router: Router, private formBuilder:FormBuilder, private userService:UploadService) { }


  ngOnInit(): void {
    initFlowbite();
    this.initializeUserForm();
  }

  initializeUserForm(){
    this.userForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern('')]],
      name: [null, Validators.required],
      profession: [null, Validators.required],
      bio: [null, Validators.required],
      profileImage: [null]
    })
  }

  get emailControl(){
    return this.userForm.get('email')
  }
  
  get nameControl() {
    return this.userForm.get('name')
  }

  get professionControl() {
    return this.userForm.get('profession')
  }

  get bioControl() {
    return this.userForm.get('bio')
  }

  handleImageInput(event:any){
    this.imageToUpload = event?.target.files.item(0);
    let reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.imageToUpload);
  }

  addUser() {
    const formData = new FormData();
    formData.append('user', JSON.stringify(this.userForm.value));
    formData.append('image', this.imageToUpload);
    this.userService.saveUser(formData).subscribe((data)=>{
      console.log("SAVED")
      this.navigateToUserList();
    },
    (error)=>{
      console.error(error);
    }
    )
  }

  navigateToUserList(){
    this.router.navigate(['users'])
  }
}
