import React from 'react'
import { CardTitle, Col, Container, Image, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap'
import { ICapitalize } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice'
import { add, basket, menu, prod } from '../../images'
import './styles/capitalize.scss';

interface IGroups {
  capitalizeGoodzList: ICapitalize[];
  handleOrder: (id: number) => void;
  handleCloseListProducts: () => void;
  handleDeleteOrderById: ({ id, content }: { id: number, content: React.ReactNode | string }) => void;
}

const Groups: React.FC<IGroups> = ({ handleOrder, capitalizeGoodzList, handleDeleteOrderById, handleCloseListProducts }: IGroups) => {
  return (
    <Container className='p-5'>
      {/* // title */}
      <Row className='align-items-center'>
        <Col className='col-1'>
          <Image
            src={add}
            className='border'
            alt="add"
            roundedCircle
            width={40}
            height={40}
            style={{ maxWidth: 50 }}

          />
        </Col>
        <Col className='col-11'>
          <CardTitle>Приходы / {capitalizeGoodzList.length}</CardTitle>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='col-4' >
          <ListGroup style={{ opacity: .5 }}>
            {!!!capitalizeGoodzList.length && <Row>Список пуст</Row>}
            {capitalizeGoodzList.map((c, index) => (
              <ListGroupItem onClick={() => !c.isActive && handleOrder(c.id)}
                className={`mb-3 border p-3 align-items-center d-flex ${c.isActive && 'capitalize--active'}`}
                key={c.id}
              >
                <Row className='align-items-center w-100'  >
                  <Col className='col-6'>
                    <Row className='d-grid align-items-center' style={{ gridTemplateAreas: `'icon info'` }}>
                      <Col className='' style={{ gridArea: 'icon' }}>
                        <Image
                          src={menu}
                          alt='menu'
                          width={40}
                          height={40}
                          style={{ maxWidth: 40 }}
                        />
                      </Col >
                      <Col style={{ gridArea: 'info' }}>
                        <Row>{c.amountProducts}</Row>
                        <Row>
                          Продукта
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* date */}
                  <Col className='col-6'>
                    <Row className='justify-content-center'>{new Date(c.createDate.start).toLocaleDateString('fr-BE',
                      {
                        month: "numeric",
                        year: "numeric",
                      }
                    )}</Row>
                    <Row className='justify-content-center'>
                      {new Date(c.createDate.end).toLocaleDateString('uk-UA',
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col className='col-xs-8'>
          {!!!capitalizeGoodzList.length && <Row>Список пуст</Row>}
          {capitalizeGoodzList.filter(el => el.isActive).map((c, index) => (
            <ListGroup className='border rounded capitalize__products-container' key={index}>
              <span
                onClick={handleCloseListProducts}
                className='capitalize__products-container-close'
              />
              <CardTitle className='col-12 p-4 '>{c.title}</CardTitle>
              <div onClick={() => { alert('add product') }} className='d-flex p-2  mt-3 mb-3 align-items-center gap-2'>
                <Col
                  className='col-1 d-flex justify-content-center'
                >
                  <Image
                    src={add}
                    alt='basket'
                    roundedCircle
                    width={30}
                    height={30}
                    style={{ maxWidth: 40 }}
                  />
                </Col>
                <span className='col-11'> Добавить продукт</span>
              </div>
              {capitalizeGoodzList.filter(el => el.isActive)[0].products.map((p, index) => (
                <Table className='col-12 p-2 d-flex border-bottom align-items-center' key={index}>
                  <Col className='col-1'>
                    <span className='capitalize__products-icon-status'></span>
                  </Col>
                  <Col className='col-2'><Image
                    src={prod}
                  /></Col>
                  <Col className='col-6'>{p.title}</Col>
                  <Col className='col-2'>{p.condition}</Col>
                  <Col className='col-1 justify-content-end d-flex'>
                    <Image
                      src={basket}
                      onClick={() => { handleDeleteOrderById({ id: p.id, content: (<Col className='col-5 text-decoration-underline'>{p.title}</Col>) }) }}
                    />
                  </Col>
                </Table>
              ))}
            </ListGroup>
          ))}
        </Col>
      </Row>

    </Container>
  )
}

export default Groups