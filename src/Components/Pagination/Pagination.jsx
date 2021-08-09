export const Pagination = (
  {
    pages,
    currentPage,
    onNextPage,
    onPrevPage,
    isBtnNextDisabled,
    isBtnPrevDisabled,
    curPageActive,
    curPage
  }) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`${isBtnPrevDisabled} page-item`}>
          <button className="page-link" onClick={() => { onPrevPage() }}>Previous</button>
        </li>
        {
          pages.map(page => {
            return (
              <li className={curPage === page ? `${curPageActive} page-item` : 'page-item'} key={page}>
                <button className="page-link" onClick={() => currentPage(page)}>
                  {page}
                </button>
              </li>
            )
          })
        }
        <li className={`${isBtnNextDisabled} page-item`}>
          <button className="page-link" onClick={() => { onNextPage() }}>Next</button>
        </li>
      </ul>
    </nav>
  )
}
