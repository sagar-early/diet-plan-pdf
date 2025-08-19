import React from 'react';

interface NutritionistCardProps {
  className?: string;
}

const NutritionistCard: React.FC<NutritionistCardProps> = ({ className = '' }) => {
  return (
    <div 
      className={`ef-professional-nutritionist-card ${className}`}
      role="region"
      aria-label="Nutritionist plan"
    >
      {/* Macro Row - Center Aligned */}
      <div 
        className="ef-macro-row-container-centered"
        role="group"
        aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
      >
        <div className="ef-macro-item-centered">
          <span className="ef-macro-heading">Calories</span>
          <span className="ef-macro-subtext">1400 Kcal</span>
        </div>
        
        <div className="ef-macro-item-centered">
          <div className="ef-macro-dot ef-protein-dot"></div>
          <span className="ef-macro-heading">Protein</span>
          <span className="ef-macro-subtext">80g</span>
        </div>
        
        <div className="ef-macro-item-centered">
          <div className="ef-macro-dot ef-carbs-dot"></div>
          <span className="ef-macro-heading">Carbs</span>
          <span className="ef-macro-subtext">150g</span>
        </div>
        
        <div className="ef-macro-item-centered">
          <div className="ef-macro-dot ef-fats-dot"></div>
          <span className="ef-macro-heading">Fats</span>
          <span className="ef-macro-subtext">50g</span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="ef-card-footer">
        <p className="ef-footer-text">Personalized by Early Nutrition Team</p>
      </div>
    </div>
  );
};

export default NutritionistCard;