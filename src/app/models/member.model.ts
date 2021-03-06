import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class MemberModel {

    
    public get collums(): Array<CollumsModel> {
        return [

            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text'
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'date',
            },

            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'StudentId',
                name: 'StudentId',
                width: 100,
                type: 'text',
            },
            {
                id: 'ParentPhone',
                name: 'SĐT phụ huynh',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
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
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên',
                name: 'LastName',
                type: 'text'
            },
            {
                id: 'ParentPhone',
                label: 'SĐT phụ huynh',
                name: 'ParentPhone',
                type: 'text'
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date',
            },
            {
                id: 'GenderString',
                label: 'Giới tính',
                name: 'GenderString',
                type: 'selected',
                data: [
                    {
                      value: 1,
                      name: "Nam"  
                    },
                    {
                        value: 2,
                        name: "Nữ"  
                      }
                ]
            },
            {
                id: 'ClassId',
                label: 'Lớp',
                name: 'ClassId',
                type: 'disableSelected',
                data: []
            },            {
                id: 'Code',
                label: 'Mã học sinh',
                name: 'Code',
                type: 'text'
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea'
            }

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
                class: 'btn-save',
                text: 'Lưu',
                type: 'save',
                icon: 'assets/svg/icon-save.svg'
            },
            {
                class: 'btn-upload',
                text: 'Nhập',
                type: 'upload',
                icon: 'assets/svg/icon-upload.svg',
            }
        ];
    }
}