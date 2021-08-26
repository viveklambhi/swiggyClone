import styled from 'styled-components';

export const QuickView = styled.div`
  color: #5d8ed5;
  border-top: 1px solid lightgrey;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;
  padding: 0.5rem 0;
  margin: 0.5rem  0;
  justify-content: center;
  visibility: hidden;
  display: flex;
  align-items: center;
`;

export const Tile = styled.div`
  width: 25.6rem;
  height: 31.4rem;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 2rem 4rem 0;
  cursor: pointer;
  &:hover {
    box-shadow: ${props=>props.moreItems ? 'none': '0px 0px 5px 1px grey'};
    ${QuickView} {
      visibility: visible;
    };
  }
`;

export const RestaurantName = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.8rem;
  margin-top: 1rem;

`;
export const FoodType = styled.p`
  font-size: 1.1rem;
  font-weight: normal;
  line-height: 1.5rem;
  color: lightgray;
  margin-top: 1rem;
`;

export const Rating = styled.span`
  background-color: green;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  width: 40px;
  text-align: center;
  box-sizing: border-box;
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
`;
export const Price = styled.span`
  color: #535665;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.6rem;
  font-weight: 600;
`;
export const DeliveryTime = styled.span`
  color: #535665;
`;  
export const ImageWrapper = styled.div`
  width: 100%;
  height: 16rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const RestaurantList = styled.div`
  padding-left: 5rem;
  width: 85rem;
  display: block;
  overflow-y: scroll;
`;

export const RestaurantRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  &:not(:last-of-type) {
    border-bottom: 1px dashed lightgrey;
  }
`;

export const CategoryName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-transform: capitalize;
  /* margin: 1rem 0; */
  ${props=>props.center && `text-align: center;`}
`;

export const Moreitems = styled.div`
  width: 22rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #e46d47;
  color: #e46d47;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.6rem;
  &:hover {
    box-shadow: 0px 0px 5px 1px grey;
  }
`;

