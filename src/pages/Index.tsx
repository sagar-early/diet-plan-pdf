
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
          <div className="ef-meal-cards-container">
          
          {/* Card 1: Pre-Breakfast */}
          <div className="ef-meal-section">
            <div className="ef-meal-header-row">
              <div className="ef-meal-info">
                <h3 className="ef-meal-title">Pre-Breakfast</h3>
                <div className="ef-meal-time">06:30 – 07:00</div>
              </div>
              <div className="ef-meal-calories">80 Kcal</div>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Almonds</div>
                <div className="ef-food-details">5 Piece (2g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">12 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Cashews (Cashew nuts, salted)</div>
                <div className="ef-food-details">5 Piece (2g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">12 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Green tea with mint</div>
                <div className="ef-food-details">1 Cup (150ml)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">16 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Mint tea without sugar</div>
                <div className="ef-food-details">1 Cup (150ml)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">1 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Kombucha (fermented tea)</div>
                <div className="ef-food-details">1 Cup (150ml)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">36 Kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Breakfast */}
          <div className="ef-meal-section">
            <div className="ef-meal-header-row">
              <div className="ef-meal-info">
                <h3 className="ef-meal-title">Breakfast</h3>
                <div className="ef-meal-time">07:30 – 08:30</div>
              </div>
              <div className="ef-meal-calories">1127 Kcal</div>
            </div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Main Meals</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Chicken omelette</div>
                <div className="ef-food-details">3 Egg Whites (120g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">203</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">25g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">2g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">8g</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Moong dal chilla</div>
                <div className="ef-food-details">2 Piece (110g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">196</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">12g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">28g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">6g</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Brown bread chilla</div>
                <div className="ef-food-details">2 Piece (100g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">276</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">9g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">45g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">8g</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ef-category-separator"></div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Sides & Drinks</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Fruit salad</div>
                <div className="ef-food-details">1 Bowl (100g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">66 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Apple</div>
                <div className="ef-food-details">1 Number (100g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">52 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Coffee (with milk)</div>
                <div className="ef-food-details">1 Cup (150ml)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">86 Kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Lunch */}
          <div className="ef-meal-section">
            <div className="ef-meal-header-row">
              <div className="ef-meal-info">
                <h3 className="ef-meal-title">Lunch</h3>
                <div className="ef-meal-time">12:30 – 13:30</div>
              </div>
              <div className="ef-meal-calories">1198 Kcal</div>
            </div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Main Meals</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Chicken curry</div>
                <div className="ef-food-details">1 Bowl (187g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">268</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">28g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">8g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">15g</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Jowar roti</div>
                <div className="ef-food-details">2 Piece (50g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">90</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">3g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">18g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">1g</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Curd rice (brown rice)</div>
                <div className="ef-food-details">1 Bowl (179g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">168</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">6g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">32g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">3g</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ef-category-separator"></div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Sides</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Abhada dal (Sweet tur dal)</div>
                <div className="ef-food-details">1 Katori (126g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">126 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Punjabi tori subji</div>
                <div className="ef-food-details">1 Katori (123g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">87 Kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Evening Snack */}
          <div className="ef-meal-section">
            <div className="ef-meal-header-row">
              <div className="ef-meal-info">
                <h3 className="ef-meal-title">Evening Snack</h3>
                <div className="ef-meal-time">16:30 – 17:30</div>
              </div>
              <div className="ef-meal-calories">254 Kcal</div>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Roasted makhana with Indian spices</div>
                <div className="ef-food-details">1 Bowl (10g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">46 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Fruit salad</div>
                <div className="ef-food-details">1 Bowl (140g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">93 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Chana nuts (packaged)</div>
                <div className="ef-food-details">1 Handful (10g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">56 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Chai (tea with sugar)</div>
                <div className="ef-food-details">1 Cup (173g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">59 Kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Dinner */}
          <div className="ef-meal-section">
            <div className="ef-meal-header-row">
              <div className="ef-meal-info">
                <h3 className="ef-meal-title">Dinner</h3>
                <div className="ef-meal-time">19:30 – 21:00</div>
              </div>
              <div className="ef-meal-calories">605 Kcal</div>
            </div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Main Meals</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Brown rice cooked</div>
                <div className="ef-food-details">1 Bowl (164g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">185</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">4g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">38g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">2g</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Tomato tur dal</div>
                <div className="ef-food-details">1 Katori (130g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">101</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🍗</span>
                    <span className="ef-nutrient-value">6g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🥐</span>
                    <span className="ef-nutrient-value">15g</span>
                  </div>
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">💧</span>
                    <span className="ef-nutrient-value">2g</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ef-category-separator"></div>
            
            <div className="ef-section-divider">
              <span className="ef-section-label">Sides</span>
            </div>
            
            <div className="ef-food-cards-grid">
              <div className="ef-food-card">
                <div className="ef-food-name">Tomato cucumber onion raita</div>
                <div className="ef-food-details">1 Bowl (158g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">64 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Cucumber salad</div>
                <div className="ef-food-details">1 Bowl (121g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">16 Kcal</span>
                  </div>
                </div>
              </div>
              
              <div className="ef-food-card">
                <div className="ef-food-name">Onion salad (Pyaaz ka lachcha)</div>
                <div className="ef-food-details">1 Bowl (118g)</div>
                <div className="ef-separator-line"></div>
                <div className="ef-nutrients-row">
                  <div className="ef-nutrient-item">
                    <span className="ef-nutrient-icon">🔥</span>
                    <span className="ef-nutrient-value">48 Kcal</span>
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
              <img src="/lovable-uploads/2f811ef1-7ea2-4871-add4-0e5740782dd9.png" alt="Happy sparrow celebrating with hamburger treat" />
            </div>
            <div className="ef-cheat-text">
              <h3 className="ef-cheat-title-new">Cheat Meal (Sunday Lunch)</h3>
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
