import React, { Fragment } from 'react';
import { AddLink } from './AddLink';
import { ListLinks } from './ListLinks';

export const HomeLinks = () => {
  return (
    <Fragment>
      <section className="home-links">
        <header>
          <h1 className="title">Links App</h1>
        </header>
        <article className="home-links__add">
          <AddLink></AddLink>
        </article>
        <article className="home-links-list">
          <ListLinks></ListLinks>
        </article>
      </section>
    </Fragment>
  );
};