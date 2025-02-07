import React from 'react'
import { CardTitle, Col, Container, FormGroup, FormLabel, FormSelect, Image, ListGroup, Row, Table } from 'react-bootstrap'
import { basket, prod } from '../../images'
import { ICapitalize, IProducts } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice';
import './styles/products.scss';

interface IProduct {
  capitalizeGoodzList: ICapitalize[];
  typeProductsList: string[];
  productsList: (IProducts & {
    titleOrder: string
    orderDate: { start: string; end: string }
  })[] | any[];
  handleDeleteProduct: any
  handleSelectTypeProducts: any
}

const Products: React.FC<IProduct> = ({ handleDeleteProduct, handleSelectTypeProducts, typeProductsList, productsList }: IProduct) => {

  return (
    <Container className='p-5'>
      <Row className='align-items-center'>
        <Col className='col-12 d-flex align-items-center'>
          <CardTitle>Продукты / {productsList.length}</CardTitle>
          <FormGroup className="d-flex align-items-center p-3" >
            <FormLabel className="fw-bold p-3" style={{ marginBottom: 0 }}>Тип:</FormLabel>
            <FormSelect
              className="form-select"
              id="type"
              onChange={(e: any) => { handleSelectTypeProducts(e.currentTarget.value) }}//setType(e.currentTarget.value)}
            >
              <option selected value={'all'}>Сделайте выбор</option>
              {
                typeProductsList.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))
              }
            </FormSelect>
          </FormGroup>
        </Col>

      </Row>

      <Row className='mt-5'>
        {!!!productsList.length && <Row>Список пуст</Row>}
        <ListGroup className='product__products-container table-responsive'>
          {productsList.map((p, index) => (
            <div className='product__products-table-container' key={index}>
              <div className='product__products-table-status'>
                <span className={`product__products-icon-status--${p.isNew}`}></span>
              </div>
              <div className='product__products-table-image'>
                <Image
                  src={prod}
                />
              </div>
              <div className='product__products-table-title'>{p.title}</div>
              <div className='product__products-table-condition'>{p.condition}</div>
              <div className='product__products-table-date'>
                <span className='product__products-guarantee'><span>с </span> {new Date(p.guarantee.start).toLocaleDateString('fr-BE')}</span>
                <span className='product__products-guarantee'><span>по</span> {new Date(p.guarantee.end).toLocaleDateString('fr-BE')}</span>
              </div>
              <div className='product__products-table-state-product'>{p.isNew ? 'новый' : 'Б/У'}</div>
              <div className='product__products-table-price'>
                {
                  p.price.map((price: any, i: number) => (
                    <span className='justify-content-start' key={i}>{price.value} {price.symbol}</span>
                  ))
                }
              </div>
              <div className='product__products-table-type'>{p.type}</div>
              <div className='product__products-table-name'>{'-'}</div>
              <div className='product__products-table-title-order'>{p.titleOrder}</div>
              <div className='product__products-table-date-create'>
                <span className='product__products-guarantee'><span>с </span> {new Date(p.orderDate.start).toLocaleDateString('fr-BE')}</span>
                <span className='product__products-guarantee'><span>по</span> {new Date(p.orderDate.end).toLocaleDateString('fr-BE')}</span>
              </div>
              <div className='product__products-table-icon-del'>
                <Image
                  src={basket}
                  onClick={() => {
                    handleDeleteProduct({
                      id: p.id, content: (<div className='product__products-container--mini'>
                        <div className='product__products-table-status'>
                          <span className={`product__products-icon-status--${p.isNew}`}></span>
                        </div>
                        <div className='product__products-table-image'>
                          <Image
                            src={prod}
                          />
                        </div>
                        <div className='product__products-table-title'>{p.title}</div>
                      </div>
                      )
                    })
                  }}
                />
              </div>
            </div>
          ))}
        </ListGroup>
      </Row>

    </Container>
  )
}

export default Products