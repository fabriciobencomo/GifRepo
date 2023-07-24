import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {
  getGifs(category)
  return (
    <>
      <h1>{ category }</h1>
    </>
  )
}
