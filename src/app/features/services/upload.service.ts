import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  apiUrl = environment.apiUrl + 'users'

  constructor(private httpClient:HttpClient) { }

  saveUser(data:any):Observable<any>{
    return this.httpClient.post(this.apiUrl, data);
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
