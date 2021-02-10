import createUrlParams from '../../services/createUrlParams';

describe('Testing on services/createUrlParams', () => {
    test('should return URL with params that were sent', () => {
        const url = 'https://www.testing.com';
        const params = {
            id: 1234,
            other: 'XXX',
            query: 'Searching test',
        };
        const urlWithParams = createUrlParams(url, params);

        const urlExpected = `${url}?id=1234&other=XXX&query=Searching%20test`;
        expect(urlWithParams).toBe(urlExpected);
    });
});
