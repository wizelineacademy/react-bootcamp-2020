import { formatVideosData } from './js/youtube.api';

const SearchResult = {
  url:
    'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCC1qy6X35HmF8FibL5n6magKdPd4DqaPQ&part=snippet&q=wizeline&type=video&maxResults=20',
  videoUrl:
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nmXMgqjQzls%2CHYyRZiwBWc8%2CPo3VwR_NNGk&key=AIzaSyCC1qy6X35HmF8FibL5n6magKdPd4DqaPQ',
  channelUrl:
    'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCPGzT4wecuWM0BH9mPiulXg%2CUCXmAOGwFYxIq5qrScJeeV4g&key=AIzaSyCC1qy6X35HmF8FibL5n6magKdPd4DqaPQ',
  data: {
    kind: 'youtube#searchListResponse',
    etag: 'USceeplo8528foywXe8Jhq1X10w',
    nextPageToken: 'CBQQAA',
    regionCode: 'MX',
    pageInfo: {
      totalResults: 2248,
      resultsPerPage: 20,
    },
    items: [
      {
        kind: 'youtube#searchResult',
        etag: 'Jiak50jVoJ9_Uscl6Dwcb7VySqI',
        id: {
          kind: 'youtube#video',
          videoId: 'nmXMgqjQzls',
        },
        snippet: {
          publishedAt: '2019-09-30T23:54:32Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Video Tour | Welcome to Wizeline Guadalajara',
          description:
            'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-30T23:54:32Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '0Yrs6aTmQBUVQ7UajRtJfcx2wuQ',
        id: {
          kind: 'youtube#video',
          videoId: 'HYyRZiwBWc8',
        },
        snippet: {
          publishedAt: '2019-04-18T18:48:04Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
          description:
            'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-04-18T18:48:04Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'okUoPJk53189maAhh-WjNrOWQOQ',
        id: {
          kind: 'youtube#video',
          videoId: 'Po3VwR_NNGk',
        },
        snippet: {
          publishedAt: '2019-03-05T03:52:55Z',
          channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
          title: 'Wizeline hace sentir a empleados como en casa',
          description:
            'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'El Economista TV',
          liveBroadcastContent: 'none',
          publishTime: '2019-03-05T03:52:55Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '4lmSnJ7SFZVf6HkqQJ9a6heTjSk',
        id: {
          kind: 'youtube#video',
          videoId: 'cjO2fJy8asM',
        },
        snippet: {
          publishedAt: '2018-09-25T17:45:19Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'A Day in the Life of an Engineering Manager at Wizeline',
          description:
            "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2018-09-25T17:45:19Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'a2ExHLTDnNLRPLgMY8KOQkPhIdc',
        id: {
          kind: 'youtube#video',
          videoId: 'aKuPmY2m1Ro',
        },
        snippet: {
          publishedAt: '2019-12-27T20:47:29Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline&#39;s 2019 Year in Review',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-12-27T20:47:29Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'LgWQy4-kjbj_G2ve5Urr4vHFuck',
        id: {
          kind: 'youtube#video',
          videoId: 'Nss3EmTDD3s',
        },
        snippet: {
          publishedAt: '2017-12-08T18:13:27Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Why Wizeline?',
          description:
            'Hear from our employees directly about what excites them about their roles here at Wizeline. Wizeline wants to hire the best and the brightest to accelerate their ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2017-12-08T18:13:27Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'i1ZSt88rIUlEybpRNhxeeOZF0LY',
        id: {
          kind: 'youtube#video',
          videoId: 'CHzlSGRvWPs',
        },
        snippet: {
          publishedAt: '2017-03-08T22:41:43Z',
          channelId: 'UCUsm-fannqOY02PNN67C0KA',
          title: 'Wizeline',
          description:
            'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Noticieros Televisa',
          liveBroadcastContent: 'none',
          publishTime: '2017-03-08T22:41:43Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'wysdfEjSt1pSNriP5j0Q2RpAOTU',
        id: {
          kind: 'youtube#video',
          videoId: '772_6g1rMN8',
        },
        snippet: {
          publishedAt: '2016-09-01T18:23:39Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Spotlight: Meet the Wizeline Mexico Team (We&#39;re Hiring!)',
          description:
            'Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/772_6g1rMN8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/772_6g1rMN8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/772_6g1rMN8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2016-09-01T18:23:39Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'zyHfExhdzS1oPNMsWMhCEly4Raw',
        id: {
          kind: 'youtube#video',
          videoId: 'YuW0CE_8i1I',
        },
        snippet: {
          publishedAt: '2018-12-13T21:51:39Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Thrives in Mexico City',
          description:
            'Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2018-12-13T21:51:39Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'YfRuVlEPVhZq8zpdUBK0CTBkqrQ',
        id: {
          kind: 'youtube#video',
          videoId: 'NP1gAnbeNno',
        },
        snippet: {
          publishedAt: '2019-11-12T20:45:18Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title:
            'Wizeline Querétaro | Mexico&#39;s New Knowledge Economy (We&#39;re hiring!)',
          description:
            'A small but mighty (and growing) team, the Queretaro crew has taken ownership of growing the office and brand, speaking at university events, hosting tech ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/NP1gAnbeNno/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/NP1gAnbeNno/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/NP1gAnbeNno/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-11-12T20:45:18Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'MVZEtEwt0xsIYTc1Y5ihEO4y67k',
        id: {
          kind: 'youtube#video',
          videoId: '3KVFmT-Tp2w',
        },
        snippet: {
          publishedAt: '2019-02-11T17:55:19Z',
          channelId: 'UCd6MoB9NC6uYN2grvUNT-Zg',
          title: 'Caso de Éxito AWS: Wizeline [Spanish]',
          description:
            'Central de socios de APN - https://amzn.to/2S7tIXM Fundada en 2014, Wizeline es una compañía joven e innovadora que nació en la nube para ofrecer soporte ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Amazon Web Services',
          liveBroadcastContent: 'none',
          publishTime: '2019-02-11T17:55:19Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'zN0qVwtvorD2Vb_LkUF4LFTZiDw',
        id: {
          kind: 'youtube#video',
          videoId: '8xCVIhEircY',
        },
        snippet: {
          publishedAt: '2015-06-16T20:42:52Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Welcome to Wizeline',
          description:
            "Watch a quick overview of Wizeline's product management platform. Don't have an account? Sign up for free at wizeline.com.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/8xCVIhEircY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/8xCVIhEircY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/8xCVIhEircY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2015-06-16T20:42:52Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'p8fWyevnr4j72JYAaFIIGth4dIc',
        id: {
          kind: 'youtube#video',
          videoId: '3BzYWAqZgFw',
        },
        snippet: {
          publishedAt: '2019-07-02T17:45:28Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Why Wizeline? featuring Oswaldo Herrera in Mexico City',
          description:
            "Oswaldo is a software engineering in Wizeline's Mexico City office. He joined Wizeline because of the camaraderie and deep sense of commitment of our teams.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-07-02T17:45:28Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'QGhe_6yYLMdzXIM3Zmyzh4vFWtI',
        id: {
          kind: 'youtube#video',
          videoId: '6SwD2J6iv9s',
        },
        snippet: {
          publishedAt: '2019-09-19T23:51:07Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Working in Wizeline Vietnam | Edith Rojas | Lead Recruiter',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/6SwD2J6iv9s/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/6SwD2J6iv9s/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/6SwD2J6iv9s/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-19T23:51:07Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'uC1Zm3USNTnYz0VV8ggDLJfKZjQ',
        id: {
          kind: 'youtube#video',
          videoId: 'ewdMCaaqV_o',
        },
        snippet: {
          publishedAt: '2020-06-10T13:49:11Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title:
            'Wizeline Go-To-Market Strategy | Erik Villa, Senior Staff Engineer &amp; Tech Lead',
          description:
            "Senior Staff Engineer, Erik Villa, shares Wizeline's approach to prototypes, proof-of-concept, and general go-to-market strategy for a client project. Watch this ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ewdMCaaqV_o/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ewdMCaaqV_o/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/ewdMCaaqV_o/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2020-06-10T13:49:11Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '0fKeOn2wWJByBHrVcqSOVruXL10',
        id: {
          kind: 'youtube#video',
          videoId: 'RFq7gfvhtCk',
        },
        snippet: {
          publishedAt: '2020-05-23T00:11:23Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Welcome Back to Wizeline Vietnam | Extended Version',
          description:
            'Thanks to swift government action, the COVID-19 situation in Vietnam has reached a point where businesses are able to return to work and reopen offices.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2020-05-23T00:11:23Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'MHD0J6Fyumdl5OSqSqmDfnDX1cg',
        id: {
          kind: 'youtube#video',
          videoId: 'PrZHBTv3fjw',
        },
        snippet: {
          publishedAt: '2019-10-30T20:56:02Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline&#39;s Got Talent 2019 | Life at Wizeline',
          description:
            "This year we hosted the 2nd annual Wizeline's Got Talent to give our team the chance to show off their after-hours skills and passions. If you want to work at a ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-10-30T20:56:02Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'OEPZ_Gn2_RfUruf9S2g4xmXoTRI',
        id: {
          kind: 'youtube#video',
          videoId: '0qGd0F9eCMo',
        },
        snippet: {
          publishedAt: '2020-05-29T22:32:14Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Elba Ornelas | Women in Leadership at Wizeline',
          description:
            'Elba dreamed of being an astronaut and race car driver as a kid. She learned industrial design and is now a celebrated UX designer, product owner, and leader ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/0qGd0F9eCMo/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/0qGd0F9eCMo/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2020-05-29T22:32:14Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'LQCsxKfXoqv5LNDmju3V7p_tfJQ',
        id: {
          kind: 'youtube#video',
          videoId: 'codMybQ6iHo',
        },
        snippet: {
          publishedAt: '2017-05-05T00:33:46Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'How We Roll at Wizeline',
          description:
            'Just an average day at the Wizeline Guadalajara campus! A few of our Marketing teammates show the best way to travel between buildings.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/codMybQ6iHo/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/codMybQ6iHo/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/codMybQ6iHo/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2017-05-05T00:33:46Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'WtUDJGV1GxONHZhwM_KsQHqJ9pE',
        id: {
          kind: 'youtube#video',
          videoId: 'rjir_cHTl5w',
        },
        snippet: {
          publishedAt: '2019-04-29T20:37:26Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Why Wizeline? featuring Hugo Lopez in Mexico City',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/rjir_cHTl5w/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/rjir_cHTl5w/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/rjir_cHTl5w/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-04-29T20:37:26Z',
        },
      },
    ],
  },
  videoData: {
    kind: 'youtube#videoListResponse',
    etag: 'gE-D3CheJnJWgD2qF0kWs_3K3LA',
    items: [
      {
        kind: 'youtube#video',
        etag: '4aXwDrtVkpiA9PH4EkF9B3j04vw',
        id: 'nmXMgqjQzls',
        snippet: {
          publishedAt: '2019-09-30T23:54:32Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Video Tour | Welcome to Wizeline Guadalajara',
          description:
            "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: [
            'Mexican silicon valley',
            'silicon valley',
            'startup culture',
            'technology',
            'engineering culture',
          ],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Video Tour | Welcome to Wizeline Guadalajara',
            description:
              "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
          },
        },
        contentDetails: {
          duration: 'PT7M20S',
          dimension: '2d',
          definition: 'hd',
          caption: 'false',
          licensedContent: false,
          contentRating: {},
          projection: 'rectangular',
        },
        statistics: {
          viewCount: '9567',
          likeCount: '184',
          dislikeCount: '2',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'dNaVfMsp2L8c5hHxk8dK6rXflWA',
        id: 'HYyRZiwBWc8',
        snippet: {
          publishedAt: '2019-04-18T18:48:04Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
          description:
            'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a contemporary new home: a people-centric office where our team can learn, grow and do its best work.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['Wizeline', 'technology', 'innovation', 'best places to work'],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
            description:
              'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a contemporary new home: a people-centric office where our team can learn, grow and do its best work.',
          },
        },
        contentDetails: {
          duration: 'PT1M23S',
          dimension: '2d',
          definition: 'hd',
          caption: 'false',
          licensedContent: false,
          contentRating: {},
          projection: 'rectangular',
        },
        statistics: {
          viewCount: '9646',
          likeCount: '105',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'nfd-dcVyWrI5qS2Hd-5uWElAYiI',
        id: 'Po3VwR_NNGk',
        snippet: {
          publishedAt: '2019-03-05T03:52:55Z',
          channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
          title: 'Wizeline hace sentir a empleados como en casa',
          description:
            'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma rápida.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'El Economista TV',
          tags: ['Wizeline', 'Tecnología'],
          categoryId: '25',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Wizeline hace sentir a empleados como en casa',
            description:
              'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma rápida.',
          },
          defaultAudioLanguage: 'es-419',
        },
        contentDetails: {
          duration: 'PT5M10S',
          dimension: '2d',
          definition: 'hd',
          caption: 'false',
          licensedContent: true,
          contentRating: {},
          projection: 'rectangular',
        },
        statistics: {
          viewCount: '3920',
          likeCount: '50',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '6',
        },
      },
    ],
    pageInfo: {
      totalResults: 3,
      resultsPerPage: 3,
    },
  },
  channelData: {
    kind: 'youtube#channelListResponse',
    etag: 'kwiPYlma9MSdaBumUKR3I6sORnc',
    pageInfo: {
      totalResults: 2,
      resultsPerPage: 5,
    },
    items: [
      {
        kind: 'youtube#channel',
        etag: 'GfWgyMU-3rQd_M7EqMgsyVVbaUw',
        id: 'UCPGzT4wecuWM0BH9mPiulXg',
        snippet: {
          title: 'Wizeline',
          description:
            'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline’s intelligent product strategy and roadmapping software with full-stack, agile development services. With decades of experience building disruptive technology in the heart of Silicon Valley, Wizeline’s team shares a proven track record of enabling companies to achieve breakthrough results with software and services.\n\nCustomers of Wizeline include some of the fastest-growing software companies, as well as many of the world’s most established brands, including News Corp, Yahoo!, Sparkcentral, Nuance and many others. The company is headquartered in San Francisco with offices in Guadalajara, Mexico. For more information, please visit www.wizeline.com.',
          customUrl: 'wizelinehq',
          publishedAt: '2014-09-27T01:39:18Z',
          thumbnails: {
            default: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
              height: 88,
            },
            medium: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0x00ffffff-no-rj',
              width: 240,
              height: 240,
            },
            high: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0x00ffffff-no-rj',
              width: 800,
              height: 800,
            },
          },
          localized: {
            title: 'Wizeline',
            description:
              'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline’s intelligent product strategy and roadmapping software with full-stack, agile development services. With decades of experience building disruptive technology in the heart of Silicon Valley, Wizeline’s team shares a proven track record of enabling companies to achieve breakthrough results with software and services.\n\nCustomers of Wizeline include some of the fastest-growing software companies, as well as many of the world’s most established brands, including News Corp, Yahoo!, Sparkcentral, Nuance and many others. The company is headquartered in San Francisco with offices in Guadalajara, Mexico. For more information, please visit www.wizeline.com.',
          },
        },
        contentDetails: {
          relatedPlaylists: {
            likes: '',
            favorites: '',
            uploads: 'UUPGzT4wecuWM0BH9mPiulXg',
          },
        },
        statistics: {
          viewCount: '711076',
          subscriberCount: '1270',
          hiddenSubscriberCount: false,
          videoCount: '158',
        },
      },
      {
        kind: 'youtube#channel',
        etag: 'tAPqrE_Zqwo0MaI-7Xqpz-eJAIw',
        id: 'UCXmAOGwFYxIq5qrScJeeV4g',
        snippet: {
          title: 'El Economista TV',
          description:
            'En nuestro canal encontrarás reportajes de interés general y opiniones de expertos que te explicarán, de manera sencilla, el mundo de la economía y las finanzas, y cómo éstas afectan tu bolsillo.',
          customUrl: 'eleconomistatv',
          publishedAt: '2007-08-15T17:38:12Z',
          thumbnails: {
            default: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwniSLQl6mymsI-ptUkqB_u98VrX0WA8YNMmWOncaUQ=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
              height: 88,
            },
            medium: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwniSLQl6mymsI-ptUkqB_u98VrX0WA8YNMmWOncaUQ=s240-c-k-c0x00ffffff-no-rj',
              width: 240,
              height: 240,
            },
            high: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwniSLQl6mymsI-ptUkqB_u98VrX0WA8YNMmWOncaUQ=s800-c-k-c0x00ffffff-no-rj',
              width: 800,
              height: 800,
            },
          },
          localized: {
            title: 'El Economista TV',
            description:
              'En nuestro canal encontrarás reportajes de interés general y opiniones de expertos que te explicarán, de manera sencilla, el mundo de la economía y las finanzas, y cómo éstas afectan tu bolsillo.',
          },
          country: 'MX',
        },
        contentDetails: {
          relatedPlaylists: {
            likes: '',
            favorites: '',
            uploads: 'UUXmAOGwFYxIq5qrScJeeV4g',
          },
        },
        statistics: {
          viewCount: '52205752',
          subscriberCount: '127000',
          hiddenSubscriberCount: false,
          videoCount: '11499',
        },
      },
    ],
  },
};

export const SummaryResult2 = formatVideosData(
  SearchResult.data,
  SearchResult.videoData,
  SearchResult.channelData
);

export default SearchResult;
