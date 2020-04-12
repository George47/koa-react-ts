import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
        <h1>Home works!</h1>
        <Link to="/table">
            <button>go to table</button>
        </Link>
    </div>
  );
};

export default Home;