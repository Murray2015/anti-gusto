import React from "react";

function Choices() {
  return (
    <section>
      <button id="get-1-course" class="selectedBtn">
        Get 1 course
      </button>
      <button id="get-3-courses">Get 3 courses</button>
      <details>
        <summary>Dietary requirements</summary>
        <input
          type="radio"
          id="None"
          name="diet"
          value="None"
          checked="checked"
        />
        <label for="None">None</label>
        <br />
        <input type="radio" id="vegitarian" name="diet" value="vegitarian" />
        <label for="vegitarian">Vegitarian</label>
        <br />
        <input type="radio" id="vegan" name="diet" value="vegan" />
        <label for="vegan">Vegan</label>
        <br />
        <input type="radio" id="Ketogenic" name="diet" value="Ketogenic" />
        <label for="Ketogenic">Ketogenic</label>
        <br />
        <input type="radio" id="Pescetarian" name="diet" value="Pescetarian" />
        <label for="Pescetarian">Pescetarian</label>
        <br />
        <input type="radio" id="Paleo" name="diet" value="Paleo" />
        <label for="Paleo">Paleo</label>
        <br />
        <input type="radio" id="Primal" name="diet" value="Primal" />
        <label for="Primal">Primal</label>
        <br />
        <input type="radio" id="Whole30" name="diet" value="Whole30" />
        <label for="Whole30">Whole30</label>
        <br />
      </details>
      <details>
        <summary>Food intolerances</summary>
        <input type="checkbox" id="Dairy" name="intolerances" value="Dairy" />
        <label for="Dairy">Dairy</label>
        <br />
        <input type="checkbox" id="Egg" name="intolerances" value="Egg" />
        <label for="Egg">Egg</label>
        <br />
        <input type="checkbox" id="gluten" name="intolerances" value="gluten" />
        <label for="gluten">Gluten</label>
        <br />
        <input type="checkbox" id="Grains" name="intolerances" value="Grains" />
        <label for="Grains">Grains</label>
        <br />
        <input
          type="checkbox"
          id="Peanuts"
          name="intolerances"
          value="Peanut"
        />
        <label for="Peanuts">Peanuts</label>
        <br />
        <input
          type="checkbox"
          id="Seafood"
          name="intolerances"
          value="Seafood"
        />
        <label for="Seafood">Seafood</label>
        <br />
        <input type="checkbox" id="Sesame" name="intolerances" value="Sesame" />
        <label for="Sesame">Sesame</label>
        <br />
        <input
          type="checkbox"
          id="Shellfish"
          name="intolerances"
          value="Shellfish"
        />
        <label for="Shellfish">Shellfish</label>
        <br />
        <input type="checkbox" id="Soy" name="intolerances" value="Soy" />
        <label for="Soy">Soy</label>
        <br />
        <input
          type="checkbox"
          id="Sulfite"
          name="intolerances"
          value="Sulfite"
        />
        <label for="Sulfite">Sulfite</label>
        <br />
        <input
          type="checkbox"
          id="Tree-Nut"
          name="intolerances"
          value="Tree-Nut"
        />
        <label for="Tree-Nut">Tree Nut</label>
        <br />
        <input type="checkbox" id="Wheat" name="intolerances" value="Wheat" />
        <label for="Wheat">Wheat</label>
        <br />
      </details>
      <details open="true">
        <summary>What food would you like to eat?</summary>
        <input
          type="radio"
          id="Any"
          name="cusine"
          value="Any"
          checked="checked"
        />
        <label for="Any">Any</label>
        <br />
        <input type="radio" id="African" name="cusine" value="African" />
        <label for="African">African</label>
        <br />
        <input type="radio" id="American" name="cusine" value="American" />
        <label for="American">American</label>
        <br />
        <input type="radio" id="British" name="cusine" value="British" />
        <label for="British">British</label>
        <br />
        <input type="radio" id="Cajun" name="cusine" value="Cajun" />
        <label for="Cajun">Cajun</label>
        <br />
        <input type="radio" id="Caribbean" name="cusine" value="Caribbean" />
        <label for="Caribbean">Caribbean</label>
        <br />
        <input type="radio" id="Chinese" name="cusine" value="Chinese" />
        <label for="Chinese">Chinese</label>
        <br />
        <input
          type="radio"
          id="Eastern European"
          name="cusine"
          value="Eastern-European"
        />
        <label for="Eastern-European">Eastern European</label>
        <br />
        <input type="radio" id="European" name="cusine" value="European" />
        <label for="European">European</label>
        <br />
        <input type="radio" id="French" name="cusine" value="French" />
        <label for="French">French</label>
        <br />
        <input type="radio" id="German" name="cusine" value="German" />
        <label for="German">German</label>
        <br />
        <input type="radio" id="Greek" name="cusine" value="Greek" />
        <label for="Greek">Greek</label>
        <br />
        <input type="radio" id="Indian" name="cusine" value="Indian" />
        <label for="Indian">Indian</label>
        <br />
        <input type="radio" id="Irish" name="cusine" value="Irish" />
        <label for="Irish">Irish</label>
        <br />
        <input type="radio" id="Italian" name="cusine" value="Italian" />
        <label for="Italian">Italian</label>
        <br />
        <input type="radio" id="Japanese" name="cusine" value="Japanese" />
        <label for="Japanese">Japanese</label>
        <br />
        <input type="radio" id="Jewish" name="cusine" value="Jewish" />
        <label for="Jewish">Jewish</label>
        <br />
        <input type="radio" id="Korean" name="cusine" value="Korean" />
        <label for="Korean">Korean</label>
        <br />
        <input
          type="radio"
          id="Latin-American"
          name="cusine"
          value="Latin-American"
        />
        <label for="Latin-American">Latin American</label>
        <br />
        <input
          type="radio"
          id="Mediterranean"
          name="cusine"
          value="Mediterranean"
        />
        <label for="Mediterranean">Mediterranean</label>
        <br />
        <input type="radio" id="Mexican" name="cusine" value="Mexican" />
        <label for="Mexican">Mexican</label>
        <br />
        <input
          type="radio"
          id="Middle Eastern"
          name="cusine"
          value="Middle-Eastern"
        />
        <label for="Middle-Eastern">Middle Eastern</label>
        <br />
        <input type="radio" id="Nordic" name="cusine" value="Nordic" />
        <label for="Nordic">Nordic</label>
        <br />
        <input type="radio" id="Southern" name="cusine" value="Southern" />
        <label for="Southern">Southern</label>
        <br />
        <input type="radio" id="Spanish" name="cusine" value="Spanish" />
        <label for="Spanish">Spanish</label>
        <br />
        <input type="radio" id="Thai" name="cusine" value="Thai" />
        <label for="Thai">Thai</label>
        <br />
        <input type="radio" id="Vietnamese" name="cusine" value="Vietnamese" />
        <label for="Vietnamese">Vietnamese</label>
        <br />
      </details>
    </section>
  );
}

export default Choices;
