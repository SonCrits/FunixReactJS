import { DISHES } from '../shared/dishes';

// khai báo hàm dishes lấy tham só là state = dishes và action
// triển khai switch , gán action.type => kích hoạt action.type
// chưa có action nào, nên chỉ có default.
//  vs default => return state và sửa đổi nó từ đây


// => nếu state k dk xác định, bạn cung cấp giá trị khởi tạo hoặc DISHES
// sau đó return state , vì vậy dishes sẽ dk return mặc định như nó vốn có
// nếu k thay đổi j,  => tất cả những gì dk yêu cầu để dk return từ file dishes.js

export const Dishes = (state = DISHES , action) => {
    switch(action.type) {
        default :
            return state;
    }
}
