import arrow from './Arrow.svg';
import './Arrow.css'


export const Arrow = ({ arrowDirection }) => {
  return (
    <div>
      <img className={arrowDirection} src={arrow} alt="#" />
    </div>
  )
}