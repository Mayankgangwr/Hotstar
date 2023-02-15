import React from "react";
const FoodCard = ({id, title, mrp, img, price,AddCart}) => {
  return (
        <>
        <label key={id} className="col-xl-3 card-item col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3">
               <input type="checkbox" style={{display:'none'}} onChange={AddCart} value={id}/>
               <div className="card">
                   <div className="card-body p-2">
                      <div className="d-flex text-black p-0">
                         <img src={img}
                           alt="Generic placeholder image" className="item-logo" />    
                         <div className='row ps-3'> 
                              <div className='col-12'>
                                   <h6 className='text-start'>{title}</h6>
                              </div>
                              <div className='col-12'>
                                 <span className='price sale-price pe-2'>${price}</span>
                                 <span className='price mrp'>${mrp}</span>
                              </div>
                         </div>
                      </div>
                   </div>
               </div>
          </label>
      </>
    );
};
export default FoodCard;
