import  React, { useEffect, useState, useMemo } from 'react';
import * as S from './style';
import RestaurantTile from './card';
import {scrollWithAnimation, throttle} from './scrollHelper'
// const trackOfFoldedItems = {}

const RestaurantList = ({list, activeCategory, setCategoryWiseRestaurants, setActiveCategory, setShowAll, showAll}) => {

  const [restaurants, setRestaurants] = useState();
  const [startScroll, setStartScroll] = useState(false);

  useEffect(()=>{
    list && setRestaurants(Object.keys(list))
  }, [list, activeCategory]);

  useEffect(()=>{
    let activeCategorySection = document.getElementById(activeCategory);
    if(activeCategorySection) {
      if(showAll) {
        setShowAll(false)
      }
      // for smooth scrolling in safari
      scrollWithAnimation(activeCategorySection, 1500);
    }
  },[activeCategory]);

  

  const filteredArr  =  restaurants || [];

  const rowHandler = (category) => {
    
    let tempList = {...list};
    let {foldedItems,  restaurantList} = {...tempList[category]};
    if(restaurantList.length < foldedItems+5) {
      foldedItems  =  restaurantList.length
    }
    else  {
      foldedItems += 6;
    }
    tempList[category].foldedItems = foldedItems;
    setCategoryWiseRestaurants(tempList)
    
  }

  const onScrollHandler = (event) => {
    event.preventDefault();
    if(startScroll) {
      let cgList = list && Object.keys(list) || [];

      let i = 0;
      let notInViewLatestCgScrolledUp = Number.NEGATIVE_INFINITY;
      let scrolledUpCgIndex = null;

      // iterating over the list of content groups to check which is in view right now
      for(i = 0; i < cgList.length; i++) {
        let ele = document.getElementById(cgList[i]);
        if(ele) {
          const parentNodeConfig = ele.parentElement.getBoundingClientRect();
          const childNodeConfig = ele.getBoundingClientRect();

          if(parentNodeConfig && childNodeConfig && childNodeConfig.top > 0 && childNodeConfig.top <= (parentNodeConfig.top + parentNodeConfig.height)) {
            break;
          }
          if(childNodeConfig && childNodeConfig.top < 0 && childNodeConfig.top > notInViewLatestCgScrolledUp) {
            notInViewLatestCgScrolledUp = childNodeConfig.top;
            scrolledUpCgIndex = i;
          }
        }
      }

      if(cgList[i]) {
        setActiveCategory(cgList[i]);
      } else if (cgList[scrolledUpCgIndex]) {
        setActiveCategory(cgList[scrolledUpCgIndex]);
      }
      setShowAll(false)
    }
  }

  const scrollToggler = () => {
    setStartScroll(prev=>!prev)
  }
  

  return (
    <S.RestaurantList onScroll={onScrollHandler} onMouseEnter={scrollToggler} onMouseLeave={scrollToggler}>
      {filteredArr.map((val)=>{
        return (
          <div id={val} key={val}>
            <S.CategoryName >{val}</S.CategoryName>
            <S.RestaurantRow >
              { 
                list[val].restaurantList.map((item,index)=> {
                  let {foldedItems, restaurantList} = list[val];
                  return (index<=foldedItems ? 
                  <RestaurantTile key={item.name+index} restaurantObj={item} indexForImages={index} /> : index === foldedItems+1 ? 
                  <RestaurantTile 
                    key={item.name+index} 
                    moreItems={true} 
                    leftItems={restaurantList.length-1-foldedItems} 
                    categoryName={val} 
                    rowHandler={rowHandler}
                  />: null)
                })
              }
            </S.RestaurantRow>
          </div>
        )
      })}
      
    </S.RestaurantList>
  )
}
export default RestaurantList;
