import React from 'react'
import styled from 'styled-components';
import banner from './banner1.jpg';
const BannerImg = styled.div`
   width: 100%;
   height: 586px;
   background-image: url(${banner});
   background-size: cover; 
`

export default function Banner() {
  return (
    <div className="container">
        <BannerImg></BannerImg>
    </div>
  )
}
