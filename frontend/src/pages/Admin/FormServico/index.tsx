import React from 'react';
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
} from 'antd';

interface IService {
    id: number;
    name: string,
    description: string,
    price: number,
    created_at: Date,
    updated_at: Date,
}

const FormServico: React.FC = () => {

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label="Nome">
                <Input />
            </Form.Item>
            <Form.Item label="Descrição">
                <Input />
            </Form.Item>
            <Form.Item label="Price">
                <Input />
            </Form.Item>
            <Form.Item label=" ">
                <Button>Button</Button>
            </Form.Item>
        </Form>
    );
}

export default FormServico;