import { String } from '../String/String'

export const TableBody = ({ info }) => {
  return (
    <div className="TableBody">
      {
        info.map(e => {
          return <String personInfo={e} key={e.phone} />
        })
      }
    </div>
  )
}