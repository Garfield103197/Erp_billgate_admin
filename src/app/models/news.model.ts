import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class News{

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'checkbox',
                name: '',
                width: 50,
                type: 'checkbox'
            },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'content',
                name: 'Tiêu đề',
                width: 300,
                type: 'text',
            },
            {
                id: 'Link',
                name: 'Link',
                width: 200,
                type: 'text',
            },
            {
                id: 'create_person',
                name: 'Người tạo',
                width: 200,
                type: 'text',
            },
            {
                id: '',
                name: '',
                width: 200,
                type: 'setting',
            },
        ];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            }
        ];
    }
}