export default function FoodDetail({ food }: { food: any }) {
    return (
      <div className="mt-10 p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-2">{food.name}</h2>
        <p className="text-sm text-gray-500">[{food.type}]</p>
        <p className="mt-2">🍚 기본 재료: {food.basic.join(', ')}</p>
        <p>🧂 추가 재료: {food.extra.join(', ')}</p>
        <p className="mt-2">📝 레시피: {food.recipe}</p>
        <p>📍 맛집 추천: {food.hot.join(', ')}</p>
      </div>
    );
  }