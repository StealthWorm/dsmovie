import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

//bootstrap: breakpoints para definir tamanho dinamicos de componentes de acordo com o tamanho da tela
/*
small             sm
medium            md
large             lg
extra large       xl
extra extra large xxl 
*/

function Listing() {
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
