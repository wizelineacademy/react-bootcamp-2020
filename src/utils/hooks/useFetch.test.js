import { useFetch } from './useFetch';
import { renderHook } from '@testing-library/react-hooks';

describe('Check useFetch', () => {
    
    it('Should have 20 videoInfo ', () => {
        const { VideoList } = renderHook(() => useFetch());
        setTimeout(() => {
            expect(VideoList.length === 20).toBeTruthy();
        }, 1000);
    });

})

