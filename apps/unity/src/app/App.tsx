// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import { Title } from '@qlue/component';
import { useConsoleLog } from '@qlue/hooks';
import { Route, Link } from 'react-router-dom';

export function App() {
  useConsoleLog('Hello Qlue Unity');

  return (
    <>
      <Title title="Hello Qlue Unity" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
