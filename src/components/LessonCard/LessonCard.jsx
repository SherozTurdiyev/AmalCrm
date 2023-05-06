import React from 'react';
import './LessonCard.css'

const LessonCard = (props) => {
  return (
    <div>
      <div className='card'>
        <div style={{ backgroundColor: props.color ? props.color : "rgb(111, 0, 255)"}} className="left"></div>
        <div className='right'>
          <h1>{props.group ? props.group : "Guruh"}</h1>
          <p>{props.lang ? props.lang : "til"}</p>
          <p className='mt-3'> <i class="bi bi-calendar4 date"></i> {props.date ? props.date : "sana"}</p>
          <p><i class="bi bi-clock time"></i> {props.time ? props.time : "vaqt"}</p>
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
