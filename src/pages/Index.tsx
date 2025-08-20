import NutritionistCard from '@/components/NutritionistCard';
const Index = () => {
  return <>
      {/* Full-width header */}
      <header className="ef-header-full">
        <h1 className="ef-header-title">Diet Plan</h1>
      </header>

      <main className="ef-page">
        <div className="ef-page-content">
          {/* Professional Nutritionist Card */}
          <NutritionistCard />

          {/* Meal cards grid */}
          <div className="ef-meal-cards-grid">
          {/* Card 1: Pre-Breakfast */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Pre-Breakfast</h3>
            <div className="ef-meal-time">06:30 – 07:00 pm                                             80Kcal</div>
            <div className="ef-meal-separator"></div>
            
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
            <h3 className="ef-meal-title">Breakfast</h3>
            <div className="ef-meal-time">07:30 – 08:30                                               100Kcal</div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-item">Chicken omelette – 3 Egg Whites (120g) <span className="ef-kcal">203 Kcal</span></div>
                  <div className="ef-food-item">Cornflakes chivda – 1 Bowl (40g) <span className="ef-kcal">194 Kcal</span></div>
                  <div className="ef-food-item">Moong dal chilla – 2 Piece (110g) <span className="ef-kcal">196 Kcal</span></div>
                  <div className="ef-food-item">Brown bread chilla – 2 Piece (100g) <span className="ef-kcal">276 Kcal</span></div>
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
            <div className="ef-meal-time">12:30 – 13:30                                               350Kcal</div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
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
            <div className="ef-meal-time">16:30 – 17:30                                               200Kcal</div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-item">Roasted makhana with Indian spices – 1 Bowl (10g) <span className="ef-kcal">46 Kcal</span></div>
                  <div className="ef-food-item">Fruit salad – 1 Bowl (140g) <span className="ef-kcal">93 Kcal</span></div>
                  <div className="ef-food-item">Chana nuts (packaged) – 1 Handful (10g) <span className="ef-kcal">56 Kcal</span></div>
                  <div className="ef-food-item">Chai (tea with sugar) – 1 Cup (173g) <span className="ef-kcal">59 Kcal</span></div>
                </div>
              </div>
            </div>
          </div>
        
      

          {/* Card 5: Dinner */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Dinner</h3>
            <div className="ef-meal-time">19:30 – 21:00                                               350Kcal</div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-item">Tomato tur dal – 1 Katori (130g) <span className="ef-kcal">101 Kcal</span></div>
                  <div className="ef-food-item">Ghiya chana dal – 1 Katori (128g) <span className="ef-kcal">90 Kcal</span></div>
                  <div className="ef-food-item">Urad dal – 1 Katori (125g) <span className="ef-kcal">101 Kcal</span></div>
                  <div className="ef-food-item">Brown rice cooked – 1 Bowl (164g) <span className="ef-kcal">185 Kcal</span></div>
                  <div className="ef-food-item">Tomato cucumber onion raita – 1 Bowl (158g) <span className="ef-kcal">64 Kcal</span></div>
                  <div className="ef-food-item">Cucumber salad – 1 Bowl (121g) <span className="ef-kcal">16 Kcal</span></div>
                  <div className="ef-food-item">Onion salad (Pyaaz ka lachcha) – 1 Bowl (118g) <span className="ef-kcal">48 Kcal</span></div>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        {/* Cheat Meal Card - Full Width */}
        <div className="ef-cheat-meal-full-width">
          <div className="ef-cheat-content-wrapper">
            <div className="ef-cheat-icon">
              <img src="/lovable-uploads/a1db4fe7-e72a-4619-8117-158b14725315.png" alt="Happy sparrow celebrating treat" />
            </div>
            <div className="ef-cheat-text">
              <h3 className="ef-cheat-title-new">Cheat Meal
(Sunday-Lunch)</h3>
              <p className="ef-cheat-subtitle">Enjoy your Sunday brunch at your favourite place, make sure to keep it within 300kcal</p>
            </div>
          </div>
        </div>
      </main>

      {/* Full-width footer */}
      <footer className="ef-footer-full">
        <div className="ef-footer-content">
          <div className="ef-footer-logo">
            <img src="/lovable-uploads/752b0baa-0b13-45c8-bd2e-8a1088f10693.png" alt="Early Logo" />
          </div>
          <div className="ef-footer-text">Visit our website www.early.fit</div>
        </div>
      </footer>
    </>;
};
export default Index;