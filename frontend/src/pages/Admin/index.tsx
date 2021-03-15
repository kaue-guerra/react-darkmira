import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Space } from 'antd';

import api from '../../services/api';
import moment from 'moment';

import './index.css'
import { useHistory } from 'react-router';


interface ISchedule {
    id: number;
    car_plate: string,
    car_owner: string,
    description: string,
    date_schedule: Date,
    hour_schedule: Date,
    status: string,
    serviceId: number
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

    function formateDate(date: Date) {
        return moment(date).format("DD/MM/YYYY")
    }

    function formateHour(date: Date) {
        return moment(date).format("HH:mm")
    }

    function actions() {
        return (<td>
            <Space>
                <Button>Editar</Button>
                <Button>Concluir</Button>
                <Button>Visualizar</Button>
                <Button>Deletar</Button>
            </Space>
        </td>)
    }

    function newSchedule() {
        history.push('/atendimento/novo')
    }
    function newService() {
        history.push('/servico/novo')
    }

    const columnsServices = [
        {
            title: 'Nome',
            dataIndex: 'name',
            width: '25%',
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            width: '25%',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            width: '25%',
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            width: '15%',
        },
    ];

    const columnsSchedules = [
        {
            title: 'Placa do carro',
            dataIndex: 'car_plate',
            width: '10%',
        },
        {
            title: 'Proprietário',
            dataIndex: 'car_owner',
            width: '15%',
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            width: '20%',
        },
        {
            title: 'Data',
            dataIndex: 'date_schedule',
            width: '10%',
        },
        {
            title: 'Hora',
            dataIndex: 'hour_schedule',
            width: '10%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '10%',
        },
        {
            title: 'Serviço',
            dataIndex: 'serviceId',
            width: '10%',
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            width: '20%',
        },
    ];

    const dataSchedules = schedules.map(schedule => (


        {
            key: schedule.id,
            car_plate: schedule.car_plate,
            car_owner: schedule.car_owner,
            description: schedule.description,
            date_schedule: formateDate(schedule.date_schedule),
            hour_schedule: formateHour(schedule.date_schedule),
            status: schedule.status,
            serviceId: schedule.serviceId,
            actions: actions(),

        }
    ))
    const dataServices = services.map(service => (


        {
            key: service.id,
            name: service.name,
            description: service.description,
            price: service.price,
            actions: actions(),

        }
    ))


    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={18}>
                    <div className="header-table">
                        <h2>Serviços</h2>
                        <Button type="primary" onClick={newService}>Novo Serviço</Button>
                    </div>
                    <Table columns={columnsServices} dataSource={dataServices} pagination={{ position: ["bottomCenter"], pageSize: 4, hideOnSinglePage: true }} />
                    <div className="header-table">
                        <h2>Atendimentos</h2>
                        <Button type="primary" onClick={newSchedule}>Novo Atendimento</Button>
                    </div>
                    <Table columns={columnsSchedules} dataSource={dataSchedules} pagination={{ position: ["bottomCenter"], pageSize: 4, hideOnSinglePage: true }} />
                </Col>
            </Row>
        </div>
    );
}

export default Admin;