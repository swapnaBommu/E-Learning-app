import React from 'react';
import style from './Page404.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={style.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <button className={style.button}
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;
