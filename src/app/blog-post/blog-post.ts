import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCasePipe,DatePipe } from '@angular/common';
@Component({
  selector: 'app-blog-post',
  imports: [UpperCasePipe,DatePipe,CommonModule],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css',
})
export class BlogPost {
  post ={title:"angular directive and pipes",
  author:"ST",
  publishDate:new Date("2025-09-12"),
  content: "This is dummy content about angular piped and directives ",
isEditable:true,
comments:["Great Explantion","Helpful articles","nice","easy to understand"]
  }
   
}
