import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleEditNote = (updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <SearchBar onSearch={handleSearch} />
      <NoteForm onAddNote={handleAddNote} editingNote={editingNote} onEditNote={handleEditNote} />
      <NoteList
        notes={notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))}
        onDelete={handleDeleteNote}
        onEdit={setEditingNote}
      />
    </div>
  );
}

export default App;
