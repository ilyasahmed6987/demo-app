import { Component, input } from '@angular/core';
import { IBlog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCard {

  blog = input<IBlog>();
}
