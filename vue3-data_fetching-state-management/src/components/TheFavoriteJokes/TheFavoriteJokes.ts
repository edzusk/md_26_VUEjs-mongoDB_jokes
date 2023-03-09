import axios from 'axios';


export type FavoriteJoke = {
  joke: string;
  _id: string;
}

export default {
  data() {
    return {
      jokes: [] as FavoriteJoke[],
    };
  },
  methods: {
    async getJokes() {
      const { data } = await axios.get<FavoriteJoke[]>('http://localhost:3004/jokes');
      this.jokes = data;
    },
    async removeFromFavorites(_id: FavoriteJoke['_id']) { 
      console.log(_id)
      const  res  = await axios.delete(`http://localhost:3004/jokes/${_id}`);
      console.log(res)
      this.jokes = this.jokes.filter(joke => joke['_id']!== _id);
    }
  },
  mounted() {
    this.getJokes();
  },
};