import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from 'utils/requests';

//bootstrap: breakpoints para definir tamanho dinamicos de componentes de acordo com o tamanho da tela
/*
small             sm
medium            md
large             lg
extra large       xl
extra extra large xxl 
*/

function Listing() {

   //forma errada
   axios.get(`${BASE_URL}/movies?size=12&page=0`)
      .then(response => {
         console.log(response.data);
      });

   return (
      <>
         <Pagination />
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
            </div>
         </div>
      </>
   );
}

export default Listing;
