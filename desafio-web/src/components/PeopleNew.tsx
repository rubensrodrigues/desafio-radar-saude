import { Button, Form, Input, InputNumber, Result, Select } from "antd";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPeople } from "../interfaces/IPeople";
import { ApiExcepion } from "../services/ApiException";
import { PeopleService } from "../services/PeopleService";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const PeopleNew: React.FC = () => {

    const{ id } = useParams();
    const [people, setPeople] = useState<IPeople>();
  
    useEffect( () => {
    PeopleService.findById(Number(id))
    .then((result) => {
      if (result instanceof ApiExcepion) {
        alert(result.message);
      }else{
        setPeople(result);
      }
    })
  }, []);

  console.log(people)

    const onFinish = (values: any) => {
        PeopleService.create(values.people).then((result) => {
            if (result instanceof ApiExcepion) {
                alert(result.message);
              }else{
                alert("Criado com Sucesso!");
              }
        });
      };
    
      return (
        <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }} >

        <Form {...layout} name="nest-messages" onFinish={onFinish} >
          <Form.Item name={['people', 'name']} label="Nome" rules={[{ required: true }]} >
            <Input defaultValue={people?.name} />
          </Form.Item>
          <Form.Item name={['people', 'gender']} label="Sexo">
            <Select>
                <Select.Option value="FEMALE">Feminino</Select.Option>
                <Select.Option value="MALE">Masculino</Select.Option>
            </Select>
        </Form.Item>
          <Form.Item name={['people', 'birthday']} label="Data de aniversário" >
            <Input defaultValue={people?.birthday} />
          </Form.Item>
          <Form.Item name={['people', 'phone']} label="Telefone">
            <Input  defaultValue={people?.phone} />
          </Form.Item>
          <Form.Item name={['people', 'email']} label="Email" rules={[{ type: 'email' }]} >
            <Input defaultValue={people?.email} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
            &nbsp;&nbsp; 
            <Button >
                <Link to={"/"} > Voltar</Link>
            </Button>
          </Form.Item>
        </Form>
        </Content>
      );
};

export default PeopleNew;
