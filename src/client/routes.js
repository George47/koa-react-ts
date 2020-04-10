import { generatePath } from 'react-router-dom';

const defaults = {
  url(options = {}) {
    return {
      ...options,
      pathname: generatePath(this.path, options.params),
    };
  },
};

export const routes = {
  signIn: {
    ...defaults,
    name: 'home',
    path: '/home',
    exact: false,
    private: false,
  },
};
