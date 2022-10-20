import { Component, OnInit } from '@angular/core';
import {CarouselImage} from "../../model/CarouselImage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  images = [
    {
      imageSrc:'./assets/images/img1.jpg',
      imageAlt:'img1',
    },
    {
      imageSrc:'./assets/images/img2.jpg',
      imageAlt:'img2',
    },
    {
      imageSrc:'./assets/images/img3.jpg',
      imageAlt:'img3',
    }
  ]


  ngOnInit(): void {
  }

}
