import { RouterProvider } from "react-router-dom";
import routerDom from "./Layouts/Index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,     // Animation happens only once
    offset: 0,      // Trigger animation as soon as the element is in view
    delay: 0,       // No delay on the first load
  });

  // Force a refresh after a tiny delay to catch elements rendered by React
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}, []);
  return (
    <>
      <RouterProvider router={routerDom} />
    </>
  );
}

export default App;
