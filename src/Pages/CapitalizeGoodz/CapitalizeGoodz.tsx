import React from 'react'
import { CardTitle, Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { add, basket, menu } from '../../images'
import { ICapitalize } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice'

interface ICapitalizeGoodz {
  capitalizeGoodzList: ICapitalize[];
  handleDeleteOrderById: ({ id, content }: { id: number, content: React.ReactNode | string }) => void;
}

const CapitalizeGoodz: React.FC<ICapitalizeGoodz> = ({ capitalizeGoodzList, handleDeleteOrderById }: ICapitalizeGoodz) => {
  return (
    <Container className='p-5'>
      <Row className='align-items-center'>
        <Col className='col-1'>
          <Image
            src={add}
            className='border'
            alt="add"
            roundedCircle
            width={'40px'}
            height={'40px'}
          />
        </Col>
        <Col className='col-11'>
          <CardTitle>Приходы / {capitalizeGoodzList.length}</CardTitle>
        </Col>
      </Row>
      <Row className='mt-5'>

        <ListGroup style={{ opacity: .5 }}>
          {!!!capitalizeGoodzList.length && <Row>Список пуст</Row>}
          {capitalizeGoodzList.map((c: ICapitalize, index) => (
            <ListGroupItem className='mt-3 border p-3 align-items-center d-flex' key={c.id}>
              <Row className='align-items-center w-100' >
                <Col className='col-5 text-decoration-underline'>{c.title}</Col>
                <Col className='col-2'>
                  <Row className='d-grid align-items-center' style={{ gridTemplateAreas: `'icon info'` }}>
                    <Col className='' style={{ gridArea: 'icon' }}>
                      <Image
                        src={menu}
                        alt='menu'
                        width={40}
                        height={40}
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
                <Col className='col-2'>
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
                <Col className='col-2'>
                  {
                    c.price.map((p, i) => (
                      <Row className='justify-content-start'>{p.value} {p.symbol}</Row>
                    ))
                  }
                </Col>
                <Col className='col-1 justify-content-end d-flex'>
                  <Image
                    src={basket}
                    onClick={() => { handleDeleteOrderById({ id: c.id, content: (<Col className='col-5 text-decoration-underline'>{c.title}</Col>) }) }}
                  />
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Row>

    </Container>
  )
}

export default CapitalizeGoodz