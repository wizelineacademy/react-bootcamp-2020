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
    etag: 'EMJ7FqVMBdnefuglK7v4MOTKMkc',
    nextPageToken: 'CBQQAA',
    regionCode: 'MX',
    pageInfo: {
      totalResults: 2311,
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
        etag: 'h-gxIFbRRhPpn_oldO-6FmLijJs',
        id: {
          kind: 'youtube#video',
          videoId: 'elEAnqU8KuY',
        },
        snippet: {
          publishedAt: '2020-08-31T20:05:52Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Build your Future with Wizeline&#39;s Apprenticeship Programs',
          description:
            "We believe that tech education has the power to change anyone's future. Wizeline Academy runs apprenticeship programs that are based on a ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2020-08-31T20:05:52Z',
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
        etag: 'bBqyCkAcOu_IXJ0nyiaf7Nl4k-Q',
        id: {
          kind: 'youtube#video',
          videoId: 'E1Vq_A3WKK8',
        },
        snippet: {
          publishedAt: '2017-12-09T18:46:07Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'How does Wizeline work?',
          description:
            'Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2017-12-09T18:46:07Z',
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
        etag: '_3joDRliV2Ah3SxkjozF2CeZjCM',
        id: {
          kind: 'youtube#video',
          videoId: 'yYYxf74RRmk',
        },
        snippet: {
          publishedAt: '2017-12-08T23:38:47Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline&#39;s new office in Guadalajara',
          description:
            'Same company, new digs! Take a sneak peek at our spacious new La Perla office before we move in spring 2018.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2017-12-08T23:38:47Z',
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
        etag: 'X4in1VlFRnY9XDQL3CyYNNAXiZw',
        id: {
          kind: 'youtube#video',
          videoId: '4CiR1jXOL0k',
        },
        snippet: {
          publishedAt: '2018-08-10T17:32:25Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'How to Build Your Dream Career with Wizeline',
          description: 'Build your career at Wizeline. Apply: http://bit.ly/2nu9GVQ.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2018-08-10T17:32:25Z',
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
        etag: 'SLhZ8xZb0kY2pfIN1crAd3exD3Y',
        id: {
          kind: 'youtube#video',
          videoId: 'hDASWTCJ_t4',
        },
        snippet: {
          publishedAt: '2019-05-14T21:01:43Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Data Engineering featuring Ana Costilla',
          description:
            "Wizeline's data team consists of brilliant data scientists and engineers who don't back down from a challenge. They help our clients extract value from their data, ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-05-14T21:01:43Z',
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
      {
        kind: 'youtube#searchResult',
        etag: '2UPJOhorjTadnlpMM9wQF5Lzyl8',
        id: {
          kind: 'youtube#video',
          videoId: 'X9-bqSdv6kk',
        },
        snippet: {
          publishedAt: '2019-09-19T22:28:10Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Working in Wizeline Vietnam | Salvador Elizarrarás | Software Engineer',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-19T22:28:10Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'tzWPWelB5bMlYM6Sw3qf7Lk7Hkg',
        id: {
          kind: 'youtube#video',
          videoId: 'DcFK1x3NHGY',
        },
        snippet: {
          publishedAt: '2016-09-01T18:02:11Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
          description:
            "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2016-09-01T18:02:11Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'KIxEibiFqNT5UY-rhSWhk1vlcQc',
        id: {
          kind: 'youtube#video',
          videoId: 'W0k7yFEL6FY',
        },
        snippet: {
          publishedAt: '2020-11-11T22:17:33Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Mobile Engineering featuring Jorge Ovalle',
          description:
            "Back in 2011, Jorge made his first iOS application during a University course, and he loved it. Since then, there was no turning back on his career. He's currently ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2020-11-11T22:17:33Z',
        },
      },
    ],
  },
  videoData: {
    kind: 'youtube#videoListResponse',
    etag: 'X4BqbbV7s88B0zT065ddSzxmivw',
    items: [
      {
        kind: 'youtube#video',
        etag: 'j9yDbG9s4YFmOe2bIMLEEIF_IrI',
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
        statistics: {
          viewCount: '9842',
          likeCount: '188',
          dislikeCount: '2',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'eOBpxZfLGn0H_9CXlT1rBf3_HdE',
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
        statistics: {
          viewCount: '9781',
          likeCount: '106',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'hSN1ADF5wvdfBJ4CAqotuEU8LJo',
        id: 'cjO2fJy8asM',
        snippet: {
          publishedAt: '2018-09-25T17:45:19Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'A Day in the Life of an Engineering Manager at Wizeline',
          description:
            "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions and what he values most about his role.",
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
            standard: {
              url: 'https://i.ytimg.com/vi/cjO2fJy8asM/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/cjO2fJy8asM/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: [
            'engineering',
            'tech startup',
            'mentor',
            'Wizeline',
            'wizeline engineering',
            'software engineers',
            'developers',
          ],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'A Day in the Life of an Engineering Manager at Wizeline',
            description:
              "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions and what he values most about his role.",
          },
        },
        statistics: {
          viewCount: '13667',
          likeCount: '172',
          dislikeCount: '3',
          favoriteCount: '0',
          commentCount: '2',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'adqkJ1JD_AL-mr8_YIiiDR7OzSs',
        id: 'elEAnqU8KuY',
        snippet: {
          publishedAt: '2020-08-31T20:05:52Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: "Build your Future with Wizeline's Apprenticeship Programs",
          description:
            'We believe that tech education has the power to change anyone’s future. \n\nWizeline Academy runs apprenticeship programs that are based on a learning-by-doing model. These programs provide you with access to mentorship from senior engineers at Wizeline and give you the opportunity to contribute to real-world projects since your first weeks. \n\nCheck out our open opportunities for these programs in our careers site and boost your career in technology! www.wizeline.com/careeers',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/elEAnqU8KuY/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: "Build your Future with Wizeline's Apprenticeship Programs",
            description:
              'We believe that tech education has the power to change anyone’s future. \n\nWizeline Academy runs apprenticeship programs that are based on a learning-by-doing model. These programs provide you with access to mentorship from senior engineers at Wizeline and give you the opportunity to contribute to real-world projects since your first weeks. \n\nCheck out our open opportunities for these programs in our careers site and boost your career in technology! www.wizeline.com/careeers',
          },
        },
        statistics: {
          viewCount: '255',
          likeCount: '10',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '1',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'TffvsvUBViwtDUDPuR-1A3Z08c4',
        id: 'aKuPmY2m1Ro',
        snippet: {
          publishedAt: '2019-12-27T20:47:29Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: "Wizeline's 2019 Year in Review",
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
            standard: {
              url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: "Wizeline's 2019 Year in Review",
            description: '',
          },
        },
        statistics: {
          viewCount: '943',
          likeCount: '16',
          dislikeCount: '1',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'b6u-yQm_MKcen1lEJSNz90GNXhs',
        id: 'Nss3EmTDD3s',
        snippet: {
          publishedAt: '2017-12-08T18:13:27Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Why Wizeline?',
          description:
            'Hear from our employees directly about what excites them about their roles here at Wizeline.  Wizeline wants to hire the best and the brightest to accelerate their personal and professional growth.',
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
            standard: {
              url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '24',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Why Wizeline?',
            description:
              'Hear from our employees directly about what excites them about their roles here at Wizeline.  Wizeline wants to hire the best and the brightest to accelerate their personal and professional growth.',
          },
        },
        statistics: {
          viewCount: '3366',
          likeCount: '20',
          dislikeCount: '1',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: '3hUirfq5qNvJmxi2EyUemf55eCg',
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
        statistics: {
          viewCount: '4006',
          likeCount: '52',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '6',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'hJbnHhB5Qho70NJ5JMXgvSvysNc',
        id: 'ewdMCaaqV_o',
        snippet: {
          publishedAt: '2020-06-10T13:49:11Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title:
            'Wizeline Go-To-Market Strategy | Erik Villa, Senior Staff Engineer & Tech Lead',
          description:
            "Senior Staff Engineer, Erik Villa, shares Wizeline's approach to prototypes, proof-of-concept, and general go-to-market strategy for a client project. Watch this video to learn what the team can accomplish.",
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
            standard: {
              url: 'https://i.ytimg.com/vi/ewdMCaaqV_o/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/ewdMCaaqV_o/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title:
              'Wizeline Go-To-Market Strategy | Erik Villa, Senior Staff Engineer & Tech Lead',
            description:
              "Senior Staff Engineer, Erik Villa, shares Wizeline's approach to prototypes, proof-of-concept, and general go-to-market strategy for a client project. Watch this video to learn what the team can accomplish.",
          },
        },
        statistics: {
          viewCount: '347',
          likeCount: '13',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'QjGVDxFZBcao5_EG1AhFbVwVhmA',
        id: 'E1Vq_A3WKK8',
        snippet: {
          publishedAt: '2017-12-09T18:46:07Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'How does Wizeline work?',
          description:
            'Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: https://www.wizeline.com/consulting/',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['wizeline'],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'How does Wizeline work?',
            description:
              'Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: https://www.wizeline.com/consulting/',
          },
        },
        statistics: {
          viewCount: '1527',
          likeCount: '18',
          dislikeCount: '1',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'jTgl-p099i07NGsHGJdJ1WilYj4',
        id: '8xCVIhEircY',
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
            standard: {
              url: 'https://i.ytimg.com/vi/8xCVIhEircY/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/8xCVIhEircY/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '24',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Welcome to Wizeline',
            description:
              "Watch a quick overview of Wizeline's product management platform. Don't have an account? Sign up for free at wizeline.com.",
          },
        },
        statistics: {
          viewCount: '4724',
          likeCount: '6',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'xqdDCUmt50xcie-UxS4smlibJAI',
        id: 'yYYxf74RRmk',
        snippet: {
          publishedAt: '2017-12-08T23:38:47Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: "Wizeline's new office in Guadalajara",
          description:
            'Same company, new digs! Take a sneak peek at our spacious new La Perla office before we move in spring 2018.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/yYYxf74RRmk/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['wizeline', 'guadalajara', 'tech', 'la perla', 'mexico tech'],
          categoryId: '24',
          liveBroadcastContent: 'none',
          localized: {
            title: "Wizeline's new office in Guadalajara",
            description:
              'Same company, new digs! Take a sneak peek at our spacious new La Perla office before we move in spring 2018.',
          },
        },
        statistics: {
          viewCount: '2792',
          likeCount: '22',
          dislikeCount: '1',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: '1i4vAjlH8iQPKxgofMFNc7_ayWo',
        id: '772_6g1rMN8',
        snippet: {
          publishedAt: '2016-09-01T18:23:39Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: "Spotlight: Meet the Wizeline Mexico Team (We're Hiring!)",
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
            standard: {
              url: 'https://i.ytimg.com/vi/772_6g1rMN8/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/772_6g1rMN8/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['guadalajara', 'mexico', 'startup', 'engineering', 'jobs', 'tech jobs'],
          categoryId: '24',
          liveBroadcastContent: 'none',
          localized: {
            title: "Spotlight: Meet the Wizeline Mexico Team (We're Hiring!)",
            description:
              'Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.',
          },
        },
        statistics: {
          viewCount: '6663',
          likeCount: '40',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '1',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'x7i6oAf9GnduG-fr-6A7I_YLlx4',
        id: 'CHzlSGRvWPs',
        snippet: {
          publishedAt: '2017-03-08T22:41:43Z',
          channelId: 'UCUsm-fannqOY02PNN67C0KA',
          title: 'Wizeline',
          description:
            'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos gratuitos que ya comenzaron a impartirse en la ciudad.',
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
          tags: [
            'Wizeline',
            'Fractal Posible',
            'El plan de Wizeline',
            'inteligencia artificial',
          ],
          categoryId: '25',
          liveBroadcastContent: 'none',
          defaultLanguage: 'es-419',
          localized: {
            title: 'Wizeline',
            description:
              'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos gratuitos que ya comenzaron a impartirse en la ciudad.',
          },
        },
        statistics: {
          viewCount: '3233',
          likeCount: '30',
          dislikeCount: '2',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'ZbOsR6qhRXUN1ugGCP1UC50yn9I',
        id: '4CiR1jXOL0k',
        snippet: {
          publishedAt: '2018-08-10T17:32:25Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'How to Build Your Dream Career with Wizeline',
          description: 'Build your career at Wizeline. Apply: http://bit.ly/2nu9GVQ',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: [
            'startups',
            'tech startups',
            'software engineers',
            'startuplife',
            'careers',
          ],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'How to Build Your Dream Career with Wizeline',
            description: 'Build your career at Wizeline. Apply: http://bit.ly/2nu9GVQ',
          },
        },
        statistics: {
          viewCount: '27339',
          likeCount: '6',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: '_CHyv92huinSN0sUIgCM5qhBl_E',
        id: 'YuW0CE_8i1I',
        snippet: {
          publishedAt: '2018-12-13T21:51:39Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Thrives in Mexico City',
          description:
            'Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City',
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
            standard: {
              url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['mexico city', 'Wizeline', 'technology startup', 'software engineers'],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Wizeline Thrives in Mexico City',
            description:
              'Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City',
          },
        },
        statistics: {
          viewCount: '733',
          likeCount: '7',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'OBxe1iFxdfGc2B5pq9gLc16PZCI',
        id: 'hDASWTCJ_t4',
        snippet: {
          publishedAt: '2019-05-14T21:01:43Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Data Engineering featuring Ana Costilla',
          description:
            "Wizeline's data team consists of brilliant data scientists and engineers who don't back down from a challenge. They help our clients extract value from their data, no matter how messy it gets. Meet Ana Costilla, data engineer and team ambassador as she shares what she enjoys most about this team and the work.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/hDASWTCJ_t4/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: [
            'data engineering',
            'data science',
            'technology services',
            'tech startup',
            'consulting',
          ],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Wizeline Data Engineering featuring Ana Costilla',
            description:
              "Wizeline's data team consists of brilliant data scientists and engineers who don't back down from a challenge. They help our clients extract value from their data, no matter how messy it gets. Meet Ana Costilla, data engineer and team ambassador as she shares what she enjoys most about this team and the work.",
          },
        },
        statistics: {
          viewCount: '423',
          likeCount: '10',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'R0hQl8qIaYjEKVTLnNw0tsTuYng',
        id: 'rjir_cHTl5w',
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
            standard: {
              url: 'https://i.ytimg.com/vi/rjir_cHTl5w/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/rjir_cHTl5w/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Why Wizeline? featuring Hugo Lopez in Mexico City',
            description: '',
          },
        },
        statistics: {
          viewCount: '953',
          likeCount: '19',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'r676MsJFZSBvGM8zeMLOagsxINE',
        id: 'X9-bqSdv6kk',
        snippet: {
          publishedAt: '2019-09-19T22:28:10Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Working in Wizeline Vietnam | Salvador Elizarrarás | Software Engineer',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/X9-bqSdv6kk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title:
              'Working in Wizeline Vietnam | Salvador Elizarrarás | Software Engineer',
            description: '',
          },
        },
        statistics: {
          viewCount: '375',
          likeCount: '15',
          dislikeCount: '0',
          favoriteCount: '0',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'dKPzyRLDnMlGXlFZwG8M4HXavmw',
        id: 'DcFK1x3NHGY',
        snippet: {
          publishedAt: '2016-09-01T18:02:11Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: "Why Wizeline? (We're Hiring in Mexico!)",
          description:
            "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: wizeline.com/careers.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Wizeline',
          tags: ['guadalajara', 'mexico', 'startup', 'jobs', 'engineering', 'ux'],
          categoryId: '24',
          liveBroadcastContent: 'none',
          localized: {
            title: "Why Wizeline? (We're Hiring in Mexico!)",
            description:
              "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: wizeline.com/careers.",
          },
        },
        statistics: {
          viewCount: '13735',
          likeCount: '80',
          dislikeCount: '1',
          favoriteCount: '0',
          commentCount: '4',
        },
      },
      {
        kind: 'youtube#video',
        etag: 'IfrP5LBVdTgQWT4ETWfS-3uFG1Q',
        id: 'W0k7yFEL6FY',
        snippet: {
          publishedAt: '2020-11-11T22:17:33Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline Mobile Engineering featuring Jorge Ovalle',
          description:
            "Back in 2011, Jorge made his first iOS application during a University course, and he loved it. Since then, there was no turning back on his career. He's currently working as a Staff iOS Engineer at Wizeline, where he has worked developing mobile apps for well-recognized clients and global brands. \n\nInterested in joining Jorge and our Mobile team? We’re always hiring. Visit wizeline.com/careers and search our open roles.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/W0k7yFEL6FY/sddefault.jpg',
              width: 640,
              height: 480,
            },
          },
          channelTitle: 'Wizeline',
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Wizeline Mobile Engineering featuring Jorge Ovalle',
            description:
              "Back in 2011, Jorge made his first iOS application during a University course, and he loved it. Since then, there was no turning back on his career. He's currently working as a Staff iOS Engineer at Wizeline, where he has worked developing mobile apps for well-recognized clients and global brands. \n\nInterested in joining Jorge and our Mobile team? We’re always hiring. Visit wizeline.com/careers and search our open roles.",
          },
        },
        statistics: {
          viewCount: '200',
          likeCount: '12',
          dislikeCount: '1',
          favoriteCount: '0',
          commentCount: '0',
        },
      },
    ],
    pageInfo: {
      totalResults: 20,
      resultsPerPage: 20,
    },
  },
  channelData: {
    kind: 'youtube#channelListResponse',
    etag: 'Cf_W76chFGVkvIyXEw4Wc9Z72AE',
    pageInfo: {
      totalResults: 3,
      resultsPerPage: 5,
    },
    items: [
      {
        kind: 'youtube#channel',
        etag: 'Ahgd9c59iVdzv2tsCzmzNORpy60',
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
        statistics: {
          viewCount: '52346324',
          subscriberCount: '128000',
          hiddenSubscriberCount: false,
          videoCount: '11512',
        },
      },
      {
        kind: 'youtube#channel',
        etag: 'c87d-EOWnrZcl1d_7zebu6ZRHWc',
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
        statistics: {
          viewCount: '712931',
          subscriberCount: '1280',
          hiddenSubscriberCount: false,
          videoCount: '158',
        },
      },
      {
        kind: 'youtube#channel',
        etag: 'iXbkl7QmbcOCACMvNYJBFijZS0I',
        id: 'UCUsm-fannqOY02PNN67C0KA',
        snippet: {
          title: 'Noticieros Televisa',
          description:
            'Noticieros Televisa es el referente número uno de noticias en México y América Latina.\n\nEntérate de las noticias al momento, reportajes, entretenimiento, información nacional e internacional del día a día, las coberturas más amplias sobre lo que ocurre en México y el mundo con nuestro mejor equipo de Noticieros Televisa, Denise Maerker, Paola Rojas, Danielle Dithurbide, FOROtv y todo el grupo de analistas para mantenerte actualizado.',
          customUrl: 'noticierostelevisa',
          publishedAt: '2012-12-17T23:12:49Z',
          thumbnails: {
            default: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwngcUHrm9PtxGVwVwysob0U8fMHPMZA-1FZceolVqiA=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
              height: 88,
            },
            medium: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwngcUHrm9PtxGVwVwysob0U8fMHPMZA-1FZceolVqiA=s240-c-k-c0x00ffffff-no-rj',
              width: 240,
              height: 240,
            },
            high: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwngcUHrm9PtxGVwVwysob0U8fMHPMZA-1FZceolVqiA=s800-c-k-c0x00ffffff-no-rj',
              width: 800,
              height: 800,
            },
          },
          localized: {
            title: 'Noticieros Televisa',
            description:
              'Noticieros Televisa es el referente número uno de noticias en México y América Latina.\n\nEntérate de las noticias al momento, reportajes, entretenimiento, información nacional e internacional del día a día, las coberturas más amplias sobre lo que ocurre en México y el mundo con nuestro mejor equipo de Noticieros Televisa, Denise Maerker, Paola Rojas, Danielle Dithurbide, FOROtv y todo el grupo de analistas para mantenerte actualizado.',
          },
          country: 'MX',
        },
        statistics: {
          viewCount: '1866897999',
          subscriberCount: '3490000',
          hiddenSubscriberCount: false,
          videoCount: '49729',
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
