import React from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
        <img className="logo center" src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1380&t=st=1690573395~exp=1690573995~hmac=042b9595dafa21852ab92432e21bae2f16e1a042296f520348f483f1ec3527c7" alt="" />
      <h1 className="center">Menu</h1>
      {/* category chips */}
        <div className="categoryChips">
            <div className="chip chipSelected">All</div>
            <div className="chip">Burger</div>
            <div className="chip">Pizza</div>
            <div className="chip">Pasta</div>
            <div className="chip">Sandwich</div>
            <div className="chip">Wrap</div>
            <div className="chip">Asian</div>
            <div className="chip">Chicken</div>
            <div className="chip">Beef</div>
            <div className="chip">Fish</div>
            <div className="chip">Vegetarian</div>
            <div className="chip">Dessert</div>
            <div className="chip">Drinks</div>
        </div>
      <div className="menuWrapper">
        <FoodCard
          foodDescription={
            "A sandwich consisting of a patty made from ground chicken..."
          }
          foodName="Normal Burger"
          foodPrice={"450"}
          foodImage="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/juicy-appetizing-hamburger-on-a-white-background-natalia-zaika.jpg"
        />
        <FoodCard
          foodDescription={"A Pizza consisting of a vegitables,tuna,chees..."}
          foodName="Special Pizza"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/pizza-white-background-9753649.jpg?w=992"
        />
        <FoodCard
          foodDescription={"A Chicken Stir fry consisting of a vegitables,tuna,chees..."}
          foodName="Teriyaki Chicken Stir fry"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/teriyaki-chicken-stir-fry-3242423.jpg?w=992"
        />
        <FoodCard
          foodDescription={"A curry rice consisting of a vegitables,tuna,chees..."}
          foodName="Japanese curry rice"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/japanese-curry-rice-12485963.jpg?w=768"
        />
        <FoodCard
          foodDescription={"Chicken Stir-fry in a pan. Wok udon noodles..."}
          foodName="Chicken Stir-fry"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/chicken-stir-fry-pan-wok-udon-noodles-traditional-asian-food-white-background-top-view-190988263.jpg?w=992"
        />
        <FoodCard
          foodDescription={"Coppa, Capocollo, Capicollo meat popular italian..."}
          foodName="Coppa Capocollo"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/coppa-capocollo-capicollo-meat-popular-italian-antipasto-food-white-background-top-view-194371568.jpg?w=992"
        />
        <FoodCard
          foodDescription={"A Pizza consisting of a vegitables,tuna,chees..."}
          foodName="Pan Cake"
          foodPrice={"480"}
          foodImage="https://img.freepik.com/premium-vector/delicious-fluffy-pancake-with-honey-butter-toppings-white-background_281653-999.jpg?w=1480"
        />
        <FoodCard
          foodDescription={"A Pizza consisting of a vegitables,tuna,chees..."}
          foodName="Sushi roll"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/sushi-roll-philadelphia-salmon-avocado-cream-cheese-menu-japanese-food-white-background-top-view-195638793.jpg?w=992"
        />
        <FoodCard
          foodDescription={"A Pasta consisting of a vegitables,chees..."}
          foodName="Pasta"
          foodPrice={"480"}
          foodImage="https://thumbs.dreamstime.com/z/pasta-tomatoes-plate-ukrainian-cuisine-photo-food-white-background-high-quality-246685984.jpg?w=992"
        />
        <FoodCard
          foodDescription={"A Pizza consisting of a vegitables,tuna,chees..."}
          foodName="Hot Dog"
          foodPrice={"320"}
          foodImage="https://thumbs.dreamstime.com/z/hotdog-plate-french-fries-white-background-bottle-ketchup-mustard-84306449.jpg?w=992"
        />
        <FoodCard
          foodDescription={
            "A buorrito consisting of a vegitables,beef,chees..."
          }
          foodName="Buorrito"
          foodPrice={"380"}
          foodImage="https://www.pngfind.com/pngs/m/5-52267_mexican-food-png-mexican-food-white-background-transparent.png"
        />
        <FoodCard
          foodDescription={
            "A buorrito consisting of a vegitables,beef,chees..."
          }
          foodName="Chicken Wrap"
          foodPrice={"380"}
          foodImage="https://thumbs.dreamstime.com/z/traditional-mexican-roll-burritos-meat-vegetable-salad-french-fries-white-background-top-view-265968286.jpg?w=992"
        />
      </div>
    </div>
  );
}

export default Menu;
