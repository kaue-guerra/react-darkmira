import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Space } from 'antd';
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';

import api from '../../services/api';
import moment from 'moment';

import './index.css'
import { useHistory } from 'react-router';
import Column from 'antd/lib/table/Column';


interface ISchedule {
    id: number;
    car_plate: string,
    car_owner: string,
    description: string,
    date_schedule: Date,
    hour_schedule: Date,
    status: string,
    service: string
}
interface IService {
    id: number;
    name: string,
    description: string,
    price: number,
    created_at: Date,
    updated_at: Date,
}


const Admin: React.FC = () => {

    const [schedules, setSchedules] = useState<ISchedule[]>([]);
    const [services, setServices] = useState<IService[]>([]);
    const history = useHistory()

    useEffect(() => {

        loadServices()
        loadSchedules()

    }, [])

    async function loadSchedules() {

        const response = await api.get('/schedules')
        setSchedules(response.data);


    }

    async function loadServices() {

        const response = await api.get('/services')
        setServices(response.data);

    }

    function newSchedule() {
        history.push('/atendimento/novo')
    }
    function newService() {
        history.push('/servico/novo')
    }

    function editService(id: number) {
        history.push(`/servico/editar/${id}`)

    }
    function editSchedule(id: number) {
        history.push(`/atendimento/editar/${id}`)

    }
    function formateDate(date: Date) {
        return moment(date).format("DD/MM/YYYY")
    }

    function formateHour(date: Date) {
        return moment(date).format("HH:mm")
    }

    const dataServices = services.map(service => (


        {
            key: service.id,
            name: service.name,
            description: service.description,
            price: service.price,

        }
    ))
    const dataSchedules = schedules.map(schedule => (


        {
            key: schedule.id,
            car_plate: schedule.car_plate,
            car_owner: schedule.car_owner,
            description: schedule.description,
            date_schedule: formateDate(schedule.date_schedule),
            hour_schedule: formateHour(schedule.date_schedule),
            status: schedule.status,
            service: schedule.service,

        }
    ))


    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={18}>
                    <div className="header-table">
                        <h2>Serviços</h2>
                        <Button type="primary" onClick={newService}><PlusCircleOutlined />Novo Serviço</Button>
                    </div>
                    <Table dataSource={dataServices} pagination={{ position: ["bottomLeft"], pageSize: 4, hideOnSinglePage: true }}>
                        <Column title="Nome" dataIndex="name" key="name" />
                        <Column title="Descrição" dataIndex="description" key="description" />
                        <Column title="Preço" dataIndex="price" key="price" />
                        <Column align="center" width="25%" title="Ações" key="action" render={() => (
                            <Space>
                                <Button ><EditOutlined />Editar</Button>
                                <Button><EyeOutlined />Visualizar</Button>
                                <Button danger><DeleteOutlined />Deletar</Button>
                            </Space>
                        )} />
                    </Table>

                    <div className="header-table">
                        <h2>Atendimentos</h2>
                        <Button type="primary" onClick={newSchedule}><PlusCircleOutlined />Novo Atendimento</Button>
                    </div>
                    <Table dataSource={dataSchedules} pagination={{ position: ["bottomLeft"], pageSize: 4, hideOnSinglePage: true }}>
                        <Column title="Placa do carro" dataIndex="car_plate" key="car_plate" />
                        <Column title="Proprietário" dataIndex="car_owner" key="car_owner" />
                        <Column title="Data" dataIndex="date_schedule" key="date_schedule" />
                        <Column title="Hora" dataIndex="hour_schedule" key="hour_schedule" />
                        <Column title="Status" dataIndex="status" key="status" />
                        <Column title="Serviço" dataIndex="service" key="service" />
                        <Column width="20%" align="center" title="Ações" key="action" render={() => (
                            <Space>
                                <Button ><EditOutlined />Editar</Button>
                                <Button><CheckCircleOutlined />Concluir</Button>
                                <Button><EyeOutlined />Visualizar</Button>
                                <Button danger><DeleteOutlined />Deletar</Button>
                            </Space>
                        )} />
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default Admin;