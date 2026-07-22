interface TabsProps {
  activeTab: "movie" | "food";
  onTabChange: (tab: "movie" | "food") => void;
}
const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div>
      <button
        onClick={() => onTabChange("movie")}
        className={`flex-1 py-3 p-2 mr-2 mb-3 text-sm font-bold rounded-lg transition-all ${
          activeTab === "movie"
            ? "bg-slate-800 text-white shadow-md"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        🍿 Кино
      </button>
      <button
        onClick={() => onTabChange("food")}
        className={`flex-1 py-3 p-2 mb-2 text-sm font-bold rounded-lg transition-all ${
          activeTab === "food"
            ? "bg-slate-800 text-white shadow-md"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        🍕 Еда
      </button>
    </div>
  );
};

export default Tabs;
