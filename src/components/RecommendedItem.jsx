import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/Recommended.css';

function RecommendedItem(props) {
  return (
    <>
      <div className="recomm-box-item">
        <img src={props.src} alt={props.title} />
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.studios}</p>
          <p>{props.directed}</p>
          <p>{props.composer}</p>
          <p>{props.premiered}</p>
          <Stack spacing={2} direction="row">
            <Button href={props.path} variant="contained" id="btn-recomm">
              View more cast details
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default RecommendedItem;
