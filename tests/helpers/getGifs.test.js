import {getGifs} from  '../../src/helpers/getGifs' 
describe('getGifs', () => {
    test('should return an array of gifs', async () => { 
        const gifs = await getGifs('Dragon')
        expect(gifs.length).toBe(10)
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })

    })    
})