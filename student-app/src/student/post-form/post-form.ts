import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { signal } from '@angular/core';
import { Post } from '../post-list/post';

@Component({
  selector: 'app-post-form',
  imports: [],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostForm {

  public readonly postForm = new FormGroup({
    userId: new FormControl('1'),
    title: new FormControl('', { nonNullable: true }),
    body: new FormControl('', {nonNullable: true})
  })

  
  
}


