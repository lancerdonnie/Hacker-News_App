import React from 'react';

const Content = props => {
  const {
    title,
    url,
    story_url,
    text,
    author,
    points,
    story_title,
    comment_text,
    created_at
  } = props.hit;
  let time = created_at.split('T');
  return (
    <div className='inner-content'>
      <div>
        <a className='h2' href={url || story_url}>
          {title || story_title}
        </a>
      </div>
      <div>
        <span className='others'>By {author}</span>
        <span>{points} points</span>
      </div>
      <div
        className='text-muted'
        dangerouslySetInnerHTML={{ __html: text || comment_text }}
      ></div>
      <div className='trail'>
        <span>{time[0]}</span>
        <span>{time[1].slice(0, -5)}</span>
      </div>
    </div>
  );
};

export default Content;
