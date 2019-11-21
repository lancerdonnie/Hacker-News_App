import React from 'react';

const Content = props => {
  const {
    title,
    url,
    story_url,
    text,
    author,
    type,
    points,
    story_title,
    comment_text
  } = props.hit;
  return (
    <div className='inner-content'>
      <div className='lead'>
        <a href={url || story_url}>{title || story_title}</a>
        <span>{author}</span>
        <span>{type}</span>
      </div>
      <div
        className='text-muted'
        dangerouslySetInnerHTML={{ __html: text || comment_text }}
      ></div>
      <div className='trail'>
        <span>2006-10-09</span>
        <span></span>18:21:51<span>points:{points}</span>
      </div>
    </div>
  );
};

export default Content;
