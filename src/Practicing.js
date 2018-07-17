import React from 'react'
import axios from 'axios'

export default class Practice extends React.Component {
        state = {
          List : []
        }
     componentDidMount() {
       axios.get(`http://hapi.fhir.org/baseDstu3/Organization/uhn`).then(res => {
         console.log(res);
         this.setState({ List: res.data });
       })
     }

     render(){
       return <ul>{this.state.persons.map(List => <li key={List.id}>{List.name}</li>)}
       </ul>;
     }
}
