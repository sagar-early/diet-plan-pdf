const Index = () => {
  return (
    <main className="ef-page">
      {/* Close button - fixed position outside card */}
      <button className="ef-close" aria-label="Close">×</button>
      
      {/* Header */}
      <header className="ef-header">
        <div className="ef-header-inner">
          <img className="ef-logo" src="/lovable-uploads/4e441377-31ea-4eb6-9cb3-6c94baada975.png" alt="Early logo" />
          <h1 className="ef-title">Diet Plan</h1>
        </div>
      </header>

      {/* Macro Summary */}
      <section className="ef-summary" aria-label="Daily nutritional summary">
        <div className="ef-macros">
          {/* Single combined macro circle with kcal in center */}
          <svg className="ef-macro-circle" width="120" height="120" viewBox="0 0 120 120" aria-label="Macros: Protein 80g, Carbs 150g, Fats 50g; Total 1400 Kcal">
            {/* Background circle */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="#dbdfd2" strokeWidth="8"/>
            
            {/* Protein segment (80g) - ~28.6% of 280g total */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="#9cd312" strokeWidth="8" 
                    strokeDasharray="80.7 201.8" strokeDashoffset="0" transform="rotate(-90 60 60)"/>
            
            {/* Carbs segment (150g) - ~53.6% of 280g total */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="#927b9e" strokeWidth="8" 
                    strokeDasharray="151.2 131.3" strokeDashoffset="-80.7" transform="rotate(-90 60 60)"/>
            
            {/* Fats segment (50g) - ~17.9% of 280g total */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="#efd7b5" strokeWidth="8" 
                    strokeDasharray="50.4 232.1" strokeDashoffset="-231.9" transform="rotate(-90 60 60)"/>
            
            {/* Kcal text in center */}
            <text x="60" y="55" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="bold">1400</text>
            <text x="60" y="72" textAnchor="middle" fill="#ffffff" fontSize="12">Kcal</text>
          </svg>
          
          {/* Macro labels horizontal */}
          <div className="ef-macro-labels-horizontal">
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot protein">•</span>
              <span className="ef-macro-text">Protein <strong>80g</strong></span>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot carbs">•</span>
              <span className="ef-macro-text">Carbs <strong>150g</strong></span>
            </div>
            <div className="ef-macro-label-item">
              <span className="ef-macro-dot fats">•</span>
              <span className="ef-macro-text">Fats <strong>50g</strong></span>
            </div>
          </div>
        </div>
      </section>


      {/* Pre-Breakfast */}
      <section className="ef-meal" aria-label="Pre-breakfast meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Pre-Breakfast</h2>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">06:30 - 07:00</span>
          <span className="ef-kcal">80 kcal</span>
        </div>

        <div className="ef-meal-subsections">
          {/* Main Meals */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Main Meals</h3>
            <ul className="ef-food-list">
              {/* Empty - no main meals for pre-breakfast */}
            </ul>
          </div>

          {/* Sides */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Sides</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Almonds</span>
                  <span className="ef-food-meta">5 Piece (2gm)</span>
                </div>
                <span className="ef-food-kcal">12 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Cashews (Cashew nuts, salted)</span>
                  <span className="ef-food-meta">5 Piece (2gm)</span>
                </div>
                <span className="ef-food-kcal">12 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Drinks */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Drinks</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Green tea with mint</span>
                  <span className="ef-food-meta">1 Cup (150ml)</span>
                </div>
                <span className="ef-food-kcal">16 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Mint tea without sugar</span>
                  <span className="ef-food-meta">1 Cup (150ml)</span>
                </div>
                <span className="ef-food-kcal">1 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Kombucha (fermented tea)</span>
                  <span className="ef-food-meta">1 Cup (150gm)</span>
                </div>
                <span className="ef-food-kcal">36 Kcal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Breakfast */}
      <section className="ef-meal" aria-label="Breakfast meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Breakfast</h2>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">07:30 - 08:30</span>
          <span className="ef-kcal">450 kcal</span>
        </div>

        <div className="ef-meal-subsections">
          {/* Main Meals */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Main Meals</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Chicken omelette</span>
                  <span className="ef-food-meta">3 Egg Whites (120gm)</span>
                </div>
                <span className="ef-food-kcal">203 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Cornflakes chivda</span>
                  <span className="ef-food-meta">1 Bowl (40gm)</span>
                </div>
                <span className="ef-food-kcal">194 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Moong dal chilla</span>
                  <span className="ef-food-meta">2 Piece (110gm)</span>
                </div>
                <span className="ef-food-kcal">196 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Brown bread chilla</span>
                  <span className="ef-food-meta">2 Piece (100gm)</span>
                </div>
                <span className="ef-food-kcal">276 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Sides */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Sides</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Fruit salad</span>
                  <span className="ef-food-meta">1 Bowl (100gm)</span>
                </div>
                <span className="ef-food-kcal">66 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Apple</span>
                  <span className="ef-food-meta">1 number (100gm)</span>
                </div>
                <span className="ef-food-kcal">52 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Drinks */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Drinks</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Coffee (With milk)</span>
                  <span className="ef-food-meta">1 Cup (150ml)</span>
                </div>
                <span className="ef-food-kcal">86 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Nestea lemon</span>
                  <span className="ef-food-meta">1 Cup (150ml)</span>
                </div>
                <span className="ef-food-kcal">54 Kcal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lunch */}
      <section className="ef-meal" aria-label="Lunch meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Lunch</h2>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">12:30 - 01:30</span>
          <span className="ef-kcal">500 kcal</span>
        </div>

        <div className="ef-meal-subsections">
          {/* Main Meals */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Main Meals</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Rajma curry</span>
                  <span className="ef-food-meta">1 Bowl (150gm)</span>
                </div>
                <span className="ef-food-kcal">210 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Brown rice (cooked)</span>
                  <span className="ef-food-meta">1 Bowl (164gm)</span>
                </div>
                <span className="ef-food-kcal">185 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Paneer bhurji</span>
                  <span className="ef-food-meta">1 Bowl (120gm)</span>
                </div>
                <span className="ef-food-kcal">150 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Sides */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Sides</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Cucumber salad</span>
                  <span className="ef-food-meta">1 Bowl (121gm)</span>
                </div>
                <span className="ef-food-kcal">16 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Onion salad (Pyaaz ka lachcha)</span>
                  <span className="ef-food-meta">1 Bowl (118gm)</span>
                </div>
                <span className="ef-food-kcal">48 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Tomato cucumber onion raita</span>
                  <span className="ef-food-meta">1 Bowl (158gm)</span>
                </div>
                <span className="ef-food-kcal">64 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Drinks */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Drinks</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Buttermilk</span>
                  <span className="ef-food-meta">1 Glass (200ml)</span>
                </div>
                <span className="ef-food-kcal">15 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Lemon water</span>
                  <span className="ef-food-meta">1 Glass (200ml)</span>
                </div>
                <span className="ef-food-kcal">6 Kcal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evening Snack */}
      <section className="ef-meal" aria-label="Evening snack meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Evening-Snack</h2>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">04:30 - 05:30</span>
          <span className="ef-kcal">150 kcal</span>
        </div>

        <div className="ef-meal-subsections">
          {/* Main Meals */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Main Meals</h3>
            <ul className="ef-food-list">
              {/* Empty - no main meals for evening snack */}
            </ul>
          </div>

          {/* Sides */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Sides</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Roasted makhana with indian spices</span>
                  <span className="ef-food-meta">1 Bowl (10gm)</span>
                </div>
                <span className="ef-food-kcal">46 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Fruit salad</span>
                  <span className="ef-food-meta">1 Bowl (140gm)</span>
                </div>
                <span className="ef-food-kcal">93 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Chana nuts (packaged)</span>
                  <span className="ef-food-meta">1 Handful (10gm)</span>
                </div>
                <span className="ef-food-kcal">56 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Drinks */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Drinks</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Chai (Tea with sugar)</span>
                  <span className="ef-food-meta">1 Cup (173gm)</span>
                </div>
                <span className="ef-food-kcal">59 Kcal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dinner */}
      <section className="ef-meal" aria-label="Dinner meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Dinner</h2>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">07:30 - 09:00</span>
          <span className="ef-kcal">400 kcal</span>
        </div>

        <div className="ef-meal-subsections">
          {/* Main Meals */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Main Meals</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Tomato tur dal</span>
                  <span className="ef-food-meta">1 Katori (130gm)</span>
                </div>
                <span className="ef-food-kcal">101 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Ghiya chana dal</span>
                  <span className="ef-food-meta">1 Katori (128gm)</span>
                </div>
                <span className="ef-food-kcal">90 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Urad dal</span>
                  <span className="ef-food-meta">1 Katori (125gm)</span>
                </div>
                <span className="ef-food-kcal">101 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Brown rice (cooked)</span>
                  <span className="ef-food-meta">1 Bowl (164gm)</span>
                </div>
                <span className="ef-food-kcal">185 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Dal paneer</span>
                  <span className="ef-food-meta">1 Katori (129gm)</span>
                </div>
                <span className="ef-food-kcal">155 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Moong dal</span>
                  <span className="ef-food-meta">1 Katori (127gm)</span>
                </div>
                <span className="ef-food-kcal">117 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Sides */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Sides</h3>
            <ul className="ef-food-list">
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Tomato cucumber onion raita</span>
                  <span className="ef-food-meta">1 Bowl (158gm)</span>
                </div>
                <span className="ef-food-kcal">64 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Cucumber salad</span>
                  <span className="ef-food-meta">1 Bowl (121gm)</span>
                </div>
                <span className="ef-food-kcal">16 Kcal</span>
              </li>
              <li className="ef-food">
                <div className="ef-food-content">
                  <span className="ef-food-name">Onion salad (Pyaaz ka lachcha)</span>
                  <span className="ef-food-meta">1 Bowl (118gm)</span>
                </div>
                <span className="ef-food-kcal">48 Kcal</span>
              </li>
            </ul>
          </div>

          {/* Drinks */}
          <div className="ef-meal-subsection">
            <h3 className="ef-category-title">Drinks</h3>
            <ul className="ef-food-list">
              {/* Empty - no drinks for dinner */}
            </ul>
          </div>
        </div>
      </section>

      {/* Cheat Meal Banner */}
      <section className="ef-cheat-meal" aria-label="Weekly cheat meal">
        <div className="ef-cheat-content">
          <div className="ef-cheat-icon">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <rect x="8" y="15" width="24" height="12" rx="2" fill="#efd7b5"/>
              <rect x="10" y="12" width="20" height="6" rx="1" fill="#3a1f12"/>
              <circle cx="15" cy="20" r="2" fill="#3a1f12"/>
              <circle cx="25" cy="20" r="2" fill="#3a1f12"/>
            </svg>
          </div>
          <div className="ef-cheat-info">
            <h3 className="ef-cheat-title">Cheat Meal</h3>
            <p className="ef-cheat-time">Sunday - Lunch</p>
            <p className="ef-cheat-description">Enjoy your Sunday brunch at your favourite place, make sure to keep it within 300kcal</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
