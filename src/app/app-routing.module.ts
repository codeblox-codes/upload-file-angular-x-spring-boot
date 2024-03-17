import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListPageComponent } from './features/pages/content-list-page/content-list-page.component';
import { UploadPageComponent } from './features/pages/upload-page/upload-page.component';

const routes: Routes = [
  { path: '', component: ContentListPageComponent },
  { path: 'users', component: ContentListPageComponent },
  { path: 'add-user', component: UploadPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
