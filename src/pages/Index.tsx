const Index = () => {
  return (
    <main className="ef-page">
      {/* Close button - fixed position outside card */}
      <button className="ef-close" aria-label="Close">×</button>
      
      {/* Page 1 */}
      <div className="ef-page-content">
        {/* Header section with rectangular card and nutrition summary */}
        <div className="ef-header-section">
          {/* Rectangular header card with logo and title */}
          <div className="ef-header-card">
            <div className="ef-logo">
              <span className="ef-logo-text">EARLY</span>
            </div>
            <h1 className="ef-header-title">Diet Plan</h1>
          </div>
          
          {/* Nutritional Summary positioned to the right */}
          <div className="ef-nutrition-summary">
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
                <text x="60" y="55" textAnchor="middle" fill="#3a1f12" fontSize="20" fontWeight="bold">1400</text>
                <text x="60" y="72" textAnchor="middle" fill="#3a1f12" fontSize="12">Kcal</text>
              </svg>
              
              {/* Macro labels vertical */}
              <div className="ef-macro-labels-vertical">
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
          </div>
        </div>

        {/* First 4 meal cards - 2x2 grid */}
        <div className="ef-meal-cards-grid">
          {/* Card 1: Pre-Breakfast */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Pre-Breakfast</h3>
            <div className="ef-meal-time">06:30 – 07:00</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Breakfast */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Breakfast</h3>
            <div className="ef-meal-time">07:30 – 08:30</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Lunch */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Lunch</h3>
            <div className="ef-meal-time">12:30 – 13:30</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Evening Snack */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Evening Snack</h3>
            <div className="ef-meal-time">17:00 – 18:00</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
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
            <div className="ef-meal-time">19:30 – 20:30</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
              </div>
            </div>
          </div>

          {/* Card 6: Bedtime Snack */}
          <div className="ef-meal-card">
            <h3 className="ef-meal-title">Bedtime Snack</h3>
            <div className="ef-meal-time">21:30 – 22:00</div>
            
            <div className="ef-meal-sections">
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Main Meals</h4>
                <div className="ef-content-area"></div>
              </div>
              <div className="ef-meal-section">
                <h4 className="ef-section-title">Sides</h4>
                <div className="ef-content-area"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cheat Meal Card */}
        <div className="ef-cheat-meal-card">
          <div className="ef-cheat-icon">🍽️</div>
          <div className="ef-cheat-content">
            <h3 className="ef-cheat-title">Cheat Meal</h3>
            <div className="ef-cheat-time">Sunday – Lunch</div>
            <p className="ef-cheat-description">
              Enjoy your Sunday brunch at your favourite place. Make sure to keep it within 300 kcal
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
