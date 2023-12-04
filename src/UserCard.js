import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
    avatar: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    const updatedValue = name === 'avatar' ? files[0] : value;

    setUser((prevUser) => ({ ...prevUser, [name]: updatedValue }));
  };

  const handlePreview = () => {
    navigate('/preview', {
      state: { user },
    });
  };

  return (
    <div>
      <h1>Карточка пользователя</h1>
      <div>
        <label>
          Имя:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Возраст:
          <input type="text" name="age" value={user.age} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" name="email" value={user.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Аватар:
          <input type="file" name="avatar" onChange={handleChange} />
        </label>
      </div>
      <div>
        <button onClick={handlePreview}>Предварительный просмотр</button>
      </div>
    </div>
  );
};

export default UserCard;
