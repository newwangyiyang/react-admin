import React, { FC, useState } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Col, Row } from 'antd';

import styles from './index.module.scss';
const OthersView: FC = () => {
	const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

	return (
		<Row gutter={16}>
			<Col span={24}>
				<div className={styles['base-style']}>
					<p>
						<span>当用户需要一些特定输入时，此页面使用的富文本编辑器是</span>
						<a href="https://github.com/margox/braft-editor">braft-editor</a>
					</p>
				</div>
			</Col>
			<Col span={24}>
				<div className={styles['base-style']}>
					<BraftEditor
						value={editorState}
						onChange={setEditorState}
						// onSave={setEditorState}
					/>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<p>输出内容</p>
					<p>{editorState.toHTML()}</p>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<p>预览效果</p>
					<p dangerouslySetInnerHTML={{ __html: editorState.toHTML() }} />
				</div>
			</Col>
		</Row>
	);
};

export default OthersView;
