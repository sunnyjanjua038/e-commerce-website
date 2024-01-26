
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _debounce from 'lodash/debounce';
import { useSearchModalLogic } from './SearchModelLogic';
import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavLink, Form } from 'react-bootstrap';

// const SearchModal = ({ showModal, setShowModal }) => {
  const SearchModal = ({ modal,setModal }) => {
  const {
    searchInput,
    searchResults,
    selectedItem,
    isSearchPerformed,
    handleSearch,
    handleItemClick,
    handleAddToCart,
  } = useSearchModalLogic();
  const toggle = () => setModal(!modal);
  return (
    // <Modal show={showModal} onHide={() => setShowModal(false)}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Search</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    
  <Modal isOpen={modal} toggle={toggle}>
    <ModalBody>
        <Form.Control
          type='search'
          placeholder='Search'
          value={searchInput}
          onChange={handleSearch}
        />
        {searchInput.length > 0 && (
          <div className='search-results bg-light'>
            {searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => handleItemClick(product)}
                className={`cursor-pointer ${selectedItem && selectedItem.id === product.id ? 'selected-item' : ''}`}
              >
                <p>{product.title}</p>
              </div>
            ))}
          </div>
        )}
        {/* Display selected item details */}
        {isSearchPerformed && selectedItem && (
          <div className='selected-item-details align-item-canter'>
            <img src={selectedItem.thumbnail} style={{ height: '150px', width: '300px' }} alt={selectedItem.title}></img>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.category}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SearchModal;





