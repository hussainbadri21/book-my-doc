import React from 'react';
import { Dayjs } from 'dayjs';
import { Modal } from 'antd';

const ScheduleModal = (
    { isOpen, onClose, date }:
        { isOpen: boolean, onClose: () => void, date: Dayjs | undefined }) => {
    return (
        <Modal title={`Modify slots for ${date?.format('DD-MM-YYYY')}`} open={isOpen} onCancel={onClose}>
            <div>Date Selected : {date?.format('DD-MM-YYYY')}</div>
        </Modal>
    )
}

export default ScheduleModal;