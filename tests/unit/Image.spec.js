import {
  shallowMount
} from '@vue/test-utils'
import Image from '@/components/Image.vue'
import store from '@/store.js'

describe("Image.vue", () => {
  const mockImageObj = {
    images: [{
      "width": 520,
      "height": 780,
      "type": "COLLECTION_MOVIE_LIST_DISPLAY",
      "url": "https://segami.showtime.com/segami/0/0/3398568/00/520x780/image.jpg"
    }],
    altText: "Against the Tide"
  }

  it('has an alt text', () => {
    const wrapper = shallowMount(Image, {
      store,
      propsData: {
        images: mockImageObj.images,
        altText: mockImageObj.altText
      }
    });
  
    expect(wrapper.attributes('alt')).toBe("Against the Tide");
  })

  it('renders an image', () => {
    const wrapper = shallowMount(Image, {
      store,
      propsData: {
        images: mockImageObj.images,
        altText: mockImageObj.altText
      }
    });
  
    expect(wrapper.attributes('src')).toBe("https://segami.showtime.com/segami/0/0/3398568/00/520x780/image.jpg");
  })
  
})