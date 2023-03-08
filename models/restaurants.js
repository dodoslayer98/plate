const restaurants = [
    {id: 1234565, name: "Dai Lo", address:"503 College St, Toronto, ON M6G 1A5", phone :"6473418882",
    menu:[
      "Crispy Eggplant",
      "Soy Braised Short Ribs",
      "Lobster & Shrimp Dumplings",
      "Spicy Beef Noodle Soup",
      "Shrimp Toast",
      "Crispy Octopus",
      "Crispy Pork Belly",
      "Kung Pao Chicken",
      "Wok Fried Garlic Scapes",
      "Char Siu Bao"
    ] },
    {id: 2345678, name: "Kinka Izakaya Original", address:"398 Church St, Toronto, ON M5B 2A2", phone :"4169770999", 
    menu:[
      "Takoyaki",
      "Gyudon",
      "Tuna Tataki",
      "Karaage",
      "Salmon Aburi",
      "Ebi Mayo",
      "Beef Short Ribs",
      "Pork Gyoza",
      "Okonomiyaki",
      "Matcha Cheesecake"
    ] },
    {id: 3456789, name: "Kathmandu Restaurant", address:"1260 Danforth Ave, Toronto, ON M4J 1M6", phone :"4164055959", 
    menu:[
      "Momo",
      "Chicken Tikka Masala",
      "Butter Chicken",
      "Daal Makhani",
      "Lamb Rogan Josh",
      "Chicken Biryani",
      "Aloo Gobi",
      "Naan",
      "Samosa",
      "Gulab Jamun"
    ] },
    {id: 4567890, name: "Lamesa Filipino Kitchen", address:"669 Queen St W, Toronto, ON M6J 1E6", phone :"6473462377", 
    menu:[
      "Sisig",
      "Adobo Fried Rice",
      "Bistek",
      "Kare Kare",
      "Lechon Kawali",
      "Chicken Inasal",
      "Pancit Palabok",
      "Lumpia Shanghai",
      "Ube Cheesecake",
      "Buko Pie"
    ] },
    {id: 5678901, name: "Seven Lives Tacos y Mariscos", address:"69 Kensington Ave, Toronto, ON M5T 2K2", phone :"4163934636", 
    menu:[
      "Fish Tacos",
      "Octopus Tostada",
      "Pork Belly Tacos",
      "Guac & Chips",
      "Quesadilla",
      "Shrimp Tacos",
      "Salsa & Chips",
      "Chorizo Tacos",
      "Ceviche Tostada",
      "Esquites"
    ] },
    {id: 6789012, name: "Aloette", address:"163 Spadina Ave, Toronto, ON M5V 2L6", phone :"4162603444", 
    menu:[
      "Oysters",
      "Beef Tartare",
      "Foie Gras Parfait",
      "Fried Chicken Sandwich",
      "Tuna Poke",
      "Pork Belly",
      "Shrimp Cocktail",
      "Steak Frites",
      "Burger",
      "Mushroom Toast"
    ] },
    {id: 7890123, name: "Bar Isabel", address:"797 College St, Toronto, ON M6G 1C7", phone :"4165322222", 
    menu:[
      "Grilled Octopus",
      "Charcuterie Board",
      "Pan Con Tomate",
      "Lamb Shank",
      "Patatas Bravas",
      "Hanger Steak",
      "Spanish Omelette",
      "Seared Foie Gras",
      "Beef Cheek",
      "Churros"
    ] },
    {id: 8901234, name: "Chantecler", address:"1320 Queen St W, Toronto, ON M6K 1L4", phone :"4166283586", 
    menu:[
      "Fried Chicken",
      "Chicken Liver Pate",
      "Steak Tartare",
      "Burrata",
      "Pork Belly",
      "Lamb Shoulder",
      "Brussels Sprouts",
      "Beef Tartare",
      "Scallops",
      "Chocolate Pot De Creme"
    ] },
    {id: 9012345, name: "Dandylion", address:"1198 Queen St W, Toronto, ON M6J 1J6", phone :"6474649100", 
    menu:[
      "Burrata",
      "Crispy Pork Belly",
      "Beef Tartare",
      "Squash Agnolotti",
      "Rabbit Pappardelle",
      "Striped Bass",
      "Cote De Boeuf",
      "Carrot Tarte Tatin",
      "Chocolate Ganache",
      "Cheese Plate"
    ] },
    {id: 1122334, name: "Canoe", address:"66 Wellington St W, Toronto, ON M5K 1H6", phone :"4163640054", 
    menu: [
      "Poached BC Octopus",
      "Rabbit and Foie Gras Torchon",
      "Quebec Foie Gras Parfait",
      "Grilled Bison Flat Iron",
      "Nova Scotia Lobster",
      "Alberta Venison Loin",
      "Roasted Elk Loin",
      "Sablefish in Brown Butter",
      "Crispy Duck Confit",
      "Muskoka Elk Tartare"
    ]}
];




module.exports = {
  getAll,
  getOne

}


function getOne(id){
  return restaurants.find(rest => rest.id === parseInt(id))
}

function getAll(){
  return restaurants}
 
