import React from 'react';

interface NutritionistCardProps {
  className?: string;
}

const NutritionistCard: React.FC<NutritionistCardProps> = ({ className = '' }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-5 ${className}`}
      role="region"
      aria-label="Daily intake: 1400 kilocalories; Protein 80 grams; Carbohydrates 150 grams; Fats 50 grams"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Calories Section - Left */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-800 mb-1">Calories</span>
          <span className="text-base font-medium text-gray-900">1400 Kcal</span>
        </div>
        
        {/* Macronutrients Section - Right */}
        <div className="flex flex-row gap-6">
          {/* Protein */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">Protein</span>
              <span className="text-sm font-medium text-gray-600">80g</span>
            </div>
          </div>
          
          {/* Carbs */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">Carbs</span>
              <span className="text-sm font-medium text-gray-600">150g</span>
            </div>
          </div>
          
          {/* Fats */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">Fats</span>
              <span className="text-sm font-medium text-gray-600">50g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistCard;