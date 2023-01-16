import { useEffect, useRef } from "react";
import Typed from "typed.js";


const TypedData = ({data}) => {

     const strings = ["Hello World", "My name is Kebede"]
     const typedInfo = useRef(null)

     useEffect(() => {
          const options = {
               strings: data,
               typeSpeed: 100,
               backSpeed: 20,
               smartBackspace: false,
               loop: true
          };

          const typed = new Typed(typedInfo.current, options)

          return () => {
               typed.destroy();
          };

     }, []);
     
     

     return ( 
          <h4 className="d-inline-block text-light" ref={typedInfo}></h4>
      );
}
 
export default TypedData;