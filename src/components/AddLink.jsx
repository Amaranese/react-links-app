import React from 'react';
import { useDispatch } from 'react-redux';
import { addLink } from '../store/links/linksActions';
import { useForm } from '../hooks/useForm';

export const AddLink = () => {
  const dispatch = useDispatch();
  const [form, handleInputChange] = useForm({ link: '' });
  let { link } = form;
  const input = document.getElementById('link');

  const handleAddLink = (event) => {
    event.preventDefault();
    dispatch(addLink(link));
  };

  return (
    <div>
      <form onSubmit={handleAddLink} className="add-linik">
        <input
          id="link"
          name="link"
          className="input"
          type="text"
          placeholder="Your link"
          value={link}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="button is-primary">
          <strong>Add</strong>
        </button>
      </form>
    </div>
  );
};