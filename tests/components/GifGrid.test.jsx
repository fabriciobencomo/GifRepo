import { render,screen } from "@testing-library/react";
import {GifGrid} from "../../src/components/GifGrid"
import { useFetchGif } from "../../src/hooks/useFetchGif";
jest.mock('../../src/hooks/useFetchGif')

describe('Gifgrid', () => {
    const category = "One Puch" 
    const loading = "Cargando..."
    test('should show the initial loading', () => { 
        useFetchGif.mockReturnValue({
            images:[],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText(loading)).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('should show the items when load the hook useFetchGif', () => {
        const gifs = [
            {
            id: "ABC",
            title: "Hola",
            url: "hola.jpg"
            },
            {
                id: "ABC1",
                title: "Hol1a",
                url: "hol1a.jpg"
                },
        ]
        useFetchGif.mockReturnValue({
            images:[...gifs],
            isLoading: false
        })
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
});