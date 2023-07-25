import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('useFetchGif', () => {
    test('should return the initial state', () => { 
        const { result } = renderHook( () => useFetchGif('onePunch'))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    test('should return an array with images and isLoading be false', async () => { 
        const { result } = renderHook( () => useFetchGif('onePunch'))
        await waitFor (
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        console.log(result)
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
});