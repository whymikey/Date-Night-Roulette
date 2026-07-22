import { useState, useCallback } from "react";

const useFoodRoll = (itemCount: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const roll = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    let spins = 0;
    const maxSpins = 15;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * itemCount);
      setSelectedIndex(randomIndex)
      spins++

      if (spins >= maxSpins) {
        clearInterval(intervalId)
        setIsSpinning(false)
      }
    }, 100);
  }, [isSpinning, itemCount])

  return {selectedIndex, isSpinning, roll}
};

export default useFoodRoll;
