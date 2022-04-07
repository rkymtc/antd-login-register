import React from "react";

import "antd/dist/antd.css";

import { Modal, Button } from "antd";
import Draggable from "react-draggable";
import { Tabs } from "antd";
import Login from "./Login";
import Register from "./Register";

class Index extends React.Component {
  state = {
    visible: false,
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 }
  };

  draggleRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = this.draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    this.setState({
      bounds: {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y)
      }
    });
  };

  render() {
    const { TabPane } = Tabs;
    const { bounds, disabled, visible } = this.state;
    return (
      <>
        <Button onClick={this.showModal}>Login/Register</Button>
        <Modal footer={null}
          title={
            <div
              style={{
                width: "75%",
                cursor: "move"
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              <Tabs defaultActiveKey="2">
                <TabPane tab={<span>Register</span>} key="1">
                  <Login />
                </TabPane>
                <TabPane tab={<span>Login</span>} key="2">
                  <Register />
                </TabPane>
              </Tabs>
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        ></Modal>
      </>
    );
  }
}

export default Index