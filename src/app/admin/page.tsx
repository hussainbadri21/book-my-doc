'use client'
import React, { useState } from 'react';
import Calendar from '@/app/components/Calendar';
import ScheduleModal from '@/app/components/ScheduleModal';
import { Dayjs } from 'dayjs';

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs>();

    const onDateSelect = (newValue: Dayjs) => {
        setSelectedDate(newValue);
        setIsModalOpen(true);
    };

    return (
        <div>
            <>
                <Calendar onSelect={onDateSelect} />
                <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} date={selectedDate} />
            </>
        </div>
    );
}

