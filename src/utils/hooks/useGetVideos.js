import { useState, useEffect } from 'react';
import * as Constants from '../constants';

function useGetVideos(searchQuery) {
  const [videosList, setVideosList] = useState(null);

  useEffect(() => {
    async function getVideos() {
      try {
        if (searchQuery === '') return '';
        // console.log(searchQuery);

        const API_URL = Constants.BASE_API_URL.replace(
          '<SearchQuery>',
          searchQuery
        ).replace('<API_KEY>', Constants.API_KEY);

        const response = await fetch(API_URL);
        const jsonResult = await response.json();

        // console.log(jsonResult);

        // remove channels and playlist
        const jsonResultOnlyVideos = jsonResult.items.filter((item) => {
          return item.id.kind === 'youtube#video';
        });
        setVideosList(jsonResultOnlyVideos);
      } catch (error) {
        console.error('Error retrieving results: ', error);
      }
    }
    getVideos();
  }, [searchQuery]);
  if (videosList !== null) {
    // console.log(videosList);
    return videosList;
  }
  return null;
}

export { useGetVideos };

// const fortuneCookies = await response.json();

// const randomIndex = random(fortuneCookies.length);
// const currentFortune = fortuneCookies[randomIndex];

/*
const jsonResult = `{
  "kind": "youtube#searchListResponse",
  "etag": "RXeVZTJK8FFBBH0Cm8WlzqcRejU",
  "nextPageToken": "CBkQAA",
  "regionCode": "MX",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "erVBLPpMMiM_kP2Bgd59q8BKSY4",
      "id": {
        "kind": "youtube#video",
        "videoId": "iwCtid1GDms"
      },
      "snippet": {
        "publishedAt": "2020-12-03T19:00:06Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "SURFING WITH WORLD CHAMPION ITALO FERREIRA",
        "description": "STAY PSYCHED MERCHANDISE: https://www.jamieobrienshop.com - CATCH SURF JOB COLLECTION: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/iwCtid1GDms/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/iwCtid1GDms/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/iwCtid1GDms/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-03T19:00:06Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "pxUL7ZFQd5NRqkVF4kpfA4qIeMY",
      "id": {
        "kind": "youtube#video",
        "videoId": "hwLo7aU1Aas"
      },
      "snippet": {
        "publishedAt": "2019-12-26T15:09:18Z",
        "channelId": "UCKo-NbWOxnxBnU41b-AoKeA",
        "title": "The Best Surfing Clips of 2019",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SURFER",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-26T15:09:18Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "2yJ37NZiK32DkdOgqI2tuSXeiis",
      "id": {
        "kind": "youtube#video",
        "videoId": "rj7xMBxd5iY"
      },
      "snippet": {
        "publishedAt": "2017-11-12T11:09:52Z",
        "channelId": "UCiiFGfvlKvX3uzMovO3unaw",
        "title": "BIG WAVE SURFING COMPILATION 2017",
        "description": "BIG WAVE SURFING COMPILATION 2017 ** REVISED **AMAZING FOOTAGE ** WITH 60-100FT- HUGE SURF Please Subscribe if You Would like to see More ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Absolutely Flawless",
        "liveBroadcastContent": "none",
        "publishTime": "2017-11-12T11:09:52Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "4Q6KEL9U0gBF3F54oundmuoVkik",
      "id": {
        "kind": "youtube#video",
        "videoId": "W7h-Yho8EB0"
      },
      "snippet": {
        "publishedAt": "2019-06-15T15:21:45Z",
        "channelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "title": "GoPro: Top 10 Surf Moments",
        "description": "Celebrate International Surf Day with GoPro's Top 10 Surf Moments. Shot 100% on GoPro: http://bit.ly/2wUMwfI Get stoked and subscribe: http://goo.gl/HgVXpQ ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GoPro",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-15T15:21:45Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "FMArmTMWjxNKrmP8WP-Wj9kw87Y",
      "id": {
        "kind": "youtube#video",
        "videoId": "9p9TYm_xtRw"
      },
      "snippet": {
        "publishedAt": "2020-10-30T06:00:12Z",
        "channelId": "UCOtHosOqPe9d6vLy-8LfHzQ",
        "title": "Australia&#39;s Beautiful Surfing Film &quot;A MANO SURF&quot;",
        "description": "Shot throughout the Northern Rivers of NSW, Australia, the film romanticizes different forms of wave riding and the art of hand shaping a board whilst also ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9p9TYm_xtRw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9p9TYm_xtRw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9p9TYm_xtRw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "NobodySurf : Surfing Videos",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-30T06:00:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "VhJED3-dvIcrK1laQP2ockhd3IE",
      "id": {
        "kind": "youtube#video",
        "videoId": "ShSzXqMLaAA"
      },
      "snippet": {
        "publishedAt": "2020-11-26T19:00:04Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "THANKSGIVING SURF SESSION AT WAIMEA BAY!",
        "description": "STAY PSYCHED MERCHANDISE: https://www.jamieobrienshop.com - CATCH SURF JOB COLLECTION: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ShSzXqMLaAA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ShSzXqMLaAA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ShSzXqMLaAA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-26T19:00:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Uo12d0CVYgsEtPpSUWxrtqIvt_w",
      "id": {
        "kind": "youtube#video",
        "videoId": "A_0tgAVjQPw"
      },
      "snippet": {
        "publishedAt": "2018-12-18T03:46:00Z",
        "channelId": "UCnJ0mt5Cgx4ER_LhTijG_4A",
        "title": "2018 Billabong Pipe Masters - Final Day Highlights | Triple Crown of Surfing | VANS",
        "description": "The waves were going off, Medina was going off. Watch the best moments of the final day of the Billabong Pipe Masters! Vans Triple Crown of Surfing is going ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/A_0tgAVjQPw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/A_0tgAVjQPw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/A_0tgAVjQPw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vans",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-18T03:46:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "C8K9JBYdZjOBNL_jKIgB9ZwZnDE",
      "id": {
        "kind": "youtube#video",
        "videoId": "CWYDxh7QD34"
      },
      "snippet": {
        "publishedAt": "2014-09-02T16:52:33Z",
        "channelId": "UCblfuW_4rakIf2h6aqANefA",
        "title": "Best surfing action from Red Bull Cape Fear 2014",
        "description": "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Red Bull",
        "liveBroadcastContent": "none",
        "publishTime": "2014-09-02T16:52:33Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "GogQYMUYnAqB7jXikTP1bK2saNM",
      "id": {
        "kind": "youtube#video",
        "videoId": "1UYfKltcJw4"
      },
      "snippet": {
        "publishedAt": "2020-12-01T11:00:00Z",
        "channelId": "UCzcQOTuXYGuCvTekySb_CeQ",
        "title": "Bali Surf Journal - November 2020",
        "description": "The dry season trade wind hung around like a good smell for the first half of the month - so there were lots of unseasonally good waves on the Bukit with a few ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1UYfKltcJw4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1UYfKltcJw4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1UYfKltcJw4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfers of Bali",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-01T11:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "liKp0WiuoyTmghL32HlsPreo_Ks",
      "id": {
        "kind": "youtube#video",
        "videoId": "OU4d3O_VZCk"
      },
      "snippet": {
        "publishedAt": "2020-02-06T19:00:04Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "SURFING WITH KELLY SLATER (HAWAII)",
        "description": "FUN BARRELS, BEATER SPINS, AND GOOD TIMES WITH SOME OF THE REDBULL SKATEBOARD TEAM! STAY PSYCHED MERCH! HTTP://WWW.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2020-02-06T19:00:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XmJeXGDbGpk-kl8uvoRAKsxoQqA",
      "id": {
        "kind": "youtube#video",
        "videoId": "uggV85mlEes"
      },
      "snippet": {
        "publishedAt": "2020-11-18T18:00:12Z",
        "channelId": "UC_F4Iy5korq2mEWZDQhG07w",
        "title": "SURFING PERFECT WAVES WITH DEADLY JELLYFISH! || NEW SUNRISE SHACK!",
        "description": "Fun swell on North Shore and strange winds bring jellyfish to shore. Get your This is Livin' merch! https://koarothman.com/ Koa's Social ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uggV85mlEes/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uggV85mlEes/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uggV85mlEes/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Koa Rothman",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-18T18:00:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MbWjTNCVV0-mnGAJOR6rrl6aNRg",
      "id": {
        "kind": "youtube#video",
        "videoId": "1WZuzGHuYH8"
      },
      "snippet": {
        "publishedAt": "2020-11-17T00:54:17Z",
        "channelId": "UCsXYYt9hmwvaIl6v73JHKWw",
        "title": "The Truth About Surfing in Los Angeles",
        "description": "Here's the truth about surfing in Los Angeles, to be more specific the South Bay region of Los Angeles. Forget the social media post. Photographers and ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1WZuzGHuYH8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1WZuzGHuYH8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1WZuzGHuYH8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Brad Jacobson",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-17T00:54:17Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "9Fj4J73HkWaxcaZVHGOOuFUdi90",
      "id": {
        "kind": "youtube#video",
        "videoId": "vd8maUNHKsg"
      },
      "snippet": {
        "publishedAt": "2020-10-05T19:00:14Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "SURFING KEIKI SHOREBREAK WITH CLARK LITTLE",
        "description": "SURFING KEIKI SHOREBREAK WITH CLARK LITTLE. THEN WINCHING BEAVER CREEK AT FULL SPEED. AND IN SPEEDOS, OF COURSE.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vd8maUNHKsg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vd8maUNHKsg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vd8maUNHKsg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-05T19:00:14Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5bmTNdPAq4YPqYG_rsAmNVVH_tU",
      "id": {
        "kind": "youtube#video",
        "videoId": "84LOSK4DZ9c"
      },
      "snippet": {
        "publishedAt": "2020-12-03T02:13:15Z",
        "channelId": "UCsXYYt9hmwvaIl6v73JHKWw",
        "title": "The Truth About Surfers",
        "description": "This is the truth about surfers. Surfers are a unique group. There is a large assumption that surfers are partied out bums with long scraggly salt water hair how ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/84LOSK4DZ9c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/84LOSK4DZ9c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/84LOSK4DZ9c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Brad Jacobson",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-03T02:13:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ynyY5Cl-Gr9QlfZOewxtYmPZl1Q",
      "id": {
        "kind": "youtube#video",
        "videoId": "29dL2hztP8A"
      },
      "snippet": {
        "publishedAt": "2020-04-11T19:00:00Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "STORM DRAIN SURFING",
        "description": "THIS EPISODE WAS FILMED PREVIOUSLY. GIVEN THE CURRENT AND EVOLVING SITUATION OF COVID-19 PLEASE CONTINUE TO PRACTICE SOCIAL ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/29dL2hztP8A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/29dL2hztP8A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/29dL2hztP8A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2020-04-11T19:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XhAza6wPyaKtebdR95H0h8FH_-g",
      "id": {
        "kind": "youtube#video",
        "videoId": "rv8zzZnXdJw"
      },
      "snippet": {
        "publishedAt": "2020-12-03T01:41:23Z",
        "channelId": "UCOtHosOqPe9d6vLy-8LfHzQ",
        "title": "Kelly Slater, Rob Machado and more | Best Surfing Videos of the Month [November 2020]",
        "description": "60 surfing videos selected by NobodySurf in November 2020. Full edit of each video is available on 'Surfing Videos of the Week' playlist: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rv8zzZnXdJw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rv8zzZnXdJw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rv8zzZnXdJw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "NobodySurf : Surfing Videos",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-03T01:41:23Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Qg_2juJGbT6JkWz5sJtRm-zn8ns",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg"
      },
      "snippet": {
        "publishedAt": "2012-12-02T06:07:19Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "Jamie O'Brien",
        "description": "JOB ~ VLOGS ~ STAY PSYCHED.",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwng2lymeChziCupEPQuudpA8zEmX-F_gwSuNkS_j5w=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwng2lymeChziCupEPQuudpA8zEmX-F_gwSuNkS_j5w=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwng2lymeChziCupEPQuudpA8zEmX-F_gwSuNkS_j5w=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2012-12-02T06:07:19Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "iv_tUmGcgifDz4UbRSvQ6pYJNig",
      "id": {
        "kind": "youtube#video",
        "videoId": "DcnZYGhMgWI"
      },
      "snippet": {
        "publishedAt": "2020-11-02T10:02:23Z",
        "channelId": "UCBwN7WtBF-LQxvdisAk9lIQ",
        "title": "Kelly Slater Surfing Uncrowded Uluwatu - Surfing Bali - 31st October, 2020",
        "description": "Kelly Slater is still enjoying his time here in Bali, and we finally got to film him surfing a few days ago at Uluwatu. There was plenty of swell hanging about from ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DcnZYGhMgWI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DcnZYGhMgWI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DcnZYGhMgWI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Always Left - Indo Surf Content",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-02T10:02:23Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Fre7iUslvMmtw_x_e6j28Z2DRKA",
      "id": {
        "kind": "youtube#video",
        "videoId": "XTBt-wc9dYo"
      },
      "snippet": {
        "publishedAt": "2020-11-06T15:24:30Z",
        "channelId": "UCeYue9Nbodzg3T1Nt88E3fg",
        "title": "Dangerously Fun Surfing",
        "description": "This week Mason Ho and Sheldon Paishon surfed a dangerously fun wave in Hawaii. Reef burns, couple cuts and some sea urchins in the body for these 2 on ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XTBt-wc9dYo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XTBt-wc9dYo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XTBt-wc9dYo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ho & Pringle Productions",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-06T15:24:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "n1ZUvCreTqzXRIrOaDxWQzPLWNM",
      "id": {
        "kind": "youtube#video",
        "videoId": "VcTxqWV6_xg"
      },
      "snippet": {
        "publishedAt": "2020-11-27T00:26:32Z",
        "channelId": "UCsG5dkqFUHZO6eY9uOzQqow",
        "title": "Pure Australian POWER Surfing | Wade Carmichael in &#39;Mint&#39;",
        "description": "Grab an umbrella, Avoca Jesus is in town! Film by Jesse Little/Rusty.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VcTxqWV6_xg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VcTxqWV6_xg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VcTxqWV6_xg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Stab: We like to surf",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-27T00:26:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "U9wFXD6G-gOfbAr-F4LjuyjzfZ8",
      "id": {
        "kind": "youtube#video",
        "videoId": "AnJkHavPq6Q"
      },
      "snippet": {
        "publishedAt": "2020-12-03T16:36:38Z",
        "channelId": "UCcFeWrfTnEM3qBHBU3S-yMA",
        "title": "Big Wave Surfing PE&#39;AHI, Maui &quot;Jaws Maui&quot; December 2, 2020 (RAW CLIPS)",
        "description": "First XL size NW swell of 2020 hits the coastlines of North Maui. Big wave surfing at Pe'ahi 'Jaws' on Maui, Hawaii finally wakes up after 12 months of silence ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/AnJkHavPq6Q/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/AnJkHavPq6Q/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/AnJkHavPq6Q/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jake Houglum",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-03T16:36:38Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PM7acwHXL29mFOPMVN5rHa655Fg",
      "id": {
        "kind": "youtube#video",
        "videoId": "PUsczLpxJDo"
      },
      "snippet": {
        "publishedAt": "2020-06-06T17:00:02Z",
        "channelId": "UCIsbLox_y9dCIMLd8tdC6qg",
        "title": "Pro Surfer Reviews Surf Movies, from &#39;Blue Crush&#39; to &#39;Point Break&#39; | Vanity Fair",
        "description": "Pro surfer Kanoa Igarashi reviews surf movies including 'Blue Crush,' 'Point Break,' 'Lords of Dogtown' and 'Surf's Up' and analyzes their stunts and believability ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PUsczLpxJDo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PUsczLpxJDo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PUsczLpxJDo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vanity Fair",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-06T17:00:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "YciG2yHTGCm8LQagZUH-Gvpu7c0",
      "id": {
        "kind": "youtube#video",
        "videoId": "TvMrSb4N1oQ"
      },
      "snippet": {
        "publishedAt": "2020-11-04T11:00:41Z",
        "channelId": "UCzcQOTuXYGuCvTekySb_CeQ",
        "title": "Bali Surf Journal - October 2020",
        "description": "Regarded as the final month of the dry season, October 2020 followed the script more or less. There were plenty of medium sized swells, and although the SE ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TvMrSb4N1oQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TvMrSb4N1oQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TvMrSb4N1oQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfers of Bali",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-04T11:00:41Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XGMdAcUk7GesxKF0H75O7Uwj3Q0",
      "id": {
        "kind": "youtube#video",
        "videoId": "zqDGZPizO0U"
      },
      "snippet": {
        "publishedAt": "2020-07-26T17:00:11Z",
        "channelId": "UCLOEGprmycLLbyzBj2jozLg",
        "title": "I went surfing with Casey Neistat | Dixie D&#39;Amelio",
        "description": "Hey guys! I was invited to go surfing with the legendary Casey Neistat and I couldn't say no. I hope you enjoy watching me surf! Listen to Be Happy ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zqDGZPizO0U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zqDGZPizO0U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zqDGZPizO0U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Dixie D'Amelio",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-26T17:00:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "E1NwQuUW4yHGAheJOYtDXEaSkAk",
      "id": {
        "kind": "youtube#video",
        "videoId": "26KzUnEbTUs"
      },
      "snippet": {
        "publishedAt": "2013-05-17T22:23:40Z",
        "channelId": "UCblfuW_4rakIf2h6aqANefA",
        "title": "Surfing the Heaviest Wave in the World - Teahupoo",
        "description": "Get barreled http://win.gs/1alYVe2 May 13th, 2013 will go down as a memorable day in the Tahitian history books. Watch as Tahitian demi-god Raimana Van ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/26KzUnEbTUs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/26KzUnEbTUs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/26KzUnEbTUs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Red Bull",
        "liveBroadcastContent": "none",
        "publishTime": "2013-05-17T22:23:40Z"
      }
    }
  ]
}`;
*/
