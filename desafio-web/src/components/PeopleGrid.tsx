import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { IPeople } from "../interfaces/IPeople";
import { Layout, Input } from 'antd';
import { PeopleService } from "../services/PeopleService";
import { useEffect, useState } from "react";
import { ApiExcepion } from "../services/ApiException";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Search } = Input;


const PeopleGrid: React.FC = () => {

  const columns: ColumnsType<IPeople> = [
    
    {
      title: 'Nome',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Sexo',
      width: 50,
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Data de nascimento',
      dataIndex: 'birthday',
      key: 'birthday',
      width: 50,
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      width: 50,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 100,
    },
    {
      title: 'Ações',
      key: 'operation',
      fixed: 'right',
      width: 40,
      render: (_: any, record: IPeople, index: number) =>
          <div>
            <Link to={"/new-people/"+record.id} >
              <Button type="primary" shape="circle" icon={<EditOutlined />}> </Button>
            </Link>  
            &nbsp;&nbsp; 
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
          </div>,
    },
  ];

  const edit = (_: any, record: IPeople, index: number) => {
    
  };

  const [peoples, setPeoples] = useState<IPeople[]>([]);
  useEffect( () => {
    PeopleService.getAll()
    .then((result) => {
      if (result instanceof ApiExcepion) {
        alert(result.message);
      }else{
        setPeoples(result);
      }
    })
  }, []);

  const onSearch = (value: String) => {
    PeopleService.search(value)
    .then((result) => {
      if (result instanceof ApiExcepion) {
        alert(result.message);
      }else{
        setPeoples(result);
      }
    })
  }

  
  const data: IPeople[] = [];

  peoples.forEach((people:IPeople) => {
    data.push(people);
  })

    return (
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }} >
          <Button type="primary" shape="round" style={{float: 'right'}} icon={<PlusCircleOutlined />} >
          <Link to={"/new-people"} style={{color:"white"}} > Novo Cadastro</Link>
          </Button>
          <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 800 }}
          sticky
          title={() => <Search  placeholder="Buscar pessoa" onSearch={onSearch} enterButton />}
          />
      </Content>
      
    );
  };
  
  export default PeopleGrid;