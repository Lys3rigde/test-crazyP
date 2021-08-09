import { useState } from 'react'
import { Arrow } from '../Arrow/Arrow'
import { Loader } from '../Loader/Loader'
import { TableBody } from '../TableBody/TableBody'
import './Table.css'

export const Table = ({ info, isLoading, sortData, arrowDirection }) => {

  const [arrowData, setArrowData] = useState();

  const sortArrowData = target => {
    sortData(target);
    setArrowData(target)
  }

  return (
    <div className="Table">
      <div className="table-head">
        <span className="table-head__info" onClick={() => sortArrowData('id')}>
          id{arrowData === 'id' ? <Arrow arrowDirection={arrowDirection} /> : null}
        </span>
        <span className="table-head__info" onClick={() => sortArrowData('FirstName')}>
          FirstName{arrowData === 'FirstName' ? <Arrow arrowDirection={arrowDirection} /> : null}
        </span>
        <span className="table-head__info" onClick={() => sortArrowData('SecondName')}>
          SecondName{arrowData === 'SecondName' ? <Arrow arrowDirection={arrowDirection} /> : null}
        </span>
        <span className="table-head__info" onClick={() => sortArrowData('email')}>
          email{arrowData === 'email' ? <Arrow arrowDirection={arrowDirection} /> : null}
        </span>
        <span className="table-head__info" onClick={() => sortArrowData('phone')}>
          phone{arrowData === 'phone' ? <Arrow arrowDirection={arrowDirection} /> : null}
        </span>
      </div>
      {isLoading ? <Loader /> : <TableBody info={info} />}
    </div>
  )
}