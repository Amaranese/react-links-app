import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './List';
import { useDispatch } from 'react-redux';
import { deleteAllLinks } from '../store/links/linksActions';

export const ListLinks = () => {
  const { links } = useSelector((state) => state);
  const dispatch = useDispatch();

  const list = links.links;

  const handleDeleteAllLinks = () => {
    dispatch(deleteAllLinks());
  };

  const items = list.map((item) => {
    <a className="panel-block is-active">
      <div className="box">
        <div className="box__links">
          <span className="panel-icon">
            <i className="fas fa-link" aria-hidden="true"></i>
          </span>
          {item}
        </div>
        <div>
          <button className="button is-danger is-fullwidth">Delete</button>
        </div>
      </div>
    </a>;
  });

  return (
    <div className="list-links">
      <nav className="panel is-primary">
        <p className="panel-heading">Links</p>

        {list.length === 0 ? (
          <a className="panel-block is-active">
            <div className="box text-center inline">
              <div className="box__empty">Add some links :)</div>
            </div>
          </a>
        ) : (
          <List items={list}></List>
        )}

        <div className="panel-block">
          <button
            onClick={handleDeleteAllLinks}
            className="button is-primary is-outlined is-fullwidth"
          >
            Delete all
          </button>
        </div>
      </nav>
    </div>
  );
};