// Correct file name should be products.js (not list.js, unless renamed)
// import image from '../../../assets/Images/bottle.png'
import bottle from '../../../assets/Images/bottle.png'
import bottle1 from '../../../assets/Images/bottle1.jpg'
import empty from '../../../assets/Images/empty.png'
import iphone from "../../../assets/Images/iphone.jpg"
// iphone 13 Pro Max images
import iphone13 from "../../../assets/Images/iphone13s.jpg"
// Iphone 14 Pro Max images
import iphone14 from "../../../assets/Images/iphone_14.png"
import iphone_14_black from "../../../assets/Images/iphone_14_black.png"
import iphone_14_blue from "../../../assets/Images/iphone_14_blue.png"
// Iphone 16 Pro Max images
import iphone16pro from "../../../assets/Images/iphone-16-pro.png"
import iphone16pink from "../../../assets/Images/iphone_16_pink.png"
import iphone16white from "../../../assets/Images/iphone_16_white.png"
// Smart Watch images
import watch1 from "../../../assets/Images/watch1.png";
import watch1a from "../../../assets/Images/watch1a.png";
import watch1b from "../../../assets/Images/watch1b.png";
import watch1c from "../../../assets/Images/watch1c.png";
// Macbook Pro 16 images
import mac1 from "../../../assets/Images/mac1.png";
import mac1a from "../../../assets/Images/mac1a.png";
import mac1b from "../../../assets/Images/mac1b.png";
import mac1c from "../../../assets/Images/mac1c.png";
// Wireless Earbuds images
import buds1 from "../../../assets/Images/buds1.png";
import buds1a from "../../../assets/Images/buds1a.png";
import buds1b from "../../../assets/Images/buds1b.png";
// Bluetooth Speaker images
import bts1 from "../../../assets/Images/bts1.png";
import bts1a from "../../../assets/Images/bts1a.png";
import bts1b from "../../../assets/Images/bts1b.png";
import bts1c from "../../../assets/Images/bts1c.png";
// Gaming Mouse images
import ps1 from "../../../assets/Images/ps1.png";

export const products = [

      {
        id: 1,
        name: "Iphone 16 Pro",
        price: 1120,
        description: "Premium vintage leather shoulder bag with adjustable strap.",
        image: iphone16pro,
        gallery: [iphone16pink, iphone16pro, iphone16white],
      },
      {
        id: 2,
        name: "Iphone 14 Pro Max",
        price: 985,
        description: "Iphone 14 Pro Max, 256GB, Space Gray, Unlocked, Excellent Condition.",
        image: iphone14,
        gallery: [iphone14, iphone_14_black, iphone_14_blue],
      },
      {
        id: 3,
        name: "Smart Watch X10",
        price: 199,
        description: "Feature-packed smart watch with customizable straps.",
        image: watch1,
        gallery: [
          watch1a,
          watch1b,
          watch1c,
        ],
      },
      {
        id: 5,
        name: "MACBOOK PRO 16",
        price: 11120,
        description: "Track your fitness and stay connected.",
         image: mac1,
            gallery: [
              mac1a,
              mac1b,
              mac1c,],
      },

        {
    id: 6,
    name: "Wireless Earbuds",
    price: 89,
    description: "Noise-cancelling, compact and powerful.",
    category: "Audio",
 image: buds1,
              gallery: [
                buds1a,
                buds1b,
                buds1,],  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 750,
    description: "Portable bass-heavy audio powerhouse.",
    category: "Audio",
     image: bts1,
              gallery: [
                bts1a,
                bts1b,
                bts1c,
              ],
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: "750",
    description: "Ergonomic gaming mouse with customizable buttons.",
    category: "Audio",
     image: ps1,
              gallery: [
                bts1a,
                bts1b,
                bts1c,
              ],
  },
//   {
//     id: 7,
//     name: "Fitness Tracker",
//     description: "Track your heart rate and steps daily.",
//     price: "$55",
//     category: "Wearables",
//     image: "/images/tracker.jpg",
//   },
//   {
//     id: 8,
//     name: "Phone Case",
//     description: "Slim and protective phone case.",
//     price: "$25",
//     category: "Accessories",
//     image: "/images/phone-case.jpg",
//   },
//   {
//     id: 9,
//     name: "Smart Glasses",
//     description: "AR-enabled smart glasses for the future.",
//     price: "$230",
//     category: "Wearables",
//     image: "/images/glasses.jpg",
//   },
];
