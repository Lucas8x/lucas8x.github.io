import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
