import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostListPage from 'pages/PostListPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import WritePage from 'pages/WritePage';
import PostPage from 'pages/PostPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path={'/login'} />
      <Route component={RegisterPage} path={'/register'} />
      <Route component={WritePage} path={'/write'} />
      <Route component={PostPage} path={'/@:username/:postId'} />
    </Switch>
  );
};

export default App;
