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
    <div className='bgcolor inner-content'>
      <div className='color1'>
        <a className='h2' href={url || story_url}>
          {title || story_title}
        </a>
      </div>
      <div>
        <span className='others color2'>By {author}</span>
        <span className='color2'>{points} points</span>
      </div>
      <div
        className='storytext'
        dangerouslySetInnerHTML={{ __html: text || comment_text }}
      ></div>
      <div className='trail'>
        <span className='color3'>{time[0]}</span>
        <span className='color3'>{time[1].slice(0, -5)}</span>
      </div>
    </div>
  );
};

export default Content;
