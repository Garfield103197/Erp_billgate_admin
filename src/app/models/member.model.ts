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
                type: 'stt'
            },
            {
                id: 'FullName',
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
                id: 'Gender',
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
                id: 'Address',
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
                id: 'FullName',
                label: 'Họ và tên',
                name: 'FullName',
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
                id: 'Gender',
                label: 'Giới tính',
                name: 'Gender',
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
                id: 'ClassName',
                label: 'Lớp',
                name: 'ClassName',
                type: 'text'
            },            {
                id: 'StudentCode',
                label: 'Mã học sinh',
                name: 'StudentCode',
                type: 'text'
            },
            {
                id: 'Address',
                label: 'Địa chỉ',
                name: 'Address',
                type: 'textarea'
            }

        ];
    }

}