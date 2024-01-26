
import 'bootstrap/dist/css/bootstrap.min.css'; 
import bootstrap from'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import React, { useState} from 'react';
import { Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
// import SearchModal from '../components/SearchModal'; 
import CartDetails from '../components/CartDetails';
import SearchModal from '../components/SearchModal';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);
  const { carts } = useSelector((state) => state.allCart);
  const handleOffCanvas = () => {
    setIsOpen(true)  };
    const handleCloseOffCanvas = () => {
      setIsOpen(false)  };
  
  // const openCartOffcanvas = () => {
  //   const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasWithBothOptions'));
  //   offcanvas.show();
  // };
  return (
    <>
      <Navbar style={{ height: '52px', background: 'black', color: 'white' }} className='fixed-top'>
        <Container>
          <Link to='/' className="text-decoration-none text-light mx-2">
            <h3 className='text-light'>Ecommerce</h3>
          </Link>
          {/* onClick={openCartOffcanvas} */}
            <div id='ex4' className="text-decoration-none text-light mx-2"  onClick={handleOffCanvas} >  
              <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
           <div className='search-icon' onClick={() => setModal(true)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
               </Container>
              </Navbar>
              <SearchModal modal={modal} setModal={setModal} />
       <CartDetails isOpen={isOpen} onHide={handleCloseOffCanvas}/>
    </>
  );
};

export default Header;

