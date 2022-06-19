const api = require('../functions/api')

test('getSpecific right', async () => {
    const data = await api.catMovies();
    expect(data.movies[1].title).toBe('cars');
});

test('getSpecific right', async () => {
    const data = await api.specificSerie('4');
    console.log(data);
    expect(data.serie.title).toBe('4');
});

test('getSpecific wrong', async () => {
    const data = await api.specificSerie('4');
    console.log(data);
    expect(data.serie.title).not.toBe('5');
});