import { Component, inject } from '@angular/core';
import { HttpClient, httpResource} from '@angular/common/http';
import { Post } from './post';
import { signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [JsonPipe],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  public http = inject(HttpClient)
  readonly posts = httpResource<Post[]>(() => 'https://jsonplaceholder.typicode.com/posts')
  addPost(post: Post) {
    this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post)
    .subscribe(newPost => {
    this.posts.update(arr => [...arr, newPost])
    }) 
  }
}
