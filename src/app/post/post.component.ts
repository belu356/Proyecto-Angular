import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
        comments:Array<any> =[];
        posts:any;


    constructor(
      private route:ActivatedRoute,
      private p: PostService,
      private c: CommentsService
    ) { }
  
    
      
    }
  ngOnInit() {
  }
    
   
    
  
