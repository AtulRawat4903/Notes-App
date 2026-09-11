/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const NoteForm = ({ addNote, updateNote, cancelEdit, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setError("");
    }
  }, [editingNote]);

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setError("");
    cancelEdit();
  };

  return (
    <div className="flex justify-center mb-16">
      <form
        className="w-full max-w-xl bg-[#1E1C24] border border-[#322F3A] rounded-2xl p-7 flex flex-col gap-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden"
        onSubmit={(e) => {
          e.preventDefault();

          if (!title.trim() && !content.trim()) {
            setError("Title & content are required.");
            return;
          }
          if (!title.trim()) {
            setError("Title is required.");
            return;
          }
          if (!content.trim()) {
            setError("Content is required.");
            return;
          }

          setError("");

          if (editingNote) {
            updateNote(editingNote.id, title, content);
          } else {
            addNote({ id: Date.now(), title, content });
          }

          setTitle("");
          setContent("");
        }}
      >
        <span className="absolute top-0 left-0 right-0 h-1 bg-[#E7B547]" />

        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl">
            {editingNote ? "Edit note" : "Add a note"}
          </h2>
          {editingNote && (
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm text-[#96909F] hover:text-[#F1EEE6] transition cursor-pointer"
            >
              Cancel
            </button>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="note-title" className="text-xs text-[#726D7D]">
            Title
          </label>
          <input
            id="note-title"
            className="bg-[#242229] border border-[#322F3A] text-[#F1EEE6] placeholder-[#5C5768] px-4 py-3 rounded-lg outline-none focus:border-[#E7B547]/70 focus:ring-2 focus:ring-[#E7B547]/15 transition"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Give it a name"
            value={title}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="note-content" className="text-xs text-[#726D7D]">
            Content
          </label>
          <textarea
            id="note-content"
            className="bg-[#242229] border border-[#322F3A] text-[#F1EEE6] placeholder-[#5C5768] px-4 py-3 rounded-lg outline-none focus:border-[#E7B547]/70 focus:ring-2 focus:ring-[#E7B547]/15 transition resize-none min-h-32 leading-relaxed"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            value={content}
          />
        </div>

        <button className="bg-[#E7B547] text-[#17161C] font-medium py-3 rounded-lg hover:bg-[#F4C766] transition cursor-pointer">
          {editingNote ? "Update note" : "Add note"}
        </button>

        {error && <p className="text-[#E08585] text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default NoteForm;
