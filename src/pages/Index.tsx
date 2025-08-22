const Index = () => {
  return <main className="ef-page bg-[t#] bg-[#faf8f1]">
      {/* Full-width header card */}
      <div className="ef-header-card-full-width bg-[#393f2d]">
        <h1 className="ef-header-title-centered text-white">Diet Plan</h1>
      </div>
      
      {/* Nutritional Summary - remove circular frame */}
      <div className="ef-nutrition-summary-clean">
        <div className="ef-macros-clean">
          {/* Calories Section - Left */}
          <div className="ef-calories-section">
            <div className="ef-calories-label">Calories</div>
            <div className="ef-calories-value">1400 Kcal</div>
          </div>
          
          {/* Macronutrient Section - Right */}
          <div className="ef-macro-labels-horizontal">
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot protein">●</span>
              <div>
                <div className="ef-macro-text">Protein</div>
                <div className="ef-macro-value">80g</div>
              </div>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot carbs">●</span>
              <div>
                <div className="ef-macro-text">Carbs</div>
                <div className="ef-macro-value">150g</div>
              </div>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot fats">●</span>
              <div>
                <div className="ef-macro-text">Fats</div>
                <div className="ef-macro-value">50g</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meal cards in specified order */}
      <div className="ef-meal-cards-container">
        {/* Card 1: Pre-Breakfast */}
        <div className="ef-meal-card">
          <h3 className="ef-meal-title" data-meal="pre-breakfast">Pre-Breakfast</h3>
          <div className="ef-meal-time">
            <span>06:30 – 07:00</span>
            <span className="ef-meal-kcal">80 Kcal</span>
          </div>
          
          <div className="ef-meal-sections">
            <div className="ef-meal-section">
              <div className="ef-content-area">
                <div className="ef-food-item">Almonds – 5 Piece (2g) <span className="ef-kcal">12 Kcal</span></div>
                <div className="ef-food-item">Cashews (Cashew nuts, salted) – 5 Piece (2g) <span className="ef-kcal">12 Kcal</span></div>
                <div className="ef-food-item">Green tea with mint – 1 Cup (150ml) <span className="ef-kcal">16 Kcal</span></div>
                <div className="ef-food-item">Mint tea without sugar – 1 Cup (150ml) <span className="ef-kcal">1 Kcal</span></div>
                <div className="ef-food-item">Kombucha (fermented tea) – 1 Cup (150ml) <span className="ef-kcal">36 Kcal</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Breakfast */}
        <div className="ef-meal-card">
          <h3 className="ef-meal-title" data-meal="breakfast">Breakfast</h3>
          <div className="ef-meal-time">
            <span>07:30 – 08:30</span>
            <span className="ef-meal-kcal">450 Kcal</span>
          </div>
          
          <div className="ef-meal-sections">
            <div className="ef-meal-section">
              <div className="ef-content-area">
                <div className="ef-food-item">Chicken omelette – 3 Egg Whites (120g) <span className="ef-kcal">203 Kcal</span></div>
                  <div className="ef-food-item">Cornflakes chivda – 1 Bowl (40g) <span className="ef-kcal">194 Kcal</span></div>
                  <div className="ef-food-item">Moong dal chilla – 2 Piece (110g) <span className="ef-kcal">196 Kcal</span></div>
                  <div className="ef-food-item">Brown bread chilla – 2 Piece (100g) <span className="ef-kcal">276 Kcal</span></div>
                
                {/* Visual separator line */}
                <div className="ef-visual-separator"></div>
                
                <div className="ef-food-item">Fruit salad – 1 Bowl (100g) <span className="ef-kcal">66 Kcal</span></div>
                  <div className="ef-food-item">Apple – 1 Number (100g) <span className="ef-kcal">52 Kcal</span></div>
                  <div className="ef-food-item">Coffee (with milk) – 1 Cup (150ml) <span className="ef-kcal">86 Kcal</span></div>
                  <div className="ef-food-item">Nestea lemon – 1 Cup (150ml) <span className="ef-kcal">54 Kcal</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Lunch */}
        <div className="ef-meal-card">
            <h3 className="ef-meal-title">Lunch</h3>
            <div className="ef-meal-time">
              <span>12:30 – 13:30</span>
              <span>400 Kcal</span>
            </div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area">
                  <div className="ef-food-item">Chicken curry – 1 Bowl (187g) <span className="ef-kcal">268 Kcal</span></div>
                  <div className="ef-food-item">Jowar roti – 2 Piece (50g) <span className="ef-kcal">90 Kcal</span></div>
                  <div className="ef-food-item">Curd rice (brown rice) – 1 Bowl (179g) <span className="ef-kcal">168 Kcal</span></div>
                  <div className="ef-food-item">Rava roti – 2 Piece (52g) <span className="ef-kcal">120 Kcal</span></div>
                  <div className="ef-food-item">Abhada dal (Sweet tur dal) – 1 Katori (126g) <span className="ef-kcal">126 Kcal</span></div>
                  <div className="ef-food-item">Ghiya chana dal – 1 Katori (128g) <span className="ef-kcal">90 Kcal</span></div>
                  <div className="ef-food-item">Punjabi tori subji – 1 Katori (123g) <span className="ef-kcal">87 Kcal</span></div>
                  <div className="ef-food-item">Carrot cauliflower subji – 1 Katori (124g) <span className="ef-kcal">82 Kcal</span></div>
                  <div className="ef-food-item">Palak matar paneer subji – 1 Katori (122g) <span className="ef-kcal">167 Kcal</span></div>
                </div>
              </div>
            </div>
          </div>

        {/* Card 4: Evening Snack */}
        <div className="ef-meal-card">
            <h3 className="ef-meal-title">Evening Snack</h3>
            <div className="ef-meal-time">
              <span>16:30 – 17:30</span>
              <span>150 Kcal</span>
            </div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area">
                  <div className="ef-food-item">Roasted makhana with Indian spices – 1 Bowl (10g) <span className="ef-kcal">46 Kcal</span></div>
                  <div className="ef-food-item">Fruit salad – 1 Bowl (140g) <span className="ef-kcal">93 Kcal</span></div>
                  <div className="ef-food-item">Chana nuts (packaged) – 1 Handful (10g) <span className="ef-kcal">56 Kcal</span></div>
                  <div className="ef-food-item">Chai (tea with sugar) – 1 Cup (173g) <span className="ef-kcal">59 Kcal</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="ef-page-content ef-page-2">
        {/* Remaining 2 meal cards */}
        <div className="ef-meal-cards-grid">

        {/* Card 5: Dinner */}
       {/* Card 5: Dinner */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Dinner</h3>
            <div className="ef-meal-time">
              <span>19:30 – 21:00</span>
              <span>400 Kcal</span>
            </div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area">
                  <div className="ef-food-item">Tomato tur dal – 1 Katori (130g) <span className="ef-kcal">101 Kcal</span></div>
                  <div className="ef-food-item">Ghiya chana dal – 1 Katori (128g) <span className="ef-kcal">90 Kcal</span></div>
                  <div className="ef-food-item">Urad dal – 1 Katori (125g) <span className="ef-kcal">101 Kcal</span></div>
                  <div className="ef-food-item">Brown rice cooked – 1 Bowl (164g) <span className="ef-kcal">185 Kcal</span></div>
                  <div className="ef-food-item">Dal paneer – 1 Katori (129g) <span className="ef-kcal">155 Kcal</span></div>
                  <div className="ef-food-item">Moong dal – 1 Katori (127g) <span className="ef-kcal">117 Kcal</span></div>
                </div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area">
                  <div className="ef-food-item">Tomato cucumber onion raita – 1 Bowl (158g) <span className="ef-kcal">64 Kcal</span></div>
                  <div className="ef-food-item">Cucumber salad – 1 Bowl (121g) <span className="ef-kcal">16 Kcal</span></div>
                  <div className="ef-food-item">Onion salad (Pyaaz ka lachcha) – 1 Bowl (118g) <span className="ef-kcal">48 Kcal</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      <div className="sparrow-chat-container">
        {/* The sparrow image */}
        <div className="sparrow-image-container">
          <img src="/lovable-uploads/629dad21-2eb8-42da-a4ed-cfdfb41bc83d.png" alt="Sparrow" className="sparrow-image" />
        </div>
        {/* The chat bubble containing the text */}
        <div className="ef-cheat-meal-card-full-width">
          <div className="ef-cheat-text-content">
            <h3 className="ef-cheat-title">Cheat Meal (Sunday-Lunch)</h3>
            <p className="ef-cheat-description">
              Enjoy your Sunday brunch at your favourite place, make sure to keep it within 300kcal
            </p>
          </div>
        </div>
      </div>

      {/* Footer Card - Full Width */}
      <div className="ef-footer-card-full-width bg-[#393f2d]">
        <div className="ef-footer-content">
          <div className="ef-footer-logo">
            <img src="/lovable-uploads/0518c066-6a07-4c02-a451-7aa1394cfa2a.png" alt="Early logo" className="ef-footer-logo-image" />
          </div>
          
        </div>
      </div>
    </main>;
};
export default Index;