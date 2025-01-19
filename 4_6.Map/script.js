'use strict';
/*

  The Map object holds key-value pairs and remembers the original insertion order of the keys. 
  Any value (both objects and primitive values) may be used as either a key or a value.

*/

////////////////////////////////////////////////

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

////////////////////////////////////////////////

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showPublicData: function(){
      console.log(`${this.name} - ${this.surname}`);
    }
}


const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 70}
];

const map = new Map();

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

console.log(map);

////////////////////////////////////////////////

const budget = [5000, 15000, 25000];

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

const map2 = new Map([
  [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
  map2.set(shop, budget[i]);
});

console.log(map2);


// map.delete(key);
// map.clear();
// map.size;
// map.keys();

// const goods = [];
// for (let shop of map.keys()){
//   goods.push(Object.keys(shop));
// }

for(let price of map2.values()){
  console.log(price);
}

for(let [shop, price] of map.entries()){
  console.log(price, shop);
}