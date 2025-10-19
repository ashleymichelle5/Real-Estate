

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
      location: "Single Family",
      image: project_img_1
    },
    {
      title: "Rutherford",
      price: "$665,000",
      location: "Single Family",
      image: project_img_2
    },
    {
      title: "Union City",
      price: "$760,000",
      location: "Condominium",
      image: project_img_3
    },
    {
      title: "Passaic",
      price: "$585.000",
      location: "Single Family",
      image: project_img_4
    },
    {
      title: "Teanack",
      price: "$4,700",
      location: "Rental",
      image: project_img_5
    },
    {
      title: "Edgewater",
      price: "$3,300",
      location: "Rental",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

export default assets;