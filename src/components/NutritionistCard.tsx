import React from 'react';

interface NutritionistCardProps {
  className?: string;
}

const NutritionistCard: React.FC<NutritionistCardProps> = ({ className = '' }) => {
  return (
    <div 
      className={`ef-nutrition-summary-new ${className}`}
      role="region"
      aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
    >
      {/* Calories - Centered at top */}
      <div className="ef-calories-section-new">
        <div className="ef-nutrition-label-bold">Calories</div>
        <div className="ef-nutrition-value-large">1400 Kcal</div>
      </div>
      
      {/* Macros - Horizontal row below calories */}
      <div className="ef-macros-section-new">
        <div className="ef-macro-item-new">
          <div className="ef-macro-dot ef-protein-dot"></div>
          <div className="ef-nutrition-label-bold">Protein</div>
          <div className="ef-nutrition-value-new">80g</div>
        </div>
        
        <div className="ef-macro-item-new">
          <div className="ef-macro-dot ef-carbs-dot"></div>
          <div className="ef-nutrition-label-bold">Carbs</div>
          <div className="ef-nutrition-value-new">150g</div>
        </div>
        
        <div className="ef-macro-item-new">
          <div className="ef-macro-dot ef-fats-dot"></div>
          <div className="ef-nutrition-label-bold">Fats</div>
          <div className="ef-nutrition-value-new">50g</div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistCard;