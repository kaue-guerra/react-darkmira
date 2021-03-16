import React from 'react';
import { useHistory } from 'react-router-dom'

import {
    Form,
    Input,
    Button,
    Row,
    Col,
} from 'antd';
import api from '../../../services/api';
import './index.css'
import { RollbackOutlined } from '@ant-design/icons';




const FormServico: React.FC = () => {

    const history = useHistory()

    function back() {
        history.goBack()
    }

    async function onFinish(values: any) {

        const response = await api.post('services', values)
        back();
    };



    return (

        <div>
            <Row justify="space-around" align="middle">
                <Col span={8}>
                    <div className="header-form">
                        <h2>Novo Serviço</h2>
                        <Button type="ghost" onClick={back}><RollbackOutlined />Voltar</Button>
                    </div>
                    <Form layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
                        <Form.Item name={['name']} label="Nome" rules={[{ required: true, type: 'string', message: "Digite o nome" }]} shouldUpdate >
                            <Input />
                        </Form.Item>
                        <Form.Item name={['description']} label="Descrição" rules={[{ required: true, type: 'string', message: "Digite a descrição" }]} shouldUpdate>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['price']} label="Preço" rules={[{ required: true, message: "Digite o preço" }]} shouldUpdate>
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" >Salvar</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default FormServico;