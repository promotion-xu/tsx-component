import { Component, Vue } from 'vue-property-decorator';
import { face } from '@/../static/mock/face';


import './index.scss';

@Component({})
export default class Face extends Vue {

// face = [
//   {
//     faceId: 1,
//     mediaUrl: 'http://10.9.242.79:8080/0802/st052/1564464526130.jpg',
//     imgInfo: { // 图片的宽高
//       width: 1920,
//       height: 1080  
//     },
//     vertices: [
//       {
//         x: 1244, // 左上顶点的x坐标
//         y: 362  // 左上顶点的y坐标
//       },
//       {
//         x: 1284, // 右下顶点的x坐标 
//         y: 402  // 右下顶点的
//       }
//     ]
//   },
//   {
//     faceId: 2,
//     mediaUrl: 'http://10.9.242.79:8080/0802/st052/1564464526130.jpg',
//     imgInfo: {
//       width: 1920,
//       height: 1080
//     },
//     vertices: [
//       {
//         x: 1065,
//         y: 320
//       },
//       {
//         x: 1109,
//         y: 366
//       }
//     ]
//   },
//   {
//     faceId: 3,
//     mediaUrl: 'http://10.9.242.79:8080/0802/st052/1564464526130.jpg',
//     imgInfo: {
//       width: 1920,
//       height: 1080
//     },
//     vertices: [
//       {
//         x: 998,
//         y: 347
//       },
//       {
//         x: 1044,
//         y: 391
//       }
//     ]
//   }
// ]

  // 多人脸图片属性
  imgUrl: string = '';
  imgWidth: number = 0;
  imgHeight: number = 0;
  scale: number = 2; // > 1 表示缩小, 小于1表示放大
  // 

  render() {
    return (
      <div class="face-detect">
        <img 
          class="faceImg" 
          style={{width: this.imgWidth / 100 + 'rem', height: this.imgHeight / 100 + 'rem'}} 
          src={this.imgUrl} 
          alt="face"
        />
        {
          face.map((v: any, index: any) => {
            return (
              <div 
                class={`face--${index}`}
                style={{
                  position: 'absolute',
                  width: (v.vertices[1].x - v.vertices[0].x) / this.scale / 100 + 'rem',
                  height: (v.vertices[1].y - v.vertices[0].y) / this.scale / 100 + 'rem',
                  left: v.vertices[0].x / this.scale / 100 + 'rem',
                  top: v.vertices[0].y / this.scale / 100 + 'rem',
                  border: '1px solid red'
                }}
              >
              </div>
            )
          })
        }
      </div>
    )
  }

  created() {
    this.imgUrl = face[0].mediaUrl;
    this.imgHeight = face[0].imgInfo.height / this.scale;
    this.imgWidth = face[0].imgInfo.width / this.scale;

  }
}