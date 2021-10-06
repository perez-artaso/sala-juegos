import { Pipe, PipeTransform } from '@angular/core';
import { ECDirection } from '../models/el-camino/ecdirection';
import { RoadBlock } from '../models/el-camino/road-block';

@Pipe({
  name: 'roadblock'
})
export class RoadblockPipe implements PipeTransform {

  transform(roadBlock: RoadBlock | null, ...args: unknown[]): string {

    const images_dir = "assets/images/";
    

    if (roadBlock) {

      let file_name;

      if (
        (roadBlock.from == ECDirection.Down || roadBlock.from == ECDirection.Up) && 
        (roadBlock.to == ECDirection.Down || roadBlock.to == ECDirection.Up)
      ) {
        file_name = "y-road.png";
      } else if (
        (roadBlock.from == ECDirection.Right || roadBlock.from == ECDirection.Left )&& 
        (roadBlock.to == ECDirection.Right || roadBlock.to == ECDirection.Left)
      ) {
        file_name = "x-road.png";
      } else {
        file_name = roadBlock.from.toString() + "2" + roadBlock.to.toString() + "-road.png";
      }
      
      return images_dir + file_name;
    
    } else return images_dir + "firewall.png";
  }

}
