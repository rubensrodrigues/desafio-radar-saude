import "antd/dist/antd.css";
import { PageHeader } from 'antd';


const PeopleTitleHeader: React.FC = () => {

    return(
        <PageHeader
        className="site-page-header"
        title="Desafio Radar Saúde"
        style={{
            background: "#A5ACDA",
            color:"white"
        }}
        />
    );
};

export default PeopleTitleHeader;

