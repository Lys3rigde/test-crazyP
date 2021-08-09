import { useEffect, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { Table } from '../Table/Table';
import data from '../../data.json' //использование данных напрямую, без API, из-за проблем с CORS
import './Layout.css';


export const Layout = () => {

  const [info, setInfo] = useState([]);
  // const API = 'http://www.filltext.com/?rows=231&id={number|200}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState('');
  const [isBtnPrevDisabled, setIsBtnPrevDisabled] = useState('');
  const [curPageActive, setCurPageActive] = useState('');
  const [sortDirection, setSortDirection] = useState(true);
  const [arrowDirection, setArrowDirection] = useState('arrow');
  const [srchValue, setSrchValue] = useState('');
  const maxStrs = 50;
  const lastStr = curPage * maxStrs;
  const firstStr = lastStr - maxStrs;

  useEffect(() => {
    // fetch(API)
    //   .then(response => response.json())
    //   .then(data => {
    //     setInfo(data);
    //     setIsLoading(false);
    //     setIsLoaded(true);
    //   })
    setInfo(data);
    setIsLoading(false);
    setIsLoaded(true);
  }, [])

  const currentPage = page => { //функция устанавливает нынешнюю страницу для пагинации 
    setCurPage(page);
    setIsBtnPrevDisabled('');
    setIsBtnNextDisabled('');
    setCurPageActive('active');
  }

  let pages = []; //массив всех страниц для пагинации
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const onNextPage = () => { //переход на страницу вперед по кнопке Next
    if (curPage > totalPages - 1) {
      setIsBtnNextDisabled('disabled');
      return;
    }
    setCurPage(curPage + 1);
    setIsBtnPrevDisabled('')
  }

  const onPrevPage = () => { //переход на страницу вперед по кнопке Next
    if (curPage < 2) {
      setIsBtnPrevDisabled('disabled');
      return;
    }
    setCurPage(curPage - 1);
    setIsBtnNextDisabled('')
  }

  const sortData = target => { // функция сортировки данных по клику на заголовок столбца
    const copyInfo = info.concat();
    let sortInfo;
    if (sortDirection) {
      sortInfo = copyInfo.sort(
        (a, b) => { return a[target] > b[target] ? 1 : -1 }
      );
      setArrowDirection('arrow')
    } else {
      sortInfo = copyInfo.reverse(
        (a, b) => { return a[target] > b[target] ? 1 : -1 }
      );
      setArrowDirection('arrow arrow--sort')
    }
    setInfo(sortInfo);
    setSortDirection(!sortDirection);
  }

  const searchValue = e => { //функция записывает значение в state из инпута
    setSrchValue(e.target.value.toLowerCase());
  }

  const getFilteredData = () => { // функция фильтрации строк по значению из инпута
    if (!srchValue) {
      return info
    }
    return info.filter(
      el => {
        return el.firstName.toLowerCase().includes(srchValue)
          || el.lastName.toLowerCase().includes(srchValue)
          || el.email.toLowerCase().includes(srchValue)
          || el.phone.toLowerCase().includes(srchValue);
      }
    )
  }

  const filteredData = getFilteredData();


  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const getTotalPages = Math.ceil(filteredData.length / maxStrs);
    setTotalPages(getTotalPages);
  }, [isLoaded, info.length, filteredData]);

  const currStrs = filteredData.slice(firstStr, lastStr); // вычисление строк, которые должны отрисовывать на определенной странице

  return (
    <div className="Layout">
      <Search searchValue={searchValue} />
      <Table info={currStrs} isLoading={isLoading} sortData={sortData} arrowDirection={arrowDirection} />
      {
        isLoaded && (info.length > 50) &&
        < Pagination pages={pages}
          currentPage={currentPage}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          isBtnNextDisabled={isBtnNextDisabled}
          isBtnPrevDisabled={isBtnPrevDisabled}
          curPageActive={curPageActive}
          curPage={curPage}
        />
      }
    </div>
  )
}