import React from 'react';
import './LessonCard.css'

const LessonCard = (props) => {
  return (
    <div>
      <div className='cards mb-3'>
        <div style={{ backgroundColor: props.color ? props.color : "rgb(111, 0, 255)"}} className="left"></div>
        <div className='right'>
          <h1>{props.group || "Guruh"}</h1>
          <p>{props.teacher || "til"}</p>
          <p className='mt-3 mb-0'> <i class="bi bi-calendar4 date"></i> {props.date || "sana"}</p>
          <p className=''><i class="bi bi-clock time"></i> {props.time || "vaqt"}</p>
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
