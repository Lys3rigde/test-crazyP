import './String.css'

export const String = ({ personInfo }) => {
  return (
    <div className="string">
      <span className="string__info">{personInfo.id}</span>
      <span className="string__info">{personInfo.firstName}</span >
      <span className="string__info">{personInfo.lastName}</span>
      <span className="string__info">{personInfo.email}</span>
      <span className="string__info">{personInfo.phone}</span>
    </div >
  )
}