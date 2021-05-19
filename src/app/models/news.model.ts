import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class News {

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


    public get collumsClass(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 20,
                type: 'text',
            },
            {
                id: 'name',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },
            {
                id: 'dob',
                name: 'Ngày sinh',
                width: 50,
                type: 'text',
            },
            {
                id: 'gender',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'class',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'code',
                name: 'Mã học sinh',
                width: 50,
                type: 'text',
            },
            {
                id: 'phone',
                name: 'SĐT phụ huynh',
                width: 50,
                type: 'text',
            },
            {
                id: 'address',
                name: 'Địa chỉ',
                width: 50,
                type: 'text',
            }
            , {
                id: '',
                name: '',
                width: 200,
                type: 'setting',
            },
        ]
    }
}