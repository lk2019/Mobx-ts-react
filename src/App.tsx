import {observer} from 'mobx-react';
import * as React from 'react';
import IRuler from "src/component/AppRuler/Ruler"

@observer
class App extends React.Component {
  public render() {
    
    return (
      <div className="App"> 
        <IRuler />
      </div>
    );
  }
}

export default App;
