import  React from 'react';
import * as S from './style';
import { imageArray } from './images';
const RestaurantTile = ({restaurantObj, moreItems, rowHandler, categoryName, leftItems, indexForImages}) => {

  let image = imageArray[indexForImages%10];
  debugger
  return (
    <>
      { moreItems ? 
      <S.Tile moreItems={true}>
        <S.Moreitems onClick={()=>rowHandler(categoryName)}>+ {leftItems} More Items</S.Moreitems>
      </S.Tile> :
      <S.Tile>
        <S.ImageWrapper>
          <S.Image src={image} alt={`img-${restaurantObj.name}`} />
        </S.ImageWrapper>
        <S.RestaurantName>{restaurantObj.name}</S.RestaurantName>
        <S.FoodType>{restaurantObj.food_types && restaurantObj.food_types.join(', ')}</S.FoodType>
        <S.MoreInfo>
          <S.Rating>{restaurantObj.ratings || '-' }</S.Rating>
          <S.Price>{restaurantObj.delivery_time || '-' }</S.Price>
          <S.Price>&#8377;{restaurantObj.price_for_two || '100'} for two</S.Price>
        </S.MoreInfo>
        <S.QuickView>Quick View</S.QuickView>
      </S.Tile>

      }
    </>
  )
}
export default RestaurantTile;
