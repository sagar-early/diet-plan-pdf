import React from 'react';

interface NutritionistCardProps {
  className?: string;
}

const NutritionistCard: React.FC<NutritionistCardProps> = ({ className = '' }) => {
  return (
    <div 
      className={`ef-nutrition-summary-centered ${className}`}
      role="region"
      aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
    >
      <div className="ef-nutrition-grid">
        {/* Calories */}
        <div className="ef-nutrition-item">
          <span className="ef-nutrition-heading">Calories</span>
          <span className="ef-nutrition-value">1400 Kcal</span>
        </div>
        
        {/* Protein */}
        <div className="ef-nutrition-item">
          <div className="ef-macro-dot ef-protein-dot"></div>
          <span className="ef-nutrition-heading">Protein</span>
          <span className="ef-nutrition-value">80g</span>
        </div>
        
        {/* Carbs */}
        <div className="ef-nutrition-item">
          <div className="ef-macro-dot ef-carbs-dot"></div>
          <span className="ef-nutrition-heading">Carbs</span>
          <span className="ef-nutrition-value">150g</span>
        </div>
        
        {/* Fats */}
        <div className="ef-nutrition-item">
          <div className="ef-macro-dot ef-fats-dot"></div>
          <span className="ef-nutrition-heading">Fats</span>
          <span className="ef-nutrition-value">50g</span>
        </div>
      </div>
    </div>
  );
};

export default NutritionistCard;