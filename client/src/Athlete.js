import React, {Component} from 'react';


class Athlete extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
    }

    render(){
        return(
            <div>
                <p>WELCOME</p>
            </div>
        )
    }
}

export default Athlete;