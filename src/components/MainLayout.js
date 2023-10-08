import { Layout } from 'antd';
import logo from '../FE-2-design_favicon.png'
const { Header, Content } = Layout;

function MainLayout() {
    return(
            <Layout>
                <Header>
                    <img src={logo} alt="Logo"/>
                </Header>
                <Content>Content</Content>
            </Layout>
    );
}

export default MainLayout