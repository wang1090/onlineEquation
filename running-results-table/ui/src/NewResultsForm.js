import React from 'react';
    import { Form, Header, Segment, Button } from 'semantic-ui-react'
const styles ={
   fontSize: '40px',
   fontStyle: 'italic',
   textAlign: 'center',
   fontFamily:'MarkPro Medium',
 }
    export default class NewResultsForm extends React.Component {
        state = {
            name: '',
            equation: ''
        };
        onChangeName = this._onChangeName.bind(this);
        onChangeEquation = this._onChangeEquation.bind(this);
        onSubmit = this._onSubmit.bind(this);
        render() {
            return (
                <div style={styles} className="ui container">
                    <Segment vertical>
                        <Header>Inputed Equation History</Header>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <label>User Name</label>
                                <input placeholder='e.g. a' value={this.state.name} onChange={this.onChangeName} />
                            </Form.Field>
                            <Form.Field>
                                <label>Equation</label>
                                <input placeholder='e.g. 1+1=2' value={this.state.equation} onChange={this.onChangeEquation} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </div>
            );
        }
        _onChangeName(e) {
            this.setState({
                name: e.target.value
            });
        }
        _onChangeEquation(e) {
            this.setState({
                equation: e.target.value
            });
        }
        _onSubmit() {
            const payload = {
                name: this.state.name,
                equation: this.state.equation
            };
            fetch('http://localhost:8080/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            this.setState({
                name: '',
                equation: ''
            });
        }
    }
