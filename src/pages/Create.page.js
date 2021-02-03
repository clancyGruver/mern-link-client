import React, { useContext, useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';
import { useHistory } from 'react-router-dom';

export const CreatePage = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [link, setLink] = useState('');
  const { request } = useHttp();
  const pressKeyHandler = async e => {
    if(e.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`,
        });
        history.push(`/detail/${data.link._id}`);
      } catch (error) {
        
      }
    }
  }

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem',}}>

        <div className="input-field">
          <input 
            placeholder="вставьте ссылку"
            id="link"
            name="link"
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressKeyHandler}
          />
          <label htmlFor="link">Введите ссылку</label>
        </div>

      </div>
    </div>
  );
}