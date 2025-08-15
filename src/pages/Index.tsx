const Index = () => {
  return <main className="ef-page">
      {/* Close button - fixed position outside card */}
      
      
      {/* Page 1 */}
      <div className="ef-page-content">
        {/* Full-width header card */}
        <div className="ef-header-card-full">
          <img src="/lovable-uploads/0518c066-6a07-4c02-a451-7aa1394cfa2a.png" alt="EARLY logo" className="ef-logo-image" />
          
          <div className="ef-nutrition-chart">
            {/* Single combined macro circle with kcal in center */}
            <svg className="ef-macro-circle-premium" width="90" height="90" viewBox="0 0 120 120" aria-label="Macros: Protein 80g, Carbs 150g, Fats 50g; Total 1400 Kcal">
              <defs>
                <filter id="circle-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.15)"/>
                </filter>
              </defs>
              
              {/* Background circle */}
              <circle cx="60" cy="60" r="45" fill="none" stroke="#dbdfd2" strokeWidth="8" filter="url(#circle-shadow)" />
              
              {/* Protein segment (80g) - ~28.6% of 280g total */}
              <circle cx="60" cy="60" r="45" fill="none" stroke="#9AD94A" strokeWidth="8" strokeDasharray="80.7 201.8" strokeDashoffset="0" transform="rotate(-90 60 60)" filter="url(#circle-shadow)" />
              
              {/* Carbs segment (150g) - ~53.6% of 280g total */}
              <circle cx="60" cy="60" r="45" fill="none" stroke="#8A6FB5" strokeWidth="8" strokeDasharray="151.2 131.3" strokeDashoffset="-80.7" transform="rotate(-90 60 60)" filter="url(#circle-shadow)" />
              
              {/* Fats segment (50g) - ~17.9% of 280g total */}
              <circle cx="60" cy="60" r="45" fill="none" stroke="#E8D2B1" strokeWidth="8" strokeDasharray="50.4 232.1" strokeDashoffset="-231.9" transform="rotate(-90 60 60)" filter="url(#circle-shadow)" />
              
              {/* Kcal text in center */}
              <text x="60" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1400</text>
              <text x="60" y="72" textAnchor="middle" fill="white" fontSize="12">Kcal</text>
            </svg>
          </div>
          
          <div className="ef-macro-labels-premium">
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot protein-premium">●</span>
              <div>
                <div className="ef-macro-text-premium">Protein</div>
                <div className="ef-macro-value-premium">80g</div>
              </div>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot carbs-premium">●</span>
              <div>
                <div className="ef-macro-text-premium">Carbs</div>
                <div className="ef-macro-value-premium">150g</div>
              </div>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot fats-premium">●</span>
              <div>
                <div className="ef-macro-text-premium">Fats</div>
                <div className="ef-macro-value-premium">50g</div>
              </div>
            </div>
          </div>
          
          <h1 className="ef-header-title">Diet Plan</h1>
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
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
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
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area">
                  <div className="ef-food-item">Chicken omelette – 3 Egg Whites (120g) <span className="ef-kcal">203 Kcal</span></div>
                  <div className="ef-food-item">Cornflakes chivda – 1 Bowl (40g) <span className="ef-kcal">194 Kcal</span></div>
                  <div className="ef-food-item">Moong dal chilla – 2 Piece (110g) <span className="ef-kcal">196 Kcal</span></div>
                  <div className="ef-food-item">Brown bread chilla – 2 Piece (100g) <span className="ef-kcal">276 Kcal</span></div>
                </div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area">
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

        {/* Cheat Meal Card */}
        <div className="ef-cheat-meal-card">
          <div className="ef-cheat-icon">🍔</div>
          <div className="ef-cheat-content">
            <h3 className="ef-cheat-title">Cheat Meal</h3>
            <div className="ef-cheat-time">Sunday – Lunch</div>
            <p className="ef-cheat-description">
              Enjoy your Sunday brunch at your favourite place, make sure to keep it within 300kcal
            </p>
          </div>
        </div>
      </div>
    </main>;
};
export default Index;