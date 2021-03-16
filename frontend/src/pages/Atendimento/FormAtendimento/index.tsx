import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
    Row,
    Col,
    Cascader,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

interface IService {
    id: number;
    name: string,
    description: string,
    price: number,
    created_at: Date,
    updated_at: Date,
}


const FormAtendimento: React.FC = () => {

    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {

        loadServices()

    }, [])



    const history = useHistory()

    function back() {
        history.goBack()
    }

    async function onFinish(values: any) {

        const response = await api.post('schedules', values)
        back();
    };

    async function loadServices() {
        const response = await api.get('/services')
        setServices(response.data);
    }

    const dataServices = services.map(service => (


        {
            value: service.id,
            label: service.name,

        }))

    return (
        <Row justify="space-around" align="middle">
            <Col span={8}>
                <div className="header-form">
                    <h2>Novo Serviço</h2>
                    <Button type="ghost" onClick={back} ><RollbackOutlined />Voltar</Button>
                </div>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name={['car_plate']} label="Placa do veiculo" rules={[{ required: true, type: 'string', message: "Digite a placa do veiculo" }]} shouldUpdate >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['car_owner']} label="Nome do proprietario" rules={[{ required: true, type: 'string', message: "Digite o nome do proprietario" }]} shouldUpdate >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['service']} label="Tipo de atendimento" rules={[{ required: true, type: 'string', message: "Escolha o tipo de atendimento" }]} shouldUpdate >
                        <Cascader options={dataServices} />
                    </Form.Item>
                    <Form.Item name={['description']} label="Descrição" rules={[{ required: true, type: 'string', message: "Digite a descrição do serviço" }]} shouldUpdate >
                        <Input />
                    </Form.Item>
                    <Form.Item name="date_schedule" label="Data e hora" rules={[{ required: true, type: 'date', message: "Selecione a data e hora que deseja marcar" }]} shouldUpdate >
                        <DatePicker showTime format="DD-MM-YYYY HH:mm" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >Salvar</Button>
                    </Form.Item>
                </Form>

            </Col>
        </Row>
    );
}

export default FormAtendimento;