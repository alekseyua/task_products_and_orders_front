import React, { useEffect, useState } from 'react'
import DateInfo from './DateInfo'

const DateInfoContainer: React.FC = () => {

  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [day, setDay] = useState<string>('');

  useEffect(() => {
    const location = "uk-UA";
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString(location,
        {
          hour: "2-digit",
          minute: '2-digit',
          hour12: false
        })
      );
      setDate(new Date().toLocaleDateString(location,
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ));
      setDay(new Date().toLocaleDateString(location, { weekday: 'long' }));
    },
      1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DateInfo
      day={day}
      time={time}
      date={date}
    />
  )
}

export default DateInfoContainer