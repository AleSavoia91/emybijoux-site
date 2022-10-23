import { Component, OnInit } from '@angular/core';
import {CarouselImage} from "../../model/CarouselImage";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor() {
    this.categories = [
      {
        categoryId: 1,
        categoryName:'Orecchini',
        shortDescription:'Lorem ipsum orecchini lorem ipsum orecchini',
        categoryImgPath:'./assets/images/img5.jpg'
      },
      {
        categoryId: 2,
        categoryName:'Collane',
        shortDescription:'Lorem ipsum collane lorem ipsum collane',
        categoryImgPath:'./assets/images/img3.jpg'
      },
      {
        categoryId: 3,
        categoryName:'Bracciali',
        shortDescription:'Lorem ipsum collane lorem ipsum collane',
        categoryImgPath:'./assets/images/img4.jpg'
      },
      {
        categoryId: 4,
        categoryName:'Anelli',
        shortDescription:'Lorem ipsum collane lorem ipsum collane',
        categoryImgPath:'./assets/images/img6.jpg'
      },
      {
        categoryId: 5,
        categoryName:'Altro',
        shortDescription:'Lorem ipsum collane lorem ipsum collane',
        categoryImgPath:'./assets/images/img6.jpg'
      },
    ]
  }

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
