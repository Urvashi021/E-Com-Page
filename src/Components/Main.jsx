import React from 'react'
import { Container } from '@mui/material'
import ProductCard from './ProductCard'
import './Main.css'

const productList = [
  {
    id: 1,
    name: "Smashic brand logo shoe - PUMA",
    description: "Puma Smashic Unisex Sneakers",
    price: 1000,
    image:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2023/1/31/ce9c89f5-ab94-4754-8f56-00a6747173e41675143770544PumaSmashicUnisexSneakers1.jpg",
  },
  {
    id: 2,
    name: "Women yoke design kurta set - Biba",
    description: "Jaipuri Designer Kurta",
    price: 2000,
    image:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
  },
  {
    id: 3,
    name: "Kids Wear",
    description: "Jumpsuit",
    price: 600,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19616642/2022/8/23/0c27b1b6-e3fc-438b-a920-97bb2b61b7701661256313619ATUNGirlsRedBlueStripedJumpsuit1.jpg",
  },
  {
    id: 4,
    name: "Kids Wear",
    description: "Ethnic Dress",
    price: 1500,
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14822662/2021/7/14/37eb4c5f-1c49-474f-a439-ef724ddd208d1626255579378pspeachesGirlsYellowFloralEmbroideredTieredKurtiwithSkirtWit3.jpg",
  },
  {
    id: 5,
    name: "Hand Bag",
    description: "Van Heusen - Textured Handheld Bag",
    price: 1200,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22697414/2023/4/27/2ed79578-f4a4-41ce-bcf7-1f989d9660411682573537554-Van-Heusen-Women-Handbags-2341682573537072-1.jpg",
  },
  {
    id: 6,
    name: "Home Furnishing",
    description: "Mosaic Cluster Ceiling Lamp",
    price: 2600,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16422656/2021/12/8/8d6cd22f-e27b-40cd-ac52-85e2e1fe946f1638948863172CeilingLamps1.jpg",
  },
];

function Main() {
  return (
    <div>
      <Container className="product-list" maxWidth="lg">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </div>
  );
}

export default Main;