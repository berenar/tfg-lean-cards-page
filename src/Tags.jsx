import React from 'react';
import { Tag } from 'antd';

function Tags(props) {

    return (
        <div className="Tags_container">
            <div>
                <Tag color="success">success</Tag>
                <Tag color="processing">processing</Tag>
                <Tag color="error">error</Tag>
                <Tag color="warning">warning</Tag>
                <Tag color="default">default</Tag>
            </div>
        </div>
    )
}

export default Tags; 