import { Component, OnInit } from '@angular/core';
//import {CommentsService} from "../comments.service";
import {ActivatedRoute} from '@angular/router';
import {PostService} from "../post.service";
import {post} from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  post?: post;

  constructor(private route: ActivatedRoute, 
    private service : PostService){ }
  private getPost(postId: number){
    this.service.get(postId).subscribe(post=>{
      this.post = post;
    });
  }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      let postId = params['postId'];
      this.getPost(postId);
    })
  }
}      
   