import React, { Component } from 'react';
import axios from 'axios';


class PersonListComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            persons:[]
        }

        this.addPersonClickHandler=this.addPersonClickHandler.bind(this);
        this.updateClickHandler=this.updateClickHandler.bind(this);
        this.deleteClickHandler=this.deleteClickHandler.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/persons')
        .then((res) =>{
            this.setState({persons:res.data});
            console.log(res.data);
        })

    }

    addPersonClickHandler = () => {
         this.props.navigate('/add-person/-1')
    }

    updateClickHandler = (id) =>{
        this.props.navigate(`/add-person/${id}`)
    }

    deleteClickHandler = (id) =>{
        axios.delete('http://localhost:8080/api/persons'+'/'+id)
        .then((res)=>{
            this.setState({persons:this.state.persons.filter(person => person.id !==id)});
        })
        

    }

    render() {
        return (
            <div className='container'>
                <h2 className='text-center'>Person List</h2>
                <div>
                    <button className='btn btn-primary' onClick={this.addPersonClickHandler}>Add Person</button>
                </div>
                <div className='row'>
                    <table className='table table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Person First Name</th>
                                <th>Person Last Name</th>
                                <th>Person Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.persons.map(
                                person =>
                                <tr key={person.id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.email}</td>
                                    <td><button className='btn btn-info ' onClick={()=>this.updateClickHandler(person.id)}>Update</button></td>
                                    <td><button className='btn btn-danger ' onClick={()=>this.deleteClickHandler(person.id)}>Delete</button></td>
                                </tr>
                            )
                            
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default PersonListComponent;
