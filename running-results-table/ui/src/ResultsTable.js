import React from 'react';
import { Table, Header, Segment, Label } from 'semantic-ui-react'
const styles ={
   fontSize: '40px',
   fontStyle: 'italic',
   textAlign: 'center',
   fontFamily:'MarkPro Medium',
   border: '2px solid black'
 }
export default function ResultsTable({results}) {
        const rows = results.map(((result, index) => {
            return (
                <Table.Row key={ index }>
                    <Table.Cell>
                        { index + 1 }
                    </Table.Cell>
                    <Table.Cell>{ result.name }</Table.Cell>
                    <Table.Cell>{ result.equation }</Table.Cell>
                </Table.Row>
            );
        }));
        return (
            <div style={styles} className="ui container">
                <Segment>
                    <Header>Inputed Equation History </Header>
                    <Table striped>
                        <Table.Header>
                            <Table.Row width={100} sort resizable>
                                <Table.HeaderCell>Number</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Equation</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { rows }
                        </Table.Body>
                    </Table>
                </Segment>
            </div>
        );
    }

