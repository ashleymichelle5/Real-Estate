

import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import brand_img from './brand_img.jpeg'
import project_img_1 from './project_img_1.jpeg'
import project_img_2 from './project_img_2.jpeg'
import project_img_3 from './project_img_3.jpeg'
import project_img_4 from './project_img_4.jpeg'
import project_img_5 from './project_img_5.jpeg'
import project_img_6 from './project_img_6.jpeg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'


export const assets = {
    cross_icon,
    menu_icon,
    star_icon,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Leonia",
      price: "$900,000",
      type: "Single Family",
      image: project_img_1
    },
    {
      title: "Rutherford",
      price: "$665,000",
      type: "Single Family",
      image: project_img_2
    },
    {
      title: "Union City",
      price: "$760,000",
      type: "Condominium",
      image: project_img_3
    },
    {
      title: "Passaic",
      price: "$585.000",
      type: "Single Family",
      image: project_img_4
    },
    {
      title: "Teanack",
      price: "$4,700",
      type: "Rental",
      image: project_img_5
    },
    {
      title: "Edgewater",
      price: "$3,300",
      type: "Rental",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Sea Na",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Sea Na",
        rating: 5,
        text: "Incredible agent and was patient with our investors and group for 6 months. Went above and beyond as an agent to help our team out finding the place. Truly a pleasure and will be working with Joseph in the near future again. Pleasure and thank you"
    },
    {
        name: "Anabelle Roa",
        image: profile_img_2,
        alt: "Portrait of Anabelle Roa",
        rating: 5,
        text: "Joe is an amazing agent! He did an outstanding job assisting us with the purchase of our first home. He actually listened to our needs, our wants and most importantly our budget and found us our dream home. He was/is extremely professional and patient and never made us feel that we were wasting his time..."
    }, 
    {
        name: "Maksat Sadyrov",
        image: profile_img_3,
        alt: "Portrait of Maksat Sadyrov",
        rating: 5,
        text: "Working with Joseph was a fantastic experience. His expertise, responsiveness, and attention to detail made the whole process seamless. Highly recommend!!"
    }
];

export default assets;