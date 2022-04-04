import React from 'react';
import { Modal } from 'antd';

export const MetaplexModal = (props: any) => {
  const { children, bodyStyle, className, ...rest } = props;

  return (
    <Modal
      bodyStyle={{
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',

        ...bodyStyle,
      }}
      className={`modal-box small-modal ${className}`}
      footer={null}
      width={500}
      {...rest}
    >
      {children}
    </Modal>
  );
};
