import {CheckIcon, XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { TimeslotModel } from "../../pages/timesheet";

const handleSave = (e:any) => {
    alert("bing");
}

const handleDiscard = (e:any) => {
    alert("bong");
}

const handleDelete = (e:any) => {
    alert("Delete");
}

const TimeSlot = (timeslot: TimeslotModel | null) => {
    return (
        <div className="p-6 border-b border-stone-100 bg-white flex items-center">
            <input type="hidden" name="id" value={timeslot?.id}/>
            <select name="taskId"  className="mr-2" defaultValue={timeslot?.taskId}>
                <option value="">Select task</option>
                <option value="1">Task 1</option>
                <option value="2">Task 2</option>
                <option value="3">Task 3</option>
            </select>
            <input type="text" name="description" className="mr-2" defaultValue={timeslot?.description}/>
            <input type="time" name="starttime" className="ml-auto mr-2" defaultValue={timeslot?.startTime}/>
            <input type="time" name="endtime" className="mr-2" defaultValue={timeslot?.endTime}/>

            <div className="flex">
                <button name="Save" className="btn__icon-only btn__outline text-teal-500 border-teal-500 hover:bg-teal-500">
                    <CheckIcon className="h-6 w-6"></CheckIcon>
                </button>
                <button name="Discard" className="btn__icon-only btn__outline border-rose-600 text-rose-600 hover:bg-rose-500">
                    <XMarkIcon className="h-6 w-6 "></XMarkIcon>
                </button>
                <button name="Delete" className="btn__icon-only btn__outline border-rose-600 text-rose-600 hover:bg-rose-500">
                    <TrashIcon className="h-6 w-6"></TrashIcon>
                </button>
            </div>
        </div>
    );
}

export default TimeSlot;