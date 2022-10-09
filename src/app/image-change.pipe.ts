import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageChange'
})
export class ImageChangePipe implements PipeTransform {

  transform(image: any): any {
   
  switch(image){
    case 'mohsin':
      image ='/assets//teacher-card/mohsin.jpg';
      break;

      case "nokia-image":
        image ='https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600';
        break;

        case 'image-3':
      image ='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=600';
      break;

      case 'image-4':
        image ='https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600';
        break;

        case 'image-5':
      image ='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600';
      break;
  }
  return image;
}
  }


