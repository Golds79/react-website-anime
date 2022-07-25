import React from 'react';
import '../css/Blog.css';
import BlogItem from './BlogItem';
import ImageBlog1 from '../media/images/akage-no-an.webp';
import ImageBlog2 from '../media/images/heidi.webp';
import ImageBlog3 from '../media/images/barefoot gen.webp';
import ImageBlog4 from '../media/images/furandasu-no-inu.webp';
import ImageBlog5 from '../media/images/night is short.webp';

function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <h6>Blog</h6>
        <div className="blog-wrapper">
          <ul className="blog-items">
            <BlogItem
              src={ImageBlog1}
              text="Because the classics never die: Akage no An"
              path="/akage-no-an"
            />
            <BlogItem
              src={ImageBlog2}
              text="How 'Heidi' conquered Japan, sparking an anime revolution"
              path="/heidi-japan"
            />
          </ul>
          <ul className="blog-items">
            <BlogItem
              src={ImageBlog3}
              text="One of the most influential banned anime of all time: Barefoot Gen"
              path="/banned-barefoot-gen"
            />
            <BlogItem
              src={ImageBlog4}
              text="Furandâsu no inu, an anime that is not suitable for children"
              path="/furandasu-no-inu-children"
            />
            <BlogItem
              src={ImageBlog5}
              text="Night is short, walk on girl: a dose of surrealism and humor"
              path="/night-short"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
