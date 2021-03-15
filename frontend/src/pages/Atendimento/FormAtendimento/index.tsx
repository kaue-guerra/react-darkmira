import React from 'react';
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
} from 'antd';

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

const FormAtendimento: React.FC = () => {

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label="Placa do veiculo">
                <Input />
            </Form.Item>
            <Form.Item label="Nome do proprietario">
                <Input />
            </Form.Item>
            <Form.Item label="Tipo de atendimento">
                <Cascader
                    options={[
                        {
                            value: 'Troca de oleo',
                            label: 'Troca de oleo',
                        },
                        {
                            value: 'Cambagem',
                            label: 'Cambagem',
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item label="Descrição">
                <Input />
            </Form.Item>
            <Form.Item label="Data do atendimento">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Button">
                <Button>Button</Button>
            </Form.Item>
        </Form>
    );
}

export default FormAtendimento;