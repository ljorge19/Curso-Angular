import { BadInput } from './../common/validators/bad-input';
import { NotFoundError } from './../common/validators/not-found-error';
import { AppError } from './../common/validators/app-error';
import { PostService } from '../services/post.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
 
  posts: any[];
  

  constructor(private service: PostService) { 
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0,0,post);

    input.value='';

        this.service.create(post)
        .subscribe(
          newpost =>{
          post['id'] = newpost.id;
          
        }, (error: Response) => {
             this.posts.splice(0,1);
          if (error instanceof BadInput) {
             //this.form.setErrors(error.originalError);
          }
          else throw error;
             
              
         
       }) 
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(updatedpost => {
    console.log(updatedpost)
  }); 
}
 
 deletePost(post) {
  let index = this.posts.lastIndexOf(post);
  this.posts.splice(index,1)
  /* this.service.deletPost(345) */
    this.service.delete(post)
   .subscribe(
     null,  
   (error: AppError) => {
     this.posts.splice(index, 0, post)
     if (error instanceof NotFoundError) {
        alert('this post has already been deleted')
     }
     else throw error;
  }) 
}

}
