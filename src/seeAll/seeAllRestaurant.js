import React from 'react';
import RestaurantTile from '../restaurant/card';
import * as S from './style';
import * as SS from '../restaurant/style';
const SeeAllRestaurant = ({allCategoryRestaurants}) => {

  return (
    <S.AllRestraurantWrapper>
      <SS.CategoryName center={true}>All Restaurants</SS.CategoryName>
      <S.SeeAllRestaurant id="see all">
        {
          allCategoryRestaurants && allCategoryRestaurants.map((item, index)=><RestaurantTile restaurantObj={item} indexForImages={index}/>)
        }
      </S.SeeAllRestaurant>
    </S.AllRestraurantWrapper>
  )
}

export default SeeAllRestaurant;