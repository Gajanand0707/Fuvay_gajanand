import { stockData } from './Store'
function Blog() {

  return (
    <>
      {stockData.map((dataj) => (
        <>
          <div className="stock" key={dataj.id}>
            <h2>{dataj.company}</h2>
            <img src={dataj.img} alt='dg' />
          </div>
        </>
      ))}

    </>
  )

}

export default Blog;