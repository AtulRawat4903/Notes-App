import NoteCard from "./NoteCard";

const NotesContainer = ({ notes, editNote, deleteNote, editingNoteId }) => {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-2xl">Your notes</h2>
        {notes.length > 0 && (
          <span className="text-sm text-[#726D7D]">
            {notes.length} {notes.length === 1 ? "note" : "notes"}
          </span>
        )}
      </div>

      {notes.length === 0 ? (
        <div className="border border-dashed border-[#322F3A] rounded-2xl py-16 text-center">
          <p className="text-[#96909F]">
            Nothing here yet — write your first note above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              editNote={editNote}
              deleteNote={deleteNote}
              isEditing={note.id === editingNoteId}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NotesContainer;
