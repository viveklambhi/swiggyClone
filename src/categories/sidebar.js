import  React, { useEffect, useState, useRef } from 'react';
import * as S from './style';

const CategorySideBar = ({
  categoryWiseRestaurants, 
  activeCategory, 
  setActiveCategory, 
  setShowAll, 
  showAll, 
  totalRestaurantCount}) => {

  const categoriesOnly = categoryWiseRestaurants && Object.keys(categoryWiseRestaurants) || [];
  debugger
  const sideBarRef = useRef();

  useEffect(()=>{
    !activeCategory && categoryWiseRestaurants  && setActiveCategory(categoriesOnly[0])
  },[categoryWiseRestaurants]);

  const seeAllHandler = () => {
    let currentRef = sideBarRef.current;
    let elem = document.getElementById('see all');
    currentRef.style.position = 'static';
    setShowAll(true);
    if(elem && showAll) {
      elem.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
    }
  }

  return (
    <S.SideBar>
      <S.CategoryList ref={sideBarRef}>
        {categoriesOnly.map((val, index)=>
          <S.CategoryItem 
            key={val} 
            active={activeCategory===val} 
            onClick={()=>setActiveCategory(val)}>
            <p>{val}</p>
            <span>{categoryWiseRestaurants[val].restaurantList.length} options</span>
          </S.CategoryItem>)
        }
        <S.CategoryItem 
          key={"see all"} 
          onClick={seeAllHandler}>
          <p>See All</p>
          <span>{totalRestaurantCount ||  '0'} options</span></S.CategoryItem>
      </S.CategoryList>
    </S.SideBar>
  )
}

export default CategorySideBar;
