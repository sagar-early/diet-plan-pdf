import NutritionistCard from '@/components/NutritionistCard';

const Index = () => {
  return (
    <>
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
            <div className="ef-meal-header">
              <div className="ef-meal-title-section">
                <h3 className="ef-meal-title">Pre-Breakfast</h3>
                <div className="ef-meal-time">06:30 – 07:00</div>
              </div>
              <div className="ef-meal-total">77 Kcal</div>
            </div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Almonds</div>
                      <div className="ef-food-portion">5 Piece, 2g</div>
                    </div>
                    <div className="ef-food-kcal">12 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Cashews (salted)</div>
                      <div className="ef-food-portion">5 Piece, 2g</div>
                    </div>
                    <div className="ef-food-kcal">12 Kcal</div>
                  </div>
                  <div className="ef-section-divider"></div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Green tea with mint</div>
                      <div className="ef-food-portion">1 Cup, 150ml</div>
                    </div>
                    <div className="ef-food-kcal">16 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Mint tea without sugar</div>
                      <div className="ef-food-portion">1 Cup, 150ml</div>
                    </div>
                    <div className="ef-food-kcal">1 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Kombucha (fermented tea)</div>
                      <div className="ef-food-portion">1 Cup, 150ml</div>
                    </div>
                    <div className="ef-food-kcal">36 Kcal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Breakfast */}
          <div className="ef-meal-card">
            <div className="ef-meal-header">
              <div className="ef-meal-title-section">
                <h3 className="ef-meal-title">Breakfast</h3>
                <div className="ef-meal-time">07:30 – 08:30</div>
              </div>
              <div className="ef-meal-total">1127 Kcal</div>
            </div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Chicken omelette</div>
                      <div className="ef-food-portion">3 Egg Whites, 120g</div>
                    </div>
                    <div className="ef-food-kcal">203 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Cornflakes chivda</div>
                      <div className="ef-food-portion">1 Bowl, 40g</div>
                    </div>
                    <div className="ef-food-kcal">194 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Moong dal chilla</div>
                      <div className="ef-food-portion">2 Piece, 110g</div>
                    </div>
                    <div className="ef-food-kcal">196 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Brown bread chilla</div>
                      <div className="ef-food-portion">2 Piece, 100g</div>
                    </div>
                    <div className="ef-food-kcal">276 Kcal</div>
                  </div>
                  <div className="ef-section-divider"></div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Fruit salad</div>
                      <div className="ef-food-portion">1 Bowl, 100g</div>
                    </div>
                    <div className="ef-food-kcal">66 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Apple</div>
                      <div className="ef-food-portion">1 Number, 100g</div>
                    </div>
                    <div className="ef-food-kcal">52 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Coffee (with milk)</div>
                      <div className="ef-food-portion">1 Cup, 150ml</div>
                    </div>
                    <div className="ef-food-kcal">86 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Nestea lemon</div>
                      <div className="ef-food-portion">1 Cup, 150ml</div>
                    </div>
                    <div className="ef-food-kcal">54 Kcal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Lunch */}
          <div className="ef-meal-card">
            <div className="ef-meal-header">
              <div className="ef-meal-title-section">
                <h3 className="ef-meal-title">Lunch</h3>
                <div className="ef-meal-time">12:30 – 13:30</div>
              </div>
              <div className="ef-meal-total">1198 Kcal</div>
            </div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Chicken curry</div>
                      <div className="ef-food-portion">1 Bowl, 187g</div>
                    </div>
                    <div className="ef-food-kcal">268 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Jowar roti</div>
                      <div className="ef-food-portion">2 Piece, 50g</div>
                    </div>
                    <div className="ef-food-kcal">90 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Curd rice (brown rice)</div>
                      <div className="ef-food-portion">1 Bowl, 179g</div>
                    </div>
                    <div className="ef-food-kcal">168 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Rava roti</div>
                      <div className="ef-food-portion">2 Piece, 52g</div>
                    </div>
                    <div className="ef-food-kcal">120 Kcal</div>
                  </div>
                  <div className="ef-section-divider"></div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Abhada dal (Sweet tur dal)</div>
                      <div className="ef-food-portion">1 Katori, 126g</div>
                    </div>
                    <div className="ef-food-kcal">126 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Ghiya chana dal</div>
                      <div className="ef-food-portion">1 Katori, 128g</div>
                    </div>
                    <div className="ef-food-kcal">90 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Punjabi tori subji</div>
                      <div className="ef-food-portion">1 Katori, 123g</div>
                    </div>
                    <div className="ef-food-kcal">87 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Carrot cauliflower subji</div>
                      <div className="ef-food-portion">1 Katori, 124g</div>
                    </div>
                    <div className="ef-food-kcal">82 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Palak matar paneer subji</div>
                      <div className="ef-food-portion">1 Katori, 122g</div>
                    </div>
                    <div className="ef-food-kcal">167 Kcal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Evening Snack */}
          <div className="ef-meal-card">
            <div className="ef-meal-header">
              <div className="ef-meal-title-section">
                <h3 className="ef-meal-title">Evening Snack</h3>
                <div className="ef-meal-time">16:30 – 17:30</div>
              </div>
              <div className="ef-meal-total">254 Kcal</div>
            </div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Roasted makhana with Indian spices</div>
                      <div className="ef-food-portion">1 Bowl, 10g</div>
                    </div>
                    <div className="ef-food-kcal">46 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Fruit salad</div>
                      <div className="ef-food-portion">1 Bowl, 140g</div>
                    </div>
                    <div className="ef-food-kcal">93 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Chana nuts (packaged)</div>
                      <div className="ef-food-portion">1 Handful, 10g</div>
                    </div>
                    <div className="ef-food-kcal">56 Kcal</div>
                  </div>
                  <div className="ef-section-divider"></div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Chai (tea with sugar)</div>
                      <div className="ef-food-portion">1 Cup, 173g</div>
                    </div>
                    <div className="ef-food-kcal">59 Kcal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      

          {/* Card 5: Dinner */}
          <div className="ef-meal-card">
            <div className="ef-meal-header">
              <div className="ef-meal-title-section">
                <h3 className="ef-meal-title">Dinner</h3>
                <div className="ef-meal-time">19:30 – 21:00</div>
              </div>
              <div className="ef-meal-total">605 Kcal</div>
            </div>
            <div className="ef-meal-separator"></div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <div className="ef-content-area">
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Tomato tur dal</div>
                      <div className="ef-food-portion">1 Katori, 130g</div>
                    </div>
                    <div className="ef-food-kcal">101 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Ghiya chana dal</div>
                      <div className="ef-food-portion">1 Katori, 128g</div>
                    </div>
                    <div className="ef-food-kcal">90 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Urad dal</div>
                      <div className="ef-food-portion">1 Katori, 125g</div>
                    </div>
                    <div className="ef-food-kcal">101 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Brown rice cooked</div>
                      <div className="ef-food-portion">1 Bowl, 164g</div>
                    </div>
                    <div className="ef-food-kcal">185 Kcal</div>
                  </div>
                  <div className="ef-section-divider"></div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Tomato cucumber onion raita</div>
                      <div className="ef-food-portion">1 Bowl, 158g</div>
                    </div>
                    <div className="ef-food-kcal">64 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Cucumber salad</div>
                      <div className="ef-food-portion">1 Bowl, 121g</div>
                    </div>
                    <div className="ef-food-kcal">16 Kcal</div>
                  </div>
                  <div className="ef-food-card">
                    <div className="ef-food-info">
                      <div className="ef-food-name">Onion salad (Pyaaz ka lachcha)</div>
                      <div className="ef-food-portion">1 Bowl, 118g</div>
                    </div>
                    <div className="ef-food-kcal">48 Kcal</div>
                  </div>
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
              <h3 className="ef-cheat-title-new">Cheat Meal — because balance matters. Enjoy your favorite treat in moderation.</h3>
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
          <div className="ef-footer-text">
            Visit our website <a href="https://www.early.fit" target="_blank" rel="noopener noreferrer">www.early.fit</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Index;