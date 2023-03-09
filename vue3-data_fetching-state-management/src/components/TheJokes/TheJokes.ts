import axios from 'axios';

import type { FavoriteJoke } from '../TheFavoriteJokes/TheFavoriteJokes'


type Joke = {

    category: "Programming" |"Miscellaneous" |"Dark" | "Pun" |"Spooky" | "Christmas",
    type: "single" | "twopart",
    joke: string,
    setup: string,
    delivery: string,
    flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
    },
    id: number,
    safe: boolean,
    lang: "en"
}

type Response = {
  error: boolean,
  amount: number
  jokes: Joke[]
}

export default {
  data() {
    return {
      jokes: [] as Joke[],
    };
  },
  methods: {
    async getJokes() {
      const { data } = await axios.get<Response>('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10');
      this.jokes = data.jokes;
      console.log(data)
    },
    async addToFavorites(joke: FavoriteJoke) { 
      console.log(joke)
      const { data } = await axios.post('http://localhost:3004/jokes', {joke});
      console.log(data)
    }
  },
  mounted() {
    this.getJokes();
  },
};