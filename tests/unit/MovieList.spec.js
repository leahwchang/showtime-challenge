import {
  mount
} from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import Movie from '@/components/Movie.vue'
import store from '@/store.js'

describe("MovieList.vue", () => {
  const mockTitleObj = [{
      name: "Against the Tide",
      images: [{
          width: 520,
          height: 780,
          type: "COLLECTION_MOVIE_LIST_DISPLAY",
          url: "https://segami.showtime.com/segami/0/0/3398568/00/520x780/image.jpg"
        },
        {
          width: 1280,
          height: 640,
          type: "COLLECTION_MOVIE_LIST_DISPLAY_LANDSCAPE",
          url: "https://segami.showtime.com/segami/0/0/3398568/00h/1280x640/image.jpg"
        }
      ],
    },
    {
      name: "Ex Machina",
      images: [{
          width: 520,
          height: 780,
          type: "COLLECTION_MOVIE_LIST_DISPLAY",
          url: "https://segami.showtime.com/segami/0/0/3481983/00/520x780/image.jpg"
        },
        {
          width: 1280,
          height: 640,
          type: "COLLECTION_MOVIE_LIST_DISPLAY_LANDSCAPE",
          url: "https://segami.showtime.com/segami/0/0/3481983/00h/1280x640/image.jpg"
        }
      ],
    }
  ];

  it('renders an image', () => {
    const wrapper = mount(MovieList, {
      store,
      propsData: {
        titles: mockTitleObj
      },
      children: [Movie]
    })
    expect(wrapper.find('.movie').exists()).toBe(true)
  })

})