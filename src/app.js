import React,  {useState, useEffect} from 'react';
import RestaurantList from './restaurant/restaurantList';
import CategorySideBar from './categories/sidebar';
import * as S from './style';
import Header from './header';
import SeeAllRestaurant from './seeAll/seeAllRestaurant';
const App = () =>  {

  const [categoryWiseRestaurants, setCategoryWiseRestaurants] = useState(null);
  const [activeCategory, setActiveCategory]  = useState();
  const [allCategoryRestaurants, setAllCategoryRstaurant] = useState();
  const [showAll, setShowAll] = useState(false);
  const [dataLoaded, setDataLoadStatus] = useState(false);

  useEffect(()=> { //hooks for fetching api
    fetchCategory()
  },[]);


  useEffect(()=> { // see all restaurant scroller
    let elem = document.getElementById('see all');
    if(elem) {
      elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  },[showAll]);
  

  const fetchCategory = async () => {
    const allCategory =  {};
    let allRestaurantsWithoutCategory  = [];
    try {

      let  result =  await fetch('http://cdn.adpushup.com/reactTask.json');
      let jsonResult = await result.json();

      jsonResult.forEach((val)=>{
        let foldedItems = 4
        allRestaurantsWithoutCategory.push(...val.restaurantList);
        allCategory[val.category]  = {restaurantList: val.restaurantList, foldedItems};
      });

      // adding exclusive restuarant in  only on swiggy category
      allRestaurantsWithoutCategory.forEach((val)=>{
        if(allCategory['only on swiggy'] != undefined) {
          val.isExlusive && allCategory['only on swiggy'].restaurantList.push(val);
        }
        else {
          if(val.isExlusive)
            allCategory['only on swiggy'] = {restaurantList: [val], foldedItems:4}
        }
      });
      setAllCategoryRstaurant(allRestaurantsWithoutCategory);
      setCategoryWiseRestaurants(allCategory);
      setDataLoadStatus(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    { dataLoaded && 
      <S.Wrapper>
        <S.GlobalStyle/>
        <Header />
        <S.ContentWrapper> 
          <CategorySideBar 
            categoryWiseRestaurants={categoryWiseRestaurants} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            setShowAll={setShowAll} 
            showAll={showAll}
            totalRestaurantCount={allCategoryRestaurants && allCategoryRestaurants.length}
          />
          <RestaurantList 
            list={categoryWiseRestaurants} 
            setCategoryWiseRestaurants={setCategoryWiseRestaurants} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            setShowAll={setShowAll} 
            showAll={showAll}
          />
        </S.ContentWrapper>
        {showAll && <SeeAllRestaurant allCategoryRestaurants={allCategoryRestaurants}/>}
      </S.Wrapper>
    }
    </>
  )
}

export default App;