import { Component } from '@angular/core';
import { BlogCard } from '../../components/blog-card/blog-card';
import { IBlog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-homepage',
  imports: [BlogCard],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  blogs: IBlog[] = [
    {
      img: 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=768',
      title: 'Sample',
      description: 'Sample',
      date: 'Sample',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=768',
      title: 'Sample',
      description: 'Sample',
      date: 'Sample',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=768',
      title: 'Sample',
      description: 'Sample',
      date: 'Sample',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=768',
      title: 'Sample',
      description: 'Sample',
      date: 'Sample',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=768',
      title: 'Sample',
      description: 'Sample',
      date: 'Sample',
    }
  ];
}
