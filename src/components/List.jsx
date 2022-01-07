import React from 'react';

export const List = ({ items }) => {
  const list = items.map((item) => {
    return (
      <a key={item} className="panel-block is-active">
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
      </a>
    );
  });
  return <div>{list}</div>;
};