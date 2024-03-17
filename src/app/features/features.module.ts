import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { ContentListPageComponent } from './pages/content-list-page/content-list-page.component';



@NgModule({
  declarations: [
    UploadPageComponent,
    ContentListPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
