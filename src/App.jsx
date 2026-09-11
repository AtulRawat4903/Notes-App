import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesContainer from "./components/NotesContainer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (id) => {
    setEditingNoteId(id);
  };

  const cancelEdit = () => {
    setEditingNoteId(null);
  };

  const updateNote = (id, title, content) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title, content } : note,
      ),
    );
    setEditingNoteId(null);
  };

  const editingNote = notes.find((note) => note.id === editingNoteId);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#17161C] text-[#F1EEE6] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <Navbar />

      <main className="max-w-6xl mx-auto">
        <NoteForm
          addNote={addNote}
          updateNote={updateNote}
          cancelEdit={cancelEdit}
          editingNote={editingNote}
        />

        <NotesContainer
          notes={notes}
          editNote={editNote}
          deleteNote={deleteNote}
          editingNoteId={editingNoteId}
        />
      </main>
    </div>
  );
};

export default App;
