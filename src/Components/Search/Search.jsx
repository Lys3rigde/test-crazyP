import './Search.css'

export const Search = ({ searchValue }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter FirstName/SecondName/Email/Phone"
        className="search__input"
        onChange={e => { searchValue(e) }}
      />
    </div>
  )
}