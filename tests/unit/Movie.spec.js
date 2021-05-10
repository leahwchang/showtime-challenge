import {
  shallowMount,
  mount
} from '@vue/test-utils'
import Image from '@/components/Image.vue'
import Movie from '@/components/Movie.vue'
import store from '@/store.js'

describe("Movie.vue", () => {
  const mockTitleObj = {
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
  };

  it('renders an image', () => {
    const wrapper = mount(Movie, {
      store,
      propsData: {
        title: mockTitleObj
      },
      children: [Image]
    })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders movie title', () => {
    const wrapper = shallowMount(Movie, {
      store,
      propsData: {
        title: mockTitleObj
      }
    })
    expect(wrapper.find("h3").text()).toBe("Against the Tide")
  })

  test('triggers a click', async () => {
    const wrapper = mount(Movie, {
      store,
      propsData: {
        title: mockTitleObj
      }
    })
  
    await wrapper.trigger('click')
    expect(wrapper.vm.title).toEqual(mockTitleObj)
  })

})