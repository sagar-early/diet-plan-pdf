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
      {/* Header with profile and info */}
      <div className="ef-nutritionist-header">
        <div className="ef-nutritionist-profile">
          <img 
            src="/lovable-uploads/a1db4fe7-e72a-4619-8117-158b14725315.png" 
            alt="Nutritionist Profile"
            className="ef-profile-image"
          />
        </div>
        <div className="ef-nutritionist-info">
          <h3 className="ef-nutritionist-name">Dr. Sarah Mitchell</h3>
          <p className="ef-nutritionist-designation">Nutritionist</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="ef-card-divider"></div>
      
      {/* Macro Row - Text Only */}
      <div 
        className="ef-macro-row-container"
        role="group"
        aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
      >
        <div className="ef-macro-item">
          <span className="ef-macro-label">Calories</span>
          <span className="ef-macro-value">1400 Kcal</span>
        </div>
        
        <div className="ef-macro-item">
          <div className="ef-macro-dot ef-protein-dot"></div>
          <span className="ef-macro-label">Protein</span>
          <span className="ef-macro-value">80g</span>
        </div>
        
        <div className="ef-macro-item">
          <div className="ef-macro-dot ef-carbs-dot"></div>
          <span className="ef-macro-label">Carbs</span>
          <span className="ef-macro-value">150g</span>
        </div>
        
        <div className="ef-macro-item">
          <div className="ef-macro-dot ef-fats-dot"></div>
          <span className="ef-macro-label">Fats</span>
          <span className="ef-macro-value">50g</span>
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