import {Layout, Menu} from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.jpg';
import './About.css'
import {Typography, Divider} from 'antd';


const {Header, Content, Footer, Sider} = Layout;

const {Title, Paragraph, Text} = Typography;

class AboutText extends React.Component {
    render() {
        return (
            <Typography class={"topography"}>
                <Title>Introduction to our project</Title>
                <Title level={2}>Background</Title>
                <Paragraph>
                    Keratitis is one of the common ophthalmic diseases, and one of the main blinding eye diseases. The
                    cornea is in the front of the eyeball. It contacts with the outside world directly, so it is easy to
                    be damaged by microorganisms, trauma and physical and chemical stimulation factors and cause
                    inflammation. The diagnosis of keratitis is complex since it should be made by corneal specialists
                    according to the history, clinical manifestations, eye signs and related auxiliary examinations.
                    Moreover, in rural regions, ophthalmologists are very scarce, which makes the diagnosis of keratitis
                    even harder. In this project, the primary task is to <Text strong>develop a model that relies only
                    on the image
                    of the cornea and give a primary diagnosis based on machine learning </Text>. Moreover, a web
                    system will also be developed to provide an easy-to-use interface.
                </Paragraph>

                <Divider/>

                <Title level={2}>Tasks</Title>
                Based on the background mentioned above, the project includes these following tasks:
                <Title level={3}>1. Study the state-of-the-art techniques on classification of ocular infection
                    types</Title>
                The first goal is to study state-of-the-art papers and current progress of image classification. Among
                the various deep learning based neural networks, Convolutional Neutral Networks (CNNs) are the most
                widely used networks. It is necessary to learn how the CNN model implement the image classification
                task. I will learn how the different layers contribute to the performance of the network. Also, I will
                read relevant papers that analyse the improvements and variation of CNN model such like ResNet and
                attention network, which can be useful in my model. This will be the foundation for the development of
                my own model.
                <Title level={3}>2. Develop deep learning based techniques to classify ocular infection types</Title>
                With the image classification methods I’ve learnt, I will be able to design a system that fits the
                Keratitis diagnosis. In this scenario, the training dataset, provided by Beijing TongRen Hospital, shows
                4 types of diseases based on the diagnosis record of patients over the past 30 years, which is bacterial
                keratitis, fungal keratitis, viral keratitis and Acanthamoeba keratitis. These four types of keratitis
                are similar in clinical diagnosis, so my aim is to design a model to improve the diagnostic performance
                by adopting machine learning methods.

                With the images as input, I will compare the performance of several existing CNN model in our dataset.
                After that, by combining the features of these models, I will modify the model and enhance the accuracy
                of the algorithm. I will choose state-of-the-art techniques like ResNet or Inception and adjust the
                params and layers to enhance its performance of accuracy. Also, the result can be improved by various of
                image pre-processing methods like normalization and Gaussian Blur. I will also adopt five-fold training
                method to verify the result of the model. The goal of this task is to provide a deep learning based
                algorithm that suits best in our dataset.

                <Title level={3}>3. Evaluate performance of the developed algorithms</Title>
                The goal is to provide a system that can provide the diagnosis with the image as input and the
                classification result as output, so the accuracy is the most critical performance measurement. By using
                error rate and accuracy as an objective evaluation method, the performance of the system can be judged.
                Also, a heat map (Grad CAM++) can be used to generate a result showing which part that the model is
                focusing.

                Apart from the judgement of the model itself, the comparison of accuracy between the model and
                ophthalmologists is also worth discussing in the evaluation of the diagnostic accuracy of my system.

                <Title level={3}>4. Develop a website to demonstrate the system</Title>
                To visualize my model and develop a client for my potential users (doctors or patients), I will utilize
                a frontend website to let the user upload the data and get the analysis result. I want to use my
                well-trained model with fine-tuned params to help identify the diseases and referral to medical centres.

                The frontend will be designed via React framework and it can send requests while the backend analyse the
                image by running the model and return the result. The system should have an easy-use interface and
                durable for users to use. This system will be finished at the end of the project.


                <Title level={2}>REFERENCES</Title>
                [1] Saini, J. S. et al. Neural network approach to classify infective keratitis. Curr. Eye Res. 27,
                111–116 (2003).<br/>

                [2] Whitcher, J. P., Srinivasan, M. & Upadhyay, M. P. Corneal blindness: A global perspective. Bull.
                World Health Organ. 79, 214–221
                (2001).<br/>

                [3] He, K., Zhang, X., Ren, S. & Sun, J. Deep residual learning for image recognition. IEEE CVPR
                770–778, https://doi.org/10.1109/CVPR.2016.90 (2016)<br/>

                [4] Huang, G., Liu, Z., Maaten, L.V.D. & Weinberger, K.Q. Densely connected convolutional networks. IEEE
                CVPR 2261–2269, https://doi.org/10.1109/CVPR.2017.243 (2017).<br/>

                [5] Selvaraju, R.R. et al. Grad-CAM: visual explanations from deep networks via gradient-based
                localization. 2017 IEEE International Conference on Computer Vision (ICCV) 618–626,
                https://doi.org/10.1109/ICCV.2017.74 (2017).<br/>

                [6] Ming‑Tse Kuo, Benny Wei‑Yun Hsu, Yu‑Kai Yin, Po‑Chiung Fang, Hung‑Yin Lai, Alexander Chen, Meng‑Shan
                Yu1 & Vincent S. Tseng. A deep learning approach in diagnosing fungal keratitis based on corneal
                photographs. https://doi.org/10.1038/S41598-020-71425-9 (2020)<br/>


            </Typography>
        )
    }
}

class About extends Component {

    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (

            <Layout>

                <Sider>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                        <Menu.Item key="1"><a href={"#/nav"}>Diagnosis</a></Menu.Item>
                        <Menu.Item key="2"><a href={"#/intro"}>Model introduction</a></Menu.Item>
                        <Menu.Item key="3"><a href={"#/about"}>About us</a></Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{background: '#000', padding: 0}}>

                        <a href={"#/"}>
                            <span style={{color: '#fff', paddingLeft: '2%', fontSize: '1.4em'}}>
                            Keratitis Diagnosis System
                            </span>
                        </a>
                        <span style={{color: '#fff', float: 'right', paddingRight: '1%'}}>
                            <a href={"https://www.bupt.edu.cn/"}>
                                <img src={logo} className="logo"/>
                            </a>
                        </span>
                    </Header>
                    <Content style={{margin: '0 16px'}}>

                        <div style={{padding: 24, background: '#fff', minHeight: 780}}>
                            <AboutText/>
                        </div>

                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Created by <a href={"https://mrhwmichael.github.io/"}>Haoyu Wang</a> in BUPT.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default About;