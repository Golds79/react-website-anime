import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BlogItem(props) {
  return (
    <>
      <li className="blog-item">
        <div className="blog-item-box">
          <figure className="blog-item-img">
            <Link to={props.path}>
              <img className="blog-img" alt="Travel Img" src={props.src} />
            </Link>
          </figure>
          <div className="blog-item-info">
            <h4 className="blog-item-text">{props.text}</h4>
          </div>
          <Stack spacing={2} direction="row">
            <Button href={props.path} variant="contained" id="btn-blog">
              Read more
            </Button>
          </Stack>
        </div>
      </li>
    </>
  );
}

export default BlogItem;
