import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";

export class DocumentModel {

    
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
                id: 'Title',
                name: 'Tên tài liệu',
                width: 200,
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
                data: [
                    {
                      type: 'delete',
                      text:'Xoá',
                      class: 'btn-delete'  
                    }
                ]
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
        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tên tài liệu',
                name: 'Title',
                type: 'text'
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