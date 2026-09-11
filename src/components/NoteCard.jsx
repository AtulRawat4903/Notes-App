const NoteCard = ({ id, title, content, editNote, deleteNote, isEditing }) => {
  return (
    <div
      className={`bg-[#1E1C24] border rounded-2xl p-5 min-h-40 flex flex-col transition
  animate-[fadeIn_0.25s_ease-out]
  ${
    isEditing
      ? "border-[#E7B547]/60 shadow-[0_0_0_1px_rgba(231,181,71,0.25)]"
      : "border-[#322F3A] hover:border-[#4A4555]"
  }`}
    >
      <h3 className="font-serif text-lg mb-2 wrap-break-word">{title}</h3>

      <p className="text-[#96909F] text-sm leading-relaxed wrap-break-word flex-1">
        {content}
      </p>

      <div className="flex items-center justify-end gap-2 mt-5 pt-4 border-t border-[#2A2830]">
        <button
          className="px-3 py-1.5 text-sm text-[#96909F] hover:text-[#F1EEE6] rounded-lg hover:bg-white/5 transition cursor-pointer"
          onClick={() => editNote(id)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1.5 text-sm text-[#E08585] hover:text-[#EF9C9C] rounded-lg hover:bg-[#E08585]/10 transition cursor-pointer"
          onClick={() => deleteNote(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
