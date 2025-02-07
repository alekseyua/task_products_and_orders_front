import React, { useState } from 'react'
import TopMenu from './TopMenu'

const TopMenuContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search value:', searchValue);
    setSearchValue('');
  }

  return (
    <TopMenu
      searchValue={searchValue}
      handleSearch={handleSearch}
      setSearchValue={setSearchValue}
    />
  )
}

export default TopMenuContainer