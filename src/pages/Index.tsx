const Index = () => {
  return (
    <main className="ef-page">
      {/* Full-bleed Header */}
      <div className="ef-header-bar">
        <h1 className="ef-header-title">Diet Plan</h1>
      </div>

      <div className="ef-page-content">
        {/* Nutritionist Card */}
        <div className="ef-nutritionist-card">
          <img 
            src="/lovable-uploads/d79909ae-0720-4208-9696-1bcaabe4a84b.png" 
            alt="Dr. Savita Jain" 
            className="ef-nutritionist-image"
          />
          <div className="ef-nutritionist-info">
            <h3>Dr. Savita Jain</h3>
            <p>DNB Endocrinology (Apollo Hospitals), MD and MBBS (DMCH)</p>
            <p>Senior Consultant Endocrinologist</p>
          </div>
        </div>

        {/* First 4 meal cards - 2x2 grid */}
        <div className="ef-meal-cards-grid">
          {/* Card 1: Pre-Breakfast */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Pre-Breakfast</h3>
            <div className="ef-meal-time">
              <span>06:30 – 07:00</span>
              <span>80 Kcal</span>
            </div>
            <div className="ef-meal-divider"></div>
            
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
            <div className="ef-meal-time">
              <span>07:30 – 08:30</span>
              <span>450 Kcal</span>
            </div>
            <div className="ef-meal-divider"></div>
            
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
            <div className="ef-meal-time">
              <span>12:30 – 13:30</span>
              <span>400 Kcal</span>
            </div>
            <div className="ef-meal-divider"></div>
            
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
            <div className="ef-meal-time">
              <span>16:30 – 17:30</span>
              <span>150 Kcal</span>
            </div>
            <div className="ef-meal-divider"></div>
            
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
            <div className="ef-meal-time">
              <span>19:30 – 21:00</span>
              <span>400 Kcal</span>
            </div>
            <div className="ef-meal-divider"></div>
            
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

        {/* Cheat Meal Card - Redesigned */}
        <div className="ef-cheat-meal-card">
          <div className="ef-cheat-grid">
            <div className="ef-cheat-tile">Plan it, don't panic</div>
            <div className="ef-cheat-tile">Hydrate before/after</div>
            <div className="ef-cheat-tile">Protein first</div>
            <div className="ef-cheat-tile">Resume routine next meal</div>
          </div>
          <div className="ef-cheat-sparrow">
            <img src="/lovable-uploads/aede7335-c037-4bad-921d-5ce3bc1f0ac1.png" alt="Happy sparrow with burger and confetti" />
          </div>
        </div>
      </div>

      {/* Full-bleed Footer */}
      <div className="ef-footer-bar">
        <img 
          src="/lovable-uploads/17efc78d-f15b-47f2-b063-42136bffcb5e.png" 
          alt="Early logo" 
          className="ef-footer-logo"
        />
        <div className="ef-footer-text">visit our website www.early.fit</div>
      </div>
    </main>
  );
};
export default Index;