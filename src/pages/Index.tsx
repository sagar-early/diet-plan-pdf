const Index = () => {
  return (
    <main className="ef-page">
      {/* Header */}
      <header className="ef-header ef-border-green">
        <div className="ef-header-inner">
          <svg className="ef-logo" width="120" height="40" viewBox="0 0 120 40" aria-label="Early logo">
            <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#434a35">EARLY</text>
            <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="8" fill="#939f79">Health Pvt Ltd</text>
          </svg>
          <h1 className="ef-title">My Diet Plan</h1>
          <button className="ef-close" aria-label="Close">×</button>
        </div>
      </header>

      {/* Macro Summary */}
      <section className="ef-summary" aria-label="Daily nutritional summary">
        <div className="ef-kcal-card">
          <span className="ef-kcal-value">1400</span>
          <span className="ef-kcal-unit">Kcal</span>
        </div>
        <div className="ef-macros">
          <div className="ef-macro-item">
            <svg className="ef-macro-ring" width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#dbdfd2" strokeWidth="4"/>
              <circle cx="30" cy="30" r="25" fill="none" stroke="#d2f47e" strokeWidth="4" 
                      strokeDasharray="78.5" strokeDashoffset="20" transform="rotate(-90 30 30)"/>
            </svg>
            <div className="ef-macro-info">
              <span className="ef-macro-label">Protein</span>
              <span className="ef-macro-value">80g</span>
            </div>
          </div>
          <div className="ef-macro-item">
            <svg className="ef-macro-ring" width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#dbdfd2" strokeWidth="4"/>
              <circle cx="30" cy="30" r="25" fill="none" stroke="#927b9e" strokeWidth="4" 
                      strokeDasharray="78.5" strokeDashoffset="30" transform="rotate(-90 30 30)"/>
            </svg>
            <div className="ef-macro-info">
              <span className="ef-macro-label">Carbs</span>
              <span className="ef-macro-value">150g</span>
            </div>
          </div>
          <div className="ef-macro-item">
            <svg className="ef-macro-ring" width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#dbdfd2" strokeWidth="4"/>
              <circle cx="30" cy="30" r="25" fill="none" stroke="#efd7b5" strokeWidth="4" 
                      strokeDasharray="78.5" strokeDashoffset="50" transform="rotate(-90 30 30)"/>
            </svg>
            <div className="ef-macro-info">
              <span className="ef-macro-label">Fats</span>
              <span className="ef-macro-value">50g</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="ef-principles" aria-label="Your guiding principles">
        <h2 className="ef-principles-title">Your Guiding Principles</h2>
        <ul className="ef-principles-list">
          <li>Have a glass of water before every meal</li>
          <li>Include sides in your meals (salads)</li>
          <li>Replace fruits with sugar cravings</li>
        </ul>
      </section>

      {/* Meal Navigation */}
      <nav className="ef-meal-nav" aria-label="Meal navigation">
        <button className="ef-nav-tab ef-nav-active">Breakfast</button>
        <button className="ef-nav-tab">Pre-Breakfast</button>
        <button className="ef-nav-tab">Lunch</button>
        <button className="ef-nav-tab">Evening-Snack</button>
        <button className="ef-nav-tab">Dinner</button>
      </nav>

      {/* Pre-Breakfast */}
      <section className="ef-meal" aria-label="Pre-breakfast meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Pre-Breakfast</h2>
          <button className="ef-add-btn" aria-label="Add item">+</button>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">06:30 - 07:00</span>
          <span className="ef-kcal">80 kcal</span>
        </div>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥗</span>
          Sides
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Almonds</span>
            <span className="ef-food-meta">5 Piece (2gm)</span>
            <span className="ef-food-kcal">12 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Cashews (Cashew nuts, salted)</span>
            <span className="ef-food-meta">5 Piece (2gm)</span>
            <span className="ef-food-kcal">12 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥤</span>
          Drinks
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Green tea with mint</span>
            <span className="ef-food-meta">1 Cup (150ml)</span>
            <span className="ef-food-kcal">16 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Mint tea without sugar</span>
            <span className="ef-food-meta">1 Cup (150ml)</span>
            <span className="ef-food-kcal">1 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Kombucha (fermented tea)</span>
            <span className="ef-food-meta">1 Cup (150gm)</span>
            <span className="ef-food-kcal">36 Kcal</span>
          </li>
        </ul>
      </section>

      {/* Breakfast */}
      <section className="ef-meal" aria-label="Breakfast meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Breakfast</h2>
          <button className="ef-add-btn" aria-label="Add item">+</button>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">07:30 - 08:30</span>
          <span className="ef-kcal">450 kcal</span>
        </div>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🍽️</span>
          Main Meals
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Chicken omelette</span>
            <span className="ef-food-meta">3 Egg Whites (120gm)</span>
            <span className="ef-food-kcal">203 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Cornflakes chivda</span>
            <span className="ef-food-meta">1 Bowl (40gm)</span>
            <span className="ef-food-kcal">194 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Moong dal chilla</span>
            <span className="ef-food-meta">2 Piece (110gm)</span>
            <span className="ef-food-kcal">196 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Brown bread chilla</span>
            <span className="ef-food-meta">2 Piece (100gm)</span>
            <span className="ef-food-kcal">276 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥗</span>
          Sides
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Fruit salad</span>
            <span className="ef-food-meta">1 Bowl (100gm)</span>
            <span className="ef-food-kcal">66 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Apple</span>
            <span className="ef-food-meta">1 number (100gm)</span>
            <span className="ef-food-kcal">52 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥤</span>
          Drinks
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Coffee (With milk)</span>
            <span className="ef-food-meta">1 Cup (150ml)</span>
            <span className="ef-food-kcal">86 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Nestea lemon</span>
            <span className="ef-food-meta">1 Cup (150ml)</span>
            <span className="ef-food-kcal">54 Kcal</span>
          </li>
        </ul>
      </section>

      {/* Lunch */}
      <section className="ef-meal" aria-label="Lunch meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Lunch</h2>
          <button className="ef-add-btn" aria-label="Add item">+</button>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">12:30 - 01:30</span>
          <span className="ef-kcal">500 kcal</span>
        </div>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🍽️</span>
          Main Meals
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Rajma curry</span>
            <span className="ef-food-meta">1 Bowl (150gm)</span>
            <span className="ef-food-kcal">210 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Brown rice (cooked)</span>
            <span className="ef-food-meta">1 Bowl (164gm)</span>
            <span className="ef-food-kcal">185 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Paneer bhurji</span>
            <span className="ef-food-meta">1 Bowl (120gm)</span>
            <span className="ef-food-kcal">150 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥗</span>
          Sides
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Cucumber salad</span>
            <span className="ef-food-meta">1 Bowl (121gm)</span>
            <span className="ef-food-kcal">16 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Onion salad (Pyaaz ka lachcha)</span>
            <span className="ef-food-meta">1 Bowl (118gm)</span>
            <span className="ef-food-kcal">48 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Tomato cucumber onion raita</span>
            <span className="ef-food-meta">1 Bowl (158gm)</span>
            <span className="ef-food-kcal">64 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥤</span>
          Drinks
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Buttermilk</span>
            <span className="ef-food-meta">1 Glass (200ml)</span>
            <span className="ef-food-kcal">15 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Lemon water</span>
            <span className="ef-food-meta">1 Glass (200ml)</span>
            <span className="ef-food-kcal">6 Kcal</span>
          </li>
        </ul>
      </section>

      {/* Evening Snack */}
      <section className="ef-meal" aria-label="Evening snack meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Evening-Snack</h2>
          <button className="ef-add-btn" aria-label="Add item">+</button>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">04:30 - 05:30</span>
          <span className="ef-kcal">150 kcal</span>
        </div>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥗</span>
          Sides
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Roasted makhana with indian spices</span>
            <span className="ef-food-meta">1 Bowl (10gm)</span>
            <span className="ef-food-kcal">46 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Fruit salad</span>
            <span className="ef-food-meta">1 Bowl (140gm)</span>
            <span className="ef-food-kcal">93 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Chana nuts (packaged)</span>
            <span className="ef-food-meta">1 Handful (10gm)</span>
            <span className="ef-food-kcal">56 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥤</span>
          Drinks
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Chai (Tea with sugar)</span>
            <span className="ef-food-meta">1 Cup (173gm)</span>
            <span className="ef-food-kcal">59 Kcal</span>
          </li>
        </ul>
      </section>

      {/* Dinner */}
      <section className="ef-meal" aria-label="Dinner meal plan">
        <div className="ef-meal-header">
          <h2 className="ef-meal-title">Dinner</h2>
          <button className="ef-add-btn" aria-label="Add item">+</button>
        </div>
        <div className="ef-meal-meta">
          <span className="ef-time">07:30 - 09:00</span>
          <span className="ef-kcal">400 kcal</span>
        </div>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🍽️</span>
          Main Meals
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Tomato tur dal</span>
            <span className="ef-food-meta">1 Katori (130gm)</span>
            <span className="ef-food-kcal">101 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Ghiya chana dal</span>
            <span className="ef-food-meta">1 Katori (128gm)</span>
            <span className="ef-food-kcal">90 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Urad dal</span>
            <span className="ef-food-meta">1 Katori (125gm)</span>
            <span className="ef-food-kcal">101 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Brown rice (cooked)</span>
            <span className="ef-food-meta">1 Bowl (164gm)</span>
            <span className="ef-food-kcal">185 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Dal paneer</span>
            <span className="ef-food-meta">1 Katori (129gm)</span>
            <span className="ef-food-kcal">155 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Moong dal</span>
            <span className="ef-food-meta">1 Katori (127gm)</span>
            <span className="ef-food-kcal">117 Kcal</span>
          </li>
        </ul>

        <h3 className="ef-category-title">
          <span className="ef-category-icon">🥗</span>
          Sides
        </h3>
        <ul className="ef-food-list">
          <li className="ef-food">
            <span className="ef-food-name">Tomato cucumber onion raita</span>
            <span className="ef-food-meta">1 Bowl (158gm)</span>
            <span className="ef-food-kcal">64 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Cucumber salad</span>
            <span className="ef-food-meta">1 Bowl (121gm)</span>
            <span className="ef-food-kcal">16 Kcal</span>
          </li>
          <li className="ef-food">
            <span className="ef-food-name">Onion salad (Pyaaz ka lachcha)</span>
            <span className="ef-food-meta">1 Bowl (118gm)</span>
            <span className="ef-food-kcal">48 Kcal</span>
          </li>
        </ul>
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
