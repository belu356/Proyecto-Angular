import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {post} from './post.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }
  getAll(): Observable<post[]> {
    return this.http.
    get('http://jsonplaceholder.typicode.com/posts').
    map(data=>data.json());
  }
  
get (postId:number): Observable<post>{
  return this.http.get('http://jsonplaceholder.typicode.com/posts').map(data=> data.json());

}
}



