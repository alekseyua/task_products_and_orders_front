import React from 'react'
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { logo } from '../../images';
import Image from '../../Views/Image/Image';
import { Link } from 'react-router-dom';
import DateInfoContainer from '../DateInfo/DateInfoContainer';

interface ITopMenu {
  searchValue: string;
  handleSearch: any;
  setSearchValue: any;
}

const TopMenu: React.FC<ITopMenu> = ({
  searchValue,
  handleSearch,
  setSearchValue,
}: ITopMenu) => {
  return (
    <Navbar expand="lg">
      <Container className='row'>
        <Link to="/" className='col-2' >
          <Image src={logo} alt='logo' className={'p-2'} />
          Inventory
        </Link>
        <div className='d-flex col-6'>

          <Form className="d-flex col-6 justify-content-start" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Поиск"
              className="me-1"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>
        </div>
        <DateInfoContainer />
      </Container>
    </Navbar>
  )
}

export default TopMenu