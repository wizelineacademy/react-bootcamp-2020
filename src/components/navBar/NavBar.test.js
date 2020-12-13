import React from 'react';
import {render, screen,fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import NavBar from './NavBar';
import waitForExpect from 'wait-for-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {BrowserRouter as Route} from "react-router-dom";

describe("<NavBar/>",()=> {
    const mock = new MockAdapter(axios);

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    test('Testing video tendencies youtube api', async () => {
        const responseMock = {
            kind: "youtube#searchListResponse",
            etag: "eXcOsewop0DGNDmt_WDK5yl--ZE",
            nextPageToken: "CAkQAA",
            regionCode: "MX",
            pageInfo: {
            totalResults: 20,
            resultsPerPage: 9
            },
        items: [
            {
            kind: "youtube#searchResult",
            etag: "o0Tx7BwU3fn95je2uZwrAjxCs3A",
            id: {
                kind: "youtube#video",
                videoId: "uLIs0j2WnlM"
            },
            snippet: {
                publishedAt: "2010-05-08T00:48:37Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Crimen (Official VIdeo)",
                description:
                'Escuchá Crimen en el álbum "Ahí Vamos" ▷ http://smarturl.it/AhiVamos Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Gustavo ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2010-05-08T00:48:37Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "VTREwgViMnNCAgsrLRMMtao8_fg",
            id: {
                kind: "youtube#video",
                videoId: "NiB85YJrzTs"
            },
            snippet: {
                publishedAt: "2019-04-23T13:00:03Z",
                channelId: "UCc3awp6TZsSJ6moPkkaCnAw",
                title: "Gustavo Cerati Exitos Sus Mejores Canciones",
                description:
                "Gustavo Cerati Exitos Sus Mejores Canciones https://youtu.be/NiB85YJrzTs.",
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/NiB85YJrzTs/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/NiB85YJrzTs/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/NiB85YJrzTs/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "Luke Davis",
                liveBroadcastContent: "none",
                publishTime: "2019-04-23T13:00:03Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "rwp1MWE5uPY7MWhJ7JrcT8r4myg",
            id: {
                kind: "youtube#video",
                videoId: "eAO7CEcCD3s"
            },
            snippet: {
                publishedAt: "2011-07-28T22:59:46Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Puente (Official Video)",
                description:
                'Escuchá "Puente" en el álbum "Bocanada" ▷ http://smarturl.it/Bocanada Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Gustavo ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/eAO7CEcCD3s/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/eAO7CEcCD3s/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/eAO7CEcCD3s/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2011-07-28T22:59:46Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "dv6gPKlxatcRThFcGMznw50YBA8",
            id: {
                kind: "youtube#video",
                videoId: "GUf81ofAZV0"
            },
            snippet: {
                publishedAt: "2008-11-11T16:54:50Z",
                channelId: "UCZuU_8S5VItTh-InZ0CV-rA",
                title: "Gustavo Cerati &quot;Adiós&quot; (Official Video)",
                description:
                'Escuchá "Adiós" en el álbum "Ahí Vamos" ▷ http://smarturl.it/AhiVamos Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Crimen": ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/GUf81ofAZV0/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/GUf81ofAZV0/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/GUf81ofAZV0/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "Gustavo Cerati",
                liveBroadcastContent: "none",
                publishTime: "2008-11-11T16:54:50Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "Whd2xzdCJw22Pd-KBD1SxqoBv5c",
            id: {
                kind: "youtube#video",
                videoId: "kNvTIyNpYSE"
            },
            snippet: {
                publishedAt: "2011-08-01T19:50:59Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Cosas Imposibles (Official Video)",
                description:
                'Gustavo Cerati - Cosas Imposibles (Siempre Es Hoy) Escuchá el álbum "Siempre es Hoy" ▷ http://smarturl.it/SiempreEsHoy Lo mejor de Cerati ACÁ ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/kNvTIyNpYSE/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/kNvTIyNpYSE/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/kNvTIyNpYSE/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2011-08-01T19:50:59Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "MsZWTUB7LucMzx-oe7fnHf4lMms",
            id: {
                kind: "youtube#video",
                videoId: "XeDupvD6sos"
            },
            snippet: {
                publishedAt: "2014-10-22T20:25:37Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Lago En El Cielo (En Vivo Estadio Obras)",
                description:
                'Gustavo Cerati "Lago en el cielo" (Ahí Vamos) Escuchá el álbum "Ahí Vamos" ▷ http://smarturl.it/AhiVamos Lo mejor de Cerati ACÁ ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/XeDupvD6sos/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/XeDupvD6sos/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/XeDupvD6sos/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2014-10-22T20:25:37Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "CvmLouUq7MfyhoroTxyQvbxNYqQ",
            id: {
                kind: "youtube#video",
                videoId: "tK0y3fDhSIg"
            },
            snippet: {
                publishedAt: "2008-11-11T16:31:52Z",
                channelId: "UCZuU_8S5VItTh-InZ0CV-rA",
                title: "GUSTAVO CERATI -  Crimen (Official Video)",
                description:
                'Escuchá Crimen en el álbum "Ahí Vamos" ▷ http://smarturl.it/AhiVamos Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Gustavo ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/tK0y3fDhSIg/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/tK0y3fDhSIg/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/tK0y3fDhSIg/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "Gustavo Cerati",
                liveBroadcastContent: "none",
                publishTime: "2008-11-11T16:31:52Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "Jiv0U3IJzhjJ8IexQEa0lV7d-Yw",
            id: {
                kind: "youtube#video",
                videoId: "pdyJlW9NXNI"
            },
            snippet: {
                publishedAt: "2020-08-22T19:07:01Z",
                channelId: "UCmKUtdpwH1J18OEiysS5WwQ",
                title: "Gustavo Cerati - Bocanada (1999) (Full Album)",
                description:
                "Gustavo Cerati - Bocanada (1999) Disco Completo (160 kbps) Fecha de publicación: 28 de junio de 1999 1) Tabú 0:00 2) Engaña 4:48 3) Bocanada 9:00 4) ...",
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/pdyJlW9NXNI/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/pdyJlW9NXNI/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/pdyJlW9NXNI/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "Maty",
                liveBroadcastContent: "none",
                publishTime: "2020-08-22T19:07:01Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "ov_E9W0Md_tQgiCsAw14zLwmSZU",
            id: {
                kind: "youtube#video",
                videoId: "mhwkM8zp_ww"
            },
            snippet: {
                publishedAt: "2014-08-22T15:41:49Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Puente",
                description:
                'Escuchá "Puente" en el álbum "Bocanada" ▷ http://smarturl.it/Bocanada Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Gustavo ...',
                thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/mhwkM8zp_ww/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/mhwkM8zp_ww/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/mhwkM8zp_ww/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2014-08-22T15:41:49Z"
            }
            }
        ]
        };
         
       const setUserSessionTest= jest.fn();
        const userSessionTest = {
            user: "noSession",
            pass: "",
            email: "",
            loggedIn: true
        }
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
        const setVideoMetaInfoTest = jest.fn();
        const setInputWordTest= jest.fn();
        const mockValue = {
            setUserSession : setUserSessionTest,
            changinggSetChangingg : changinggSetChanginggTest,
            setFavoritesFlag : setFavoritesFlagTest,
            userSession : userSessionTest,
            setVideoMetaInfo : setVideoMetaInfoTest,
            setInputWord : setInputWordTest
        }
    
        mock.onGet("/search").reply(200, responseMock);
    
        const utils = render(
        
            <VideoContext.Provider value={mockValue}>
                 <NavBar />
            </VideoContext.Provider>
       
        
        )
        fireEvent.click(screen.getByRole("icon-Yt"));

        await waitForExpect(()=>{
            expect(changinggSetChanginggTest).toBeCalledWith(false);
            expect(setFavoritesFlagTest).toBeCalledWith(false);
            expect(setVideoMetaInfoTest).toBeCalledWith(responseMock.items);
            
        });
         
      },5000);

})