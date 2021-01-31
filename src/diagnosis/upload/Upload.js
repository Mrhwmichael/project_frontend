import React from 'react';
import 'antd/dist/antd.css';
import Button from "antd/es/button";
import {
    Form,
    Select,
    Rate,
    Checkbox,
    message,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";

const content = (
    <div>
        <p>This aims to improve our model by tracking the evaluation of our model.</p>
        <p>We're following a series of privacy policies and ensures your data security.</p>
    </div>
);

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};


class UploadPage extends React.Component {
    state = {
        imageURL: "",
    };
    handleChange = info => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            this.state.imageURL = info.file.response.path;

        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    handleSubmit = () => {
        fetch('http://localhost:5000/predict',{
            method:'POST',
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
            cache:'default',
            body: this.state.imageURL,
        }).then(res =>res.json())
        .then((data) => {
            console.log(data)

        })
    };

    render() {
        return (
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={this.handleSubmit}
                    initialValues={{
                        ['input-number']: 3,
                    }}
                >
                    <Form.Item label="Project">
                        <span className="ant-form-title">Keratitis Image Recognition via DL system</span>
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="Select Type"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select your image type!' }]}
                    >
                        <Select placeholder="Please select the type of your image">
                            <Option value="prof">Professional Photograph</Option>
                            <Option value="self">Self-made Photograph</Option>
                            <Option value="notsay">Prefer not to say</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="quality"
                        label="Select Quality"
                        hasFeedback
                    >
                        <Select placeholder="Please select the quality of your image">
                            <Option value="high">High</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="low">Low</Option>
                        </Select>
                    </Form.Item>
                    {/*<Form.Item label="InputNumber">*/}
                    {/*    <Form.Item name="input-number" noStyle>*/}
                    {/*        <InputNumber min={1} max={10} />*/}
                    {/*    </Form.Item>*/}
                    {/*    <span className="ant-form-text"> machines</span>*/}
                    {/*</Form.Item>*/}

                    <Form.Item name="switch" label="Share data with us?" valuePropName="checked">
                        <Checkbox />
                    </Form.Item>



                    <Form.Item label="Upload your image">

                        <Dragger  action='http://localhost:5000/upload' accept=".bmp,.png,.jpeg,.jpg,.gif,.webp" onChange={this.handleChange}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single image file(.bmp,.png,.jpeg,.jpg,.gif,.webp)</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item name="rate" label="Rate">
                        <Rate />
                    </Form.Item>

                    <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            wrapperCol={{ span: 12, offset: 6 }}
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                },
                            ]}
                        >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
        )
    }
}

export default UploadPage;

