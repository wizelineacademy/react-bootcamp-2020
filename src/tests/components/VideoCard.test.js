import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import VideoCard from '../../components/Videocard/VideoCard';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';

describe("<VideoCard/>",()=>{
    const mockValue = {
        video : {},
        setVideo : jest.fn(),
        setObjVideo : jest.fn(),
    }

    test("<VideoCard/> render in the DOM", () => {
        const title = "Cerati";
        const description = 'Crimen Cerati';
        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <VideoCard 
                    id='12' 
                    titulo={title} 
                    descripcion= {description}
                    imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />
            </PageContext.Provider>
        </Router>
);
        expect(screen.getByText(title)).toBeInTheDocument(); //verifica que exista el componente
        expect(screen.getByAltText(title)).toBeInTheDocument();//verifica que este la imagen
        expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();//verifica que se renderice un elemento h4
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    test('onclick event VideoCard', ()=>{
        const setVideoMock = jest.fn();
        const setObjVideoMock = jest.fn();
        const mockValue = {
            video : {},
            setVideo : setVideoMock,
            setObjVideo : setObjVideoMock
        }
        const param = {
            id: "123123$12",
            video: "Cerati",
            tumbnails: {
                default:{},
                medium:{},
                high:{}
            }
        }
        const title = "Cerati";
        const description = 'Crimen Cerati';
    render(
        <Router>
            <PageContext.Provider value={mockValue}>
            <VideoCard
                    objeto={param}
                    id='12' 
                    titulo={title} 
                    descripcion= {description}
                    imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />
            </PageContext.Provider>
        </Router>
    );
    const LogginButton = screen.getByRole("card");
        fireEvent.click(LogginButton)
        expect(setObjVideoMock).toBeCalledWith(param);
    });
});
