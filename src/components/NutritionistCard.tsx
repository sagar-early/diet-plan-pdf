import React from 'react';

interface NutritionistCardProps {
  className?: string;
}

const NutritionistCard: React.FC<NutritionistCardProps> = ({ className = '' }) => {
  return (
    <div className={`ef-doctor-nutrition-card ${className}`}>
      {/* Doctor Section */}
      <div className="ef-doctor-section">
        <div className="ef-doctor-image">
          <img 
            src="/lovable-uploads/image.png" 
            alt="Doctor portrait with stethoscope in white coat"
            className="ef-doctor-photo"
          />
        </div>
        <div className="ef-doctor-info">
          <h3 className="ef-doctor-title">Your Nutritionist</h3>
          <p className="ef-doctor-subtitle">Personalized Diet Plan</p>
        </div>
      </div>

      {/* Nutrition Summary */}
      <div 
        className="ef-nutrition-summary-compact"
        role="region"
        aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
      >
        <div className="ef-nutrition-layout">
          {/* Calories - Left aligned */}
          <div className="ef-calories-section">
            <span className="ef-nutrition-label">Calories</span>
            <span className="ef-nutrition-value">1400 Kcal</span>
          </div>
          
          {/* Macros - Right aligned */}
          <div className="ef-macros-section">
            <div className="ef-macro-item-compact">
              <div className="ef-macro-dot ef-protein-dot"></div>
              <span className="ef-nutrition-label">Protein</span>
              <span className="ef-nutrition-value">80g</span>
            </div>
            
            <div className="ef-macro-item-compact">
              <div className="ef-macro-dot ef-carbs-dot"></div>
              <span className="ef-nutrition-label">Carbs</span>
              <span className="ef-nutrition-value">150g</span>
            </div>
            
            <div className="ef-macro-item-compact">
              <div className="ef-macro-dot ef-fats-dot"></div>
              <span className="ef-nutrition-label">Fats</span>
              <span className="ef-nutrition-value">50g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistCard;