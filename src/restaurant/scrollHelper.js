
//Note: this code is taken from my existing project 
export const scrollWithAnimation = (elem, duration) => {

  // Parent Config
  let parent = elem.parentElement;
  let parentTop = parent.offsetTop;

  // Elem Config
  let elemTop = elem.offsetTop;
  // Flag to top
  let backToZero = false;

  let intialDistance = Math.abs(Math.abs(elemTop) - Math.abs(parentTop));
  // Handling the case in which scroll is somewhere but not on top, & we are scrolling it to top
  if(!intialDistance && parent.scrollTop) {
    backToZero = true;
    intialDistance = Math.abs(parent.scrollTop);
  }
  const totalScrollDistance = intialDistance;

  // Need this flag to validate we are moving down or up
  const currentScrollPos = parent.scrollTop;

  let scrollY = parent.scrollTop, oldTimestamp = null;

  function step(newTimestamp) {

    if(oldTimestamp !== null) {

      // If we are moving down
      if(currentScrollPos < totalScrollDistance) {
        scrollY += totalScrollDistance * (newTimestamp - oldTimestamp) / duration;

        if(scrollY >= totalScrollDistance) {
          return parent.scrollTop = totalScrollDistance;
        }
        parent.scrollTop = scrollY;
      } else {
        // If we are moving up
        scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;

        if(backToZero && scrollY <= 0) {
          return parent.scrollTop = 0;
        }

        if (scrollY <= totalScrollDistance && !backToZero)  {
          return parent.scrollTop = totalScrollDistance;
        }
        parent.scrollTop = scrollY;
      }
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
