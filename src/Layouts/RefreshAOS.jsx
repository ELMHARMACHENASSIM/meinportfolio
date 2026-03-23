import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const RefreshAOS = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on page change (optional but recommended)
    window.scrollTo(0, 0); 
    
    // Tell AOS to recalculate all elements on the new page
    AOS.refresh(); 
  }, [pathname]);

  return null;
};

export default RefreshAOS;