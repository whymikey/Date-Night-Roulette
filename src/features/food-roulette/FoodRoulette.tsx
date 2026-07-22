import useFoodRoll from "./useFoodRoll";
import type { FoodOption } from "../../types";
import Button from "../../shared/ui/Button";


const FOOD_OPTIONS: FoodOption[] = [
  { id: 1, name: "Пицца", emoji: "🍕", color: "bg-orange-500" },
  { id: 2, name: "Суши / Роллы", emoji: "🍣", color: "bg-red-500" },
  { id: 3, name: "Бургеры", emoji: "🍔", color: "bg-yellow-500" },
  { id: 4, name: "Вок / Лапша", emoji: "🍜", color: "bg-amber-600" },
  { id: 5, name: "Шаурма", emoji: "🌯", color: "bg-orange-400" },
  { id: 6, name: "Сладкое / Десерты", emoji: "🍩", color: "bg-pink-500" },
  { id: 7, name: "Здоровая еда", emoji: "🥗", color: "bg-emerald-500" },
  { id: 8, name: "Курочка", emoji: "🍗", color: "bg-amber-700" },
];

const FoodRoulette = () => {
  const { selectedIndex, isSpinning, roll } = useFoodRoll(FOOD_OPTIONS.length);

  return (
    <div className="text-center">
      {selectedIndex === null
        ? "Нажмите кнопку"
        : `${FOOD_OPTIONS[selectedIndex].emoji} ${FOOD_OPTIONS[selectedIndex].name}`}
      <Button onClick={roll} disabled={isSpinning}>
        Выбрать еду
      </Button>
    </div>
  );
};

export default FoodRoulette;
