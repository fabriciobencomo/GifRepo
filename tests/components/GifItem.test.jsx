import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem', () => { 
    const title = "Saitama"
    const url = "https://one_punch.jpg/"
    test('Debe Hacer match el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}></GifItem>)
        expect(container).toMatchSnapshot()
    })
    test('Debe mostrar la imagen con la url y el alt indicado', () => { 
        render(<GifItem title={title} url={url}></GifItem>)
    //    expect( screen.getByRole('img').src ).toBe(url)
    //    expect( screen.getByRole('img').alt ).toBe(title)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
    test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}></GifItem>)
        expect(screen.getByText(title)).toBeTruthy(). 
    })
})