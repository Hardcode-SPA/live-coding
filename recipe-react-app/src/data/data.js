import config from '../js/config.js';

const data = [
    {
      id: 1,
      title: 'Spaghetti Napoli',
      category: 'Noodles',
      country: 'Italy',
      description: 'Super nice italian pasta fooda',
      picture: `${config.apiUrl}:${config.apiPort}/assets/images/recipes/spaghetti.jpg`,
      procedure: 
  `1. Heat the salted water until it's boiling
  2. Put the pasta in the boiling water
  3. Wait 10 minutes
  4. Get the pasta out of the water
  5. Enjoy ;-)`,
      cooktime: 20, // minutes
      ingredients: ['Pasta', 'Water', 'Salt'],
    },
  
    {
      id: 2,
      title: 'Crock Pot Roast',
      category: 'Roast',
      country: 'Germany',
      description: 'Amazing flavor, and so simple! No salt needed here. In fact, you may wish to use half the ranch dressing mix to cut back on the saltiness.',
      picture: `${config.apiUrl}:${config.apiPort}/assets/images/recipes/crock_pot_roast.jpg`,
      procedure: 
  `1. Place beef roast in crock pot.
  2. Mix the dried mixes together in a bowl and sprinkle over the roast.
  3. Pour the water around the roast.
  4. Cook on low for 7-9 hours.`,
      cooktime: 420, // minutes
      ingredients: ['Beef roast', 'Brown gravy mix', 'Dried Italian salad dressing mix', 'Dry ranch dressing mix', 'Water'],
    },
  
    {
      id: 3,
      title: 'Roasted Asparagus',
      category: 'Roasted Vegetables',
      country: 'Germany',
      description: 'I got this recipe from "Simple Vegetarian Pleasures" by Jeanne Lemlin. I LOVE asparagus and am always on the lookout for new ways to make it. This is such an easy and elegant way to serve it. The asparagus gets a slightly nutty flavor after roasting, which makes it even more yummy.',
      picture: `${config.apiUrl}:${config.apiPort}/assets/images/recipes/roasted_aspargus.jpg`,
      procedure: 
  `1. Preheat oven to 425°F.
  2. Cut off the woody bottom part of the asparagus spears and discard.
  3. With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears.
  4. Place asparagus on foil-lined baking sheet and drizzle with olive oil.
  5. Sprinkle with salt.
  6. With your hands, roll the asparagus around until they are evenly coated with oil and salt.
  7. Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.
  8. They should be tender when pierced with the tip of a knife.
  9. The tips of the spears will get very brown but watch them to prevent burning.
  10. They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.`,
      cooktime: 25, // minutes
      ingredients: ['Asparagus', 'Olive oil', 'Kosher salt'],
    },
  
    {
      id: 4,
      title: 'Old-Fashioned Oatmeal Cookies',
      category: 'Cookies',
      country: 'Scotland',
      description: "Good 'ol cookies made of oat. Simple and tasty like in my childhood.",
      picture: `${config.apiUrl}:${config.apiPort}/assets/images/recipes/oat_cookies.jpg`,
      procedure: 
  `1. Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.
  2. Drain raisins, reserving the liquid.
  3. Add enough water to reserved liquid to measure 1/2 cup.
  4. Heat oven to 400°.
  5. Mix thoroughly shortening, sugar, eggs and vanilla.
  6. Stir in reserved liquid.
  7. Blend in remaining ingredients.
  8. Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.
  9. Bake 8 to 10 minutes or until light brown.
  10. About 6 1/2 dozen cookies.`,
      cooktime: 55, // minutes
      ingredients: ['Raisins', 'Water', 'Shortening', 'Sugar', 'Flour', 'Soda', 'Salt', 'Cinnamon', 'Baking powder', 'Cloves', 'Oats', 'Chopped nuts'],
    },
  
    {
      id: 5,
      title: 'Egg-fried rice',
      category: 'Fried rice',
      country: 'China',
      description: "Make your own healthy egg-fried rice with our easy recipe. Use leftover rice, or cook and dry it on a plate before using so it doesn't stick to the wok.",
      picture: `${config.apiUrl}:${config.apiPort}/assets/images/recipes/egg_fried_rice.jpg`,
      procedure: 
  `1. Cook the rice following pack instructions, then drain, spread it out to steam-dry and set aside.
  2. Heat 2 tbsp of the oil in a large wok over a high heat, then add the onion and fry until lightly browned, around 5 mins. Add the rice, stir and toast for about 3 mins, then move to the side of the pan.
  3. Add the remaining oil, then tip in the egg mixture. Leave to cook a little, then mix in with the rice – stir vigorously to coat the grains or, if you prefer the egg chunkier, allow to set for a little longer before breaking up and stirring through. Tip into a serving bowl and scatter over the spring onion to serve. You can also add sesame oil, ground white pepper and a splash of soy sauce to season.`,
      cooktime: 20, // minutes
      ingredients: ['Long grain rice', 'Vegetable oil', 'Onion', 'Eggs', 'Spring onions', 'Soy sauce'],
    },
];

export default data;