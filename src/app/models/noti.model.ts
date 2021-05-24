import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class Notification{

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
                name: 'Thông báo',
                width: 300,
                type: 'text',
            },
            {
                id: 'CreatedOn',
                name: 'Tạo lúc',
                width: 200,
                type: 'date',
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
    public get collumsSystem(): Array<CollumsModel> {
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
                name: 'Thông báo',
                width: 300,
                type: 'text',
            },
            {
                id: 'CreatedOn',
                name: 'Tạo lúc',
                width: 200,
                type: 'date',
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
            },
            {
                class: 'btn-noti',
                text: 'Thông báo hệ thống',
                type: 'noti',
                icon: ''
            }
        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'title',
                label: 'Tiêu đề',
                name: 'title',
                type: 'text'
            },
            {
                id: 'content',
                label: 'Nội dung',
                name: 'content',
                type: 'textarea'
            }
        ];
    }
}