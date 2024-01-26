
import { Routes, Route,Link } from 'react-router-dom';
import Range from '../Pages/Range';
 import Home from '../Pages/Home';
 import IPhone from '../Pages/IPhone';
 import GalaxyPhones from '../Pages/GalaxyPhones';
 import MacBook from '../Pages/MacBook';
 import Infinix from '../Pages/Infinix';
// import React from 'react';
import { SidebarLogic } from './SidebarLogic';


// bootsript start
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

// end

const Sidebar = () => {
  const {
    selectedRange,
    handleRangeFilterClicked,
    handleRangeChange
  } = SidebarLogic();

  //reactstrip start
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  //end
  return (

     <div className="row mt-5 qwerty">
  <div className="col-md-3 bg-light ">
        <div className="list-group">   
        <Link to="/iphone" className="list-group-item">IPhone</Link>
         <Link to="/galaxyphones" className="list-group-item">Galaxy</Link>
           <Link to="/macbook" className="list-group-item">MacBook</Link>
           <Link to="/infinix" className="list-group-item">Infinix</Link>    
           <Link to="/range" className="list-group-item">

           <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Range</AccordionHeader>
          <AccordionBody accordionId="1">
          <input type="range" min="30" max="1600" onChange={(e)=>handleRangeChange(e.target.value)}
                    className='aabb'/><br />
                  <span className="clr">Select Range: PKR {selectedRange}</span>
                  <button onClick={handleRangeFilterClicked} className="btn btn-success btnsss">Show Range</button>
                  </AccordionBody>
        </AccordionItem>
        </Accordion>
           {/* <div className="accordion list-group-item">
            <div className="accordion-item">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" 
                aria-controls="collapseOne">Range</button>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                  <input type="range" min="30" max="1600" onChange={(e)=>handleRangeChange(e.target.value)}
                    className='aabb'/><br />
                  <span className="clr">Select Range: PKR {selectedRange}</span>
                  <button onClick={handleRangeFilterClicked} className="btn btn-success btnsss">Show Range</button>
                </div>
              </div>
            </div>
          </div> */}
            </Link>
            </div>
            </div>
            <div className="col-md-9">
            <Routes>
           <Route path="/" element={<Home />} />         
           <Route path="/iphone" element={<IPhone />} />
           <Route path="/galaxyphones" element={<GalaxyPhones />} />
           <Route path="/macbook" element={<MacBook />} />
           <Route path="/infinix" element={<Infinix />} />
           <Route path="/range" element={<Range />} />
         </Routes>

       </div>
    </div>
   

  );
};

export default Sidebar;
