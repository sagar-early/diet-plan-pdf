const Index = () => {
  return (
    <main className="ef-page">
      {/* Close button - fixed position outside card */}
      <button className="ef-close" aria-label="Close">×</button>
      
      {/* Page Header - Right aligned */}
      <header className="ef-page-header">
        <h1 className="ef-page-title">Diet Plan</h1>
      </header>

      {/* Six Equal Cards Grid */}
      <div className="ef-cards-grid">
        
        {/* Card 1: Nutritional Summary */}
        <div className="ef-card ef-nutrition-card">
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

        {/* Card 2: Pre-Breakfast */}
        <div className="ef-card ef-meal-card">
          <div className="ef-card-half">
            <h3 className="ef-section-title">Main Meals</h3>
            <div className="ef-content-area"></div>
          </div>
          <div className="ef-card-divider"></div>
          <div className="ef-card-half">
            <h3 className="ef-section-title">Sides</h3>
            <div className="ef-content-area"></div>
          </div>
        </div>

        {/* Card 3: Breakfast */}
        <div className="ef-card ef-meal-card">
          <div className="ef-card-half">
            <h3 className="ef-section-title">Main Meals</h3>
            <div className="ef-content-area"></div>
          </div>
          <div className="ef-card-divider"></div>
          <div className="ef-card-half">
            <h3 className="ef-section-title">Sides</h3>
            <div className="ef-content-area"></div>
          </div>
        </div>

        {/* Card 4: Lunch */}
        <div className="ef-card ef-meal-card">
          <div className="ef-card-half">
            <h3 className="ef-section-title">Main Meals</h3>
            <div className="ef-content-area"></div>
          </div>
          <div className="ef-card-divider"></div>
          <div className="ef-card-half">
            <h3 className="ef-section-title">Sides</h3>
            <div className="ef-content-area"></div>
          </div>
        </div>

        {/* Card 5: Evening Snack */}
        <div className="ef-card ef-meal-card">
          <div className="ef-card-half">
            <h3 className="ef-section-title">Main Meals</h3>
            <div className="ef-content-area"></div>
          </div>
          <div className="ef-card-divider"></div>
          <div className="ef-card-half">
            <h3 className="ef-section-title">Sides</h3>
            <div className="ef-content-area"></div>
          </div>
        </div>

        {/* Card 6: Dinner */}
        <div className="ef-card ef-meal-card">
          <div className="ef-card-half">
            <h3 className="ef-section-title">Main Meals</h3>
            <div className="ef-content-area"></div>
          </div>
          <div className="ef-card-divider"></div>
          <div className="ef-card-half">
            <h3 className="ef-section-title">Sides</h3>
            <div className="ef-content-area"></div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Index;
