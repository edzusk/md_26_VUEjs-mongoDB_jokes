db = db.getSiblingDB('jokes');
db.createCollection('jokes');
db.jokes.insertMany([
  {
    joke: 'Yo mama’s so fat that even Dora don’t have time to explore her!',
},
]);