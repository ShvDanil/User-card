import React from 'react';
import { useLocation } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {user && (
        <div style={{ marginRight: '20px', marginLeft: '100px' }}>
          {user.avatar && (
            <img
              src={URL.createObjectURL(user.avatar)}
              alt="Аватар"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          )}
        </div>
      )}
      <div>
        <h1>Страница предварительного просмотра</h1>
        {user && (
          <div>
            <p>Имя: {user.name}</p>
            <p>Возраст: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPage;
