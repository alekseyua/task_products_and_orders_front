import React from 'react'
import { Container } from 'react-bootstrap'
import Image from '../../Views/Image/Image'
import { clock } from '../../images';
import styles from './styles/date-info.module.scss';
import SocketCounterContainer from '../SocketCounter/SocketCounterContainer';

interface IDateInfo {
  time: string;
  date: string;
  day: string;
}
const DateInfo: React.FC<IDateInfo> = ({
  day,
  time,
  date,
}: IDateInfo
) => {
  return (
    <Container className={'col-5 d-flex row justify-content-end'}>
      <div className={styles['date-info__date']}>{day}</div>
      <div className='d-flex'>
        <div className='col-4'>{date}</div> {/* Display current date */}
        <SocketCounterContainer />
        <Image src={clock} alt='clock' width={25} height={25} className='col-2' style={{ maxWidth: 25 }} />
        <div className='col-2'>{time}</div>  {/* Display current time */}
      </div>
    </Container>
  )
}

export default DateInfo