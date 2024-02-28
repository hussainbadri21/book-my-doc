import React from 'react';
import { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';

const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event......' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
};


const App = ({ onSelect }: { onSelect: (date: Dayjs) => void }) => {

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        return info.originNode;
    };

    const disabledDate = (current: Dayjs) => {
        return !(current.unix() >= parseInt(new Date(Date.now() - (6.048e+8)).getTime() / 1000 as unknown as string) &&
            current.unix() <= parseInt(new Date(Date.now() + (6.048e+8)).getTime() / 1000 as unknown as string))

    };


    return <Calendar cellRender={cellRender} onSelect={onSelect} disabledDate={disabledDate} />;
};

export default App;