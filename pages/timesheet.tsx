import { NextPage } from "next";
import { useState } from "react";
import TimeSlot from "../components/timesheet/timeslot";

export type TimeslotModel = {
    id: number,
    description: string,
    startTime: string,
    endTime: string,
    taskId: number
}

const TimeSheet: NextPage = () => {
    const sampleStart = (new Date).toLocaleString();

    const taskOptions = [
        {id: 1, title: "Task one"},
        {id: 2, title: "Task two"},
        {id: 3, title: "Task three"},
        {id: 4, title: "Task four"},
        {id: 5, title: "Task five"},
    ]

    const [timeslots, setTimeslots] = useState([
        {id: 1, description: "Timeslot 1", startTime: sampleStart, endTime: "", taskId: 1},
        {id: 2, description: "Timeslot 2", startTime: sampleStart, endTime: "", taskId: 1},
        {id: 3, description: "Timeslot 3", startTime: sampleStart, endTime: "", taskId: 1},
        {id: 4, description: "Timeslot 4", startTime: "", endTime: sampleStart, taskId: 2},
        {id: 5, description: "Timeslot 5", startTime: "", endTime: sampleStart, taskId: 2},
        {id: 6, description: "Timeslot 6", startTime: "", endTime: sampleStart, taskId: 2}
    ])

    const [selectedDate, setSelectedDate] = useState(new Date());
    const newTimeslot : TimeslotModel = {id: 0, description: "", startTime: "", endTime: "", taskId: 0};

    return (
        <div>
            <div className="container mx-auto px-4 flex pt-16">
                <div className="w-1/4 border-r-2 border-amber-500 pr-8">
                    <div className="sticky top-0 py-6">
                        <div className="p-4 mb-4 shadow rounded border-b border-stone-100">
                            Day picker
                        </div>
                        <div className="p-4 mb-4 shadow rounded border-b border-stone-100">
                            Current hours for day: <strong>7</strong> hours
                            <br />
                            Total for week: <strong>43.5</strong> hours
                        </div>
                        <div className="p-4 shadow rounded">
                            Weekly task summary
                        </div>
                    </div>
                </div>
                <div className="w-3/4 px-8 pt-8 pb-16 bg-stone-100">
                    <p className="h1 mb-6">Selected day: { selectedDate.toLocaleDateString() }</p>

                    <div className="mb-2">
                        <TimeSlot {...newTimeslot}></TimeSlot>
                    </div>
                    { timeslots && timeslots.map(slot => <TimeSlot {...slot} key={slot.id}></TimeSlot>)}
                </div>
                
            </div>
        </div>
    )
}

export default TimeSheet;