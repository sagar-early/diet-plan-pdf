
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
                <div className="ef-food-item-no-card bg-inherit">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Almonds</div>
                    <div className="ef-food-portion">5 Piece (2g)</div>
                  </div>
                  <span className="ef-kcal">12 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Cashews (Cashew nuts, salted)</div>
                    <div className="ef-food-portion">5 Piece (2g)</div>
                  </div>
                  <span className="ef-kcal">12 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Green tea with mint</div>
                    <div className="ef-food-portion">1 Cup (150ml)</div>
                  </div>
                  <span className="ef-kcal">16 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Mint tea without sugar</div>
                    <div className="ef-food-portion">1 Cup (150ml)</div>
                  </div>
                  <span className="ef-kcal">1 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Kombucha (fermented tea)</div>
                    <div className="ef-food-portion">1 Cup (150ml)</div>
                  </div>
                  <span className="ef-kcal">36 Kcal</span>
                </div>
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
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Chicken omelette</div>
                    <div className="ef-food-portion">3 Egg Whites (120g)</div>
                  </div>
                  <span className="ef-kcal">203 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Cornflakes chivda</div>
                    <div className="ef-food-portion">1 Bowl (40g)</div>
                  </div>
                  <span className="ef-kcal">194 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Moong dal chilla</div>
                    <div className="ef-food-portion">2 Piece (110g)</div>
                  </div>
                  <span className="ef-kcal">196 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Brown bread chilla</div>
                    <div className="ef-food-portion">2 Piece (100g)</div>
                  </div>
                  <span className="ef-kcal">276 Kcal</span>
                </div>
                
                {/* Visual separator line */}
                <div className="ef-visual-separator"></div>
                
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Fruit salad</div>
                    <div className="ef-food-portion">1 Bowl (100g)</div>
                  </div>
                  <span className="ef-kcal">66 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Apple</div>
                    <div className="ef-food-portion">1 Number (100g)</div>
                  </div>
                  <span className="ef-kcal">52 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Coffee (with milk)</div>
                    <div className="ef-food-portion">1 Cup (150ml)</div>
                  </div>
                  <span className="ef-kcal">86 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Nestea lemon</div>
                    <div className="ef-food-portion">1 Cup (150ml)</div>
                  </div>
                  <span className="ef-kcal">54 Kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Lunch */}
        <div className="ef-meal-card">
          <h3 className="ef-meal-title">Lunch</h3>
          <div className="ef-meal-time">
            <span>12:30 – 13:30</span>
            <span className="ef-meal-kcal">400 Kcal</span>
          </div>
          
          <div className="ef-meal-sections">
            <div className="ef-meal-section">
              <div className="ef-content-area">
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Chicken curry</div>
                    <div className="ef-food-portion">1 Bowl (187g)</div>
                  </div>
                  <span className="ef-kcal">268 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Jowar roti</div>
                    <div className="ef-food-portion">2 Piece (50g)</div>
                  </div>
                  <span className="ef-kcal">90 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Curd rice (brown rice)</div>
                    <div className="ef-food-portion">1 Bowl (179g)</div>
                  </div>
                  <span className="ef-kcal">168 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Rava roti</div>
                    <div className="ef-food-portion">2 Piece (52g)</div>
                  </div>
                  <span className="ef-kcal">120 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Abhada dal (Sweet tur dal)</div>
                    <div className="ef-food-portion">1 Katori (126g)</div>
                  </div>
                  <span className="ef-kcal">126 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Ghiya chana dal</div>
                    <div className="ef-food-portion">1 Katori (128g)</div>
                  </div>
                  <span className="ef-kcal">90 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Punjabi tori subji</div>
                    <div className="ef-food-portion">1 Katori (123g)</div>
                  </div>
                  <span className="ef-kcal">87 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Carrot cauliflower subji</div>
                    <div className="ef-food-portion">1 Katori (124g)</div>
                  </div>
                  <span className="ef-kcal">82 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Palak matar paneer subji</div>
                    <div className="ef-food-portion">1 Katori (122g)</div>
                  </div>
                  <span className="ef-kcal">167 Kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Evening Snack */}
        <div className="ef-meal-card">
          <h3 className="ef-meal-title" data-meal="evening-snack">Evening Snack</h3>
          <div className="ef-meal-time">
            <span>16:30 – 17:30</span>
            <span className="ef-meal-kcal">150 Kcal</span>
          </div>
          
          <div className="ef-meal-sections">
            <div className="ef-meal-section">
              <div className="ef-content-area">
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Roasted makhana with Indian spices</div>
                    <div className="ef-food-portion">1 Bowl (10g)</div>
                  </div>
                  <span className="ef-kcal">46 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Fruit salad</div>
                    <div className="ef-food-portion">1 Bowl (140g)</div>
                  </div>
                  <span className="ef-kcal">93 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Chana nuts (packaged)</div>
                    <div className="ef-food-portion">1 Handful (10g)</div>
                  </div>
                  <span className="ef-kcal">56 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Chai (tea with sugar)</div>
                    <div className="ef-food-portion">1 Cup (173g)</div>
                  </div>
                  <span className="ef-kcal">59 Kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Dinner */}
        <div className="ef-meal-card">
          <h3 className="ef-meal-title">Dinner</h3>
          <div className="ef-meal-time">
            <span>19:30 – 21:00</span>
            <span className="ef-meal-kcal">400 Kcal</span>
          </div>
          
          <div className="ef-meal-sections">
            <div className="ef-meal-section">
              <div className="ef-content-area">
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Tomato tur dal</div>
                    <div className="ef-food-portion">1 Katori (130g)</div>
                  </div>
                  <span className="ef-kcal">101 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Ghiya chana dal</div>
                    <div className="ef-food-portion">1 Katori (128g)</div>
                  </div>
                  <span className="ef-kcal">90 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Urad dal</div>
                    <div className="ef-food-portion">1 Katori (125g)</div>
                  </div>
                  <span className="ef-kcal">101 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Brown rice cooked</div>
                    <div className="ef-food-portion">1 Bowl (164g)</div>
                  </div>
                  <span className="ef-kcal">185 Kcal</span>
                </div>
                
                {/* Visual separator line */}
                <div className="ef-visual-separator"></div>
                
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Tomato cucumber onion raita</div>
                    <div className="ef-food-portion">1 Bowl (158g)</div>
                  </div>
                  <span className="ef-kcal">64 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Cucumber salad</div>
                    <div className="ef-food-portion">1 Bowl (121g)</div>
                  </div>
                  <span className="ef-kcal">16 Kcal</span>
                </div>
                <div className="ef-food-item-no-card">
                  <div className="ef-food-content">
                    <div className="ef-food-name">Onion salad (Pyaaz ka lachcha)</div>
                    <div className="ef-food-portion">1 Bowl (118g)</div>
                  </div>
                  <span className="ef-kcal">48 Kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cheat Meal Card - Full Width */}
      <div className="ef-cheat-meal-card-full-width">
        <div className="ef-cheat-content-full">
          <div className="ef-cheat-text-content">
            <h3 className="ef-cheat-title">Cheat Meal
 (Sunday-Lunch)</h3>
            <p className="ef-cheat-description">
              Enjoy your Sunday brunch at your favourite place, make sure to keep it within 300kcal
            </p>
          </div>
          <div className="ef-cheat-image">
            <img src="/lovable-uploads/629dad21-2eb8-42da-a4ed-cfdfb41bc83d.png" alt="Sparrow holding hamburger" className="ef-sparrow-image" />
          </div>
        </div>
      </div>

      {/* Footer Card - Full Width */}
      <div className="ef-footer-card-full-width bg-[#393f2d]">
        <div className="ef-footer-content">
          <div className="ef-footer-logo">
            <img src="/lovable-uploads/0518c066-6a07-4c02-a451-7aa1394cfa2a.png" alt="Early logo" className="ef-footer-logo-image" />
          </div>
          <div className="ef-footer-text">
            Visit our website www.early.fit
          </div>
        </div>
      </div>
    </main>;
};
export default Index;
