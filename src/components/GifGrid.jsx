import { GifItem } from "./GifItem"
import { useFetchGif } from "../hooks/useFetchGif"
import PropTypes from "prop-types"
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif( category )
  return (
    <>
      <h1>{ category }</h1>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">{
          images.map(({title, id, url}) => ( 
            <GifItem key={id} url={url} title={title}/>
          ))
        }</div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
