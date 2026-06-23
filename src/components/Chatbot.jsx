import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div style={{
          width: '300px',
          height: '400px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '10px',
          marginTop: '10px',
          padding: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
            <div style={{ padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px', marginBottom: '10px' }}>
              Hello! How can I assist you today?
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '8px',
                border: '1px solid #ced4da',
                borderRadius: '4px'
              }}
            />
            <button style={{
              padding: '8px 15px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;