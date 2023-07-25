import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])
  const getImages = async() => {
    const newImages = await getGifs(category)
    await setImages(newImages)
    console.log(images)
  }
  useEffect(() => {
    getImages()
  }, [])
  return (
    <>
      <h1>{ category }</h1>
      <div className="card-grid">{
          images.map(({title, id, url}) => ( 
            <GifItem key={id} url={url} title={title}/>
          ))
        }</div>
    </>
  )
}
