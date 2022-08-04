import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  
  
  function dividirCadena(cadenaADividir,separador) {
    var result = [];
    var arrayDeCadenas = cadenaADividir.split(separador);
    for (var i=0; i < arrayDeCadenas.length; i++) {
      result.push(
        <div>
        {arrayDeCadenas[i]}
        <br />
        <br />
        </div>          );
    }
    return (<div>{result}</div>);

 }
 
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <div className="img-cont">
          <img className="img-art"src={blog.cover} alt='cover' />
          </div>
          <div id="myDIV">
            <br />
          <p className='blog-desc'>{dividirCadena(blog.description,"&")}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
