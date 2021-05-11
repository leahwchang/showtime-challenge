import {
  shallowMount
} from '@vue/test-utils'
import MetaData from '@/components/MetaData.vue'
import store from '@/store.js'

describe("MetaData.vue", () => {
  const mockTitleObj = {
    title: {
      name: "Against the Tide",
      rating: "TV_PG",
      description: "A chronicle of the seminal 1970 matchup between USC and the Crimson Tide.",
      flags: [
        "LAST_CHANCE",
        "HD",
        "FEATURED"
      ]
    }
  }

  it('renders movie title', () => {
    const wrapper = shallowMount(MetaData, {
      store,
      data() {
        return {
          sharedState: mockTitleObj
        }
      }
    })
    expect(wrapper.find("h2").text()).toBe("Against the Tide")
  })

  it('renders movie rating', () => {
    const wrapper = shallowMount(MetaData, {
      store,
      data() {
        return {
          sharedState: mockTitleObj
        }
      }
    })
    expect(wrapper.find("#rating").text()).toBe("TV PG")
  })

  it('renders movie description', () => {
    const wrapper = shallowMount(MetaData, {
      store,
      data() {
        return {
          sharedState: mockTitleObj
        }
      }
    })
    expect(wrapper.find("#description").text()).toBe("A chronicle of the seminal 1970 matchup between USC and the Crimson Tide.")
  })

  it('renders flags', () => {
    const wrapper = shallowMount(MetaData, {
      store,
      data() {
        return {
          sharedState: mockTitleObj
        }
      }
    })

    expect(wrapper.findAll(".flag").length).toBe(3)
  })

})