import TrashIcon from "./icons/TrashIcon";

export default function ChipPathButton() {
  return (
    <button className="button cursor-pointer relative flex items-center gap-[8px] h-[40px] rounded-[9999px] bg-gray-300 px-[24px] font-medium text-black select-none">
      <div
        aria-hidden="true"
        className="hold-overlay absolute inset-0 flex items-center justify-center gap-2 rounded-[9999px] bg-[#ffdbdc] text-red-700"
      >
        <TrashIcon />
        長押しで削除
      </div>
      <TrashIcon />
      長押しで削除
    </button>
  );
}
