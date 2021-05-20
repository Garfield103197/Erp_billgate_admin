import { CreateModel } from "./base/create.model";

export class ScheduleModel {
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'date',
                label: 'Ngày áp dụng',
                name: 'title',
                type: 'date'
            },
            {
                id: 'level',
                label: 'Khối',
                name: 'level',
                type: 'selected'
            },
            {
                id: 'class',
                label: 'Lớp',
                name: 'class',
                type: 'selected'
            },
            {
                id: 'file',
                label: 'File',
                name: 'file',
                type: 'upload'
            }
        ];
    }

}