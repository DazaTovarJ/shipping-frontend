import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { Card, Container } from 'react-bootstrap';
import "./ListaOrdenes.scss";

const ListaOrdenes = () => {
    function testClickEvent(param) {
        alert('Row Click Event');
    }

    const data = () => {
        return {
            columns: [
                {
                    label: 'CODIGO DE ORDEN',
                    field: 'orderCode',
                    width: 150,
                    attributes: {
                        'aria-controls': 'ListaOrdenes',
                        'aria-label': 'orderCode',
                    },
                },
                {
                    label: 'FECHA',
                    field: 'orderDate',
                    sort: 'disabled',
                    width: 150,
                },
                {
                    label: 'CIUDAD DE ORIGEN',
                    field: 'pikupCity',
                    sort: 'disabled',
                    width: 200,
                },
                {
                    label: 'CIUDAD DE DESTINO',
                    field: 'deliveryCity',
                    sort: 'disabled',
                    width: 200,
                },
                {
                    label: 'ESTADO',
                    field: 'status',
                    sort: 'disabled',
                    width: 100,
                },
            ],
            rows: [
                {
                    orderCode: '1426',
                    orderDate: '2011-04-25',
                    pikupCity: 'Bogotá',
                    deliveryCity: 'Barranquilla',
                    status: 'Entregado',

                    clickEvent: () => testClickEvent(1),
                },
                {
                    orderCode: '1428',
                    orderDate: '2022-11-22',
                    pikupCity: 'Cali',
                    deliveryCity: 'Barranquilla',
                    status: 'En Camino',

                    clickEvent: () => testClickEvent(1),
                },

            ],
        };
    };
    return (
        <Container className='ListaOrdenes' >
            <p />
            <Card className="rounded-4">
                <Card.Body>
                    <div className="register-style text-center mb-3">
                        <p>LISTA DE ORDENES</p> </div>
                    <CDBContainer>
                        <CDBCard>
                            <CDBCardBody>
                                <CDBDataTable
                                    striped
                                    bordered
                                    hover
                                    entriesOptions={[5, 20, 25]}
                                    entries={5}
                                    pagesAmount={4}
                                    data={data()}
                                    materialSearch={true}
                                    searchLabel="Search Order"
                                />
                            </CDBCardBody>
                        </CDBCard>
                    </CDBContainer>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ListaOrdenes;