



import React from 'react';
import './HomeStyle.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHomeLogic ,getViewClass} from './HomeLogic'; // Import logic from HomeLogic file

const Home = () => {
  const { view, changeView, send, produtss } = useHomeLogic();
  
   // Using the logic from useHomeLogic
  return (
    <>
      <section className='iteam_section container my-5'>
        <div className='view-buttons'>
          <Button variant='outline-primary' className={`btn ${view === 'grid' ? 'active' : ''}`} onClick={() => changeView('grid')}> Grid View </Button>
          <Button variant='outline-danger' className={`btn ${view === 'list' ? 'active' : ''}`} onClick={() => changeView('list')}> List View </Button>
          <Button variant='outline-success' className={`btn ${view === 'kanban' ? 'active' : ''}`} onClick={() => changeView('kanban')}> Kanban View</Button>
        </div>
        <h2 className='px-2 mt-2' style={{ fontWeight: 400 }}>Restaurants in Kamalia Open Now</h2>
        <div className='row mt-2'>
           {produtss.map((product, index) => (
            <div key={product.id} className={getViewClass(view)}>
              <Card className='have'>
              <Card.Img className={`cd ${view === 'list' ? 'list-view-image-one' : ''}`} src={product.thumbnail} />
                <div className='card_body'>
                  <div className='upper_data'>
                  <h4 className={`mt-2 ${view === 'list' ? 'list-view-h4' : ''}`}>{product.title}</h4>   
                  <span className={`${view === 'list' ? 'list-view-span-one' : ''}`}>{product.rating}</span>   
                  </div> 
                  <div className='lower_data'>
                  <h5 className={`${view === 'list' ? 'list-view-h5' : ''}`}>{product.category}</h5>
                    <span className={`${view === 'list' ? 'list-view-span' : ''}`}>{product.price}</span>
                  </div>                 
                  <div className='last_data'>
                    <h6 className={`lasimg ${view === 'list' ? 'list-view-hh' : ''}`} > {product.brand}</h6>
                    <Button className={`mt-2   addcard ${view === 'list' ? 'list-view-button' : ''}`} onClick={() => send(product)}>Add To Cart</Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
