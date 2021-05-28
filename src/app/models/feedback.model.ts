import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class Feedback {

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Title',
                name: 'Tiêu đề',
                width: 300,
                type: 'text',
            },
            {
                id: 'Description',
                name: 'Nội dung',
                width: 300,
                type: 'text',
            },
            {
                id: 'CreatedByName',
                name: 'Người tạo',
                width: 200,
                type: 'text',
            },
            // {
            //     id: '',
            //     name: '',
            //     width: 200,
            //     type: 'setting',
            // },
        ];
    }

}