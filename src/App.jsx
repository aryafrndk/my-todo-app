import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
