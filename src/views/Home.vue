<template>
  <!-- <div class="header">
    <h1>Showtime Movies</h1>
  </div> -->
  <div class="main-wrapper">
    <div class="scrollable-container">
      <MovieList class="scrollable" :titles="titles" />
    </div>
    <div class="sidebar">
      <MetaData />
    </div>
  </div>
</template>

<script>
  import MovieList from '@/components/MovieList.vue'
  import MetaData from '@/components/MetaData.vue'

  export default {
    name: 'Home',
    components: {
      MovieList,
      MetaData
    },
    data() {
      return {
        titles: []
      }
    },
    created() {
      this.titles = [{
          "type": "Movie",
          "titleRating": "TV_PG",
          "releaseYear": 2013,
          "duration": 3662,
          "advisories": [
            "Adult Content"
          ],
          "expirationDate": 1612155599000,
          "downloadSupported": true,
          "creditMarkerMillis": 3619000,
          "countdownMillis": 10000,
          "titleRatingDisplayName": "TV-PG",
          "id": 3398568,
          "name": "Against the Tide",
          "sortName": "Against the Tide",
          "credits": [{
              "type": "Director",
              "name": "Mark Davis ",
              "creditDetail": "Directed by"
            },
            {
              "type": "Actor",
              "name": "Dave  Ullin",
              "role": "Himself"
            }
          ],
          "images": [{
              "width": 520,
              "height": 780,
              "type": "COLLECTION_MOVIE_LIST_DISPLAY",
              "url": "https://segami.showtime.com/segami/0/0/3398568/00/520x780/image.jpg"
            },
            {
              "width": 1280,
              "height": 640,
              "type": "COLLECTION_MOVIE_LIST_DISPLAY_LANDSCAPE",
              "url": "https://segami.showtime.com/segami/0/0/3398568/00h/1280x640/image.jpg"
            }
          ],
          "description": {
            "short": "A chronicle of the seminal 1970 matchup between USC and the Crimson Tide.",
            "medium": "A Showtime Sports chronicle of the 1970 college football matchup between USC and the Crimson Tide examines the surprising decision made by legendary coach Paul \"Bear\" Bryant and its lasting impact on the struggle for integration.",
            "long": "A Showtime Sports chronicle of the seminal 1970 college football matchup between Alabama's Crimson Tide and USC Trojans at Birmingham's Legion Field. Through interviews with former Alabama legends Joe Namath, John Mitchell and USC stars Sam \"Bam\" Cunningham, Jimmy Jones and more, this documentary examines coach Paul \"Bear\" Bryant's surprising decision to bring a dominant, racially integrated football team onto the field in Birmingham for the very first time and reveals the impact college football played in the struggle for integration. "
          },
          "links": [{
            "type": "SHORT_URL",
            "url": "shoanyti.me"
          }],
          "flags": [
            "LAST_CHANCE",
            "HD",
            "FEATURED"
          ],
          "social": {
            "displayLike": false,
            "displayFollow": false,
            "facebook": "http://www.facebook.com/showtime",
            "twitterUser": "@SHOWTIME",
            "twitterHash": "#Showtime",
            "shareText": "Watch instantly on Showtime Anytime<sup>&reg;</sup>!  Free with your Showtime subscription through participating TV providers."
          }
        },
        {
          "type": "Movie",
          "titleRating": "MOVIE_R",
          "releaseYear": 2015,
          "duration": 6499,
          "advisories": [
            "Adult Content",
            "Adult Language",
            "Nudity",
            "Violence"
          ],
          "expirationDate": 1658807999000,
          "downloadSupported": true,
          "creditMarkerMillis": 6164000,
          "countdownMillis": 10000,
          "titleRatingDisplayName": "R",
          "id": 3481983,
          "name": "Ex Machina",
          "sortName": "Ex Machina",
          "credits": [{
              "type": "Director",
              "name": "Alex Garland",
              "creditDetail": "Directed by"
            },
            {
              "type": "Writer",
              "name": "Alex Garland",
              "creditDetail": "Written by"
            },
            {
              "type": "Actor",
              "name": "Domhnall Gleeson",
              "role": "Caleb"
            },
            {
              "type": "Actor",
              "name": "Alicia Vikander",
              "role": "Ava"
            },
            {
              "type": "Actor",
              "name": "Oscar Isaac",
              "role": "Nathan"
            }
          ],
          "images": [{
              "width": 520,
              "height": 780,
              "type": "COLLECTION_MOVIE_LIST_DISPLAY",
              "url": "https://segami.showtime.com/segami/0/0/3481983/00/520x780/image.jpg"
            },
            {
              "width": 1280,
              "height": 640,
              "type": "COLLECTION_MOVIE_LIST_DISPLAY_LANDSCAPE",
              "url": "https://segami.showtime.com/segami/0/0/3481983/00h/1280x640/image.jpg"
            }
          ],
          "description": {
            "short": "A tech CEO creates a breathtaking artificial intelligence robot.",
            "medium": "A programmer wins a competition to spend a week at the private mountain estate of his company's brilliant and reclusive CEO. Once there, he learns he has been chosen to evaluate the capabilities of a new breathtaking artificial intelligence robot.",
            "long": "Caleb Smith (Domhnall Gleeson), a programmer at an internet-search giant, wins a competition to spend a week at the private mountain estate of the company's brilliant and reclusive CEO, Nathan Bateman (Oscar Isaac). Once there, Caleb learns that Nathan has chosen him to evaluate the capabilities, and ultimately the consciousness, of Ava (Alicia Vikander), a breathtaking artificial intelligence experiment whose emotional intelligence proves more sophisticated\u2014and more deceptive\u2014than the two men could have imagined.\r"
          },
          "links": [{
            "type": "SHORT_URL",
            "url": "shoanyti.me"
          }],
          "flags": [
            "HD",
            "FEATURED"
          ],
          "social": {
            "displayLike": false,
            "displayFollow": false,
            "facebook": "http://www.facebook.com/showtime",
            "twitterUser": "@SHOWTIME",
            "twitterHash": "#Showtime",
            "shareText": "Watch instantly on Showtime Anytime<sup>&reg;</sup>!  Free with your Showtime subscription through participating TV providers."
          }
        }
      ]
    }
  }
</script>

<style>
  .main-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .scrollable-container {
    height: 100%;
    position: fixed;
    padding: 0px;
    /* margin-top: -50px; */
    /* padding-top: 50px; */
    /* border-right: 1px solid #ddd; */
  }

  .scrollable {
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  .side-bar {
    height: 100%;
    overflow: auto;
    position: relative;
    padding: 0px;
  }
</style>