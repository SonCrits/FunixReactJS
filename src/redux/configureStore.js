
import { createStore, combineReducers } from "redux";
import { Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';


// tạo 1 function có tên ConfigureStore, function này là bắt buộc
// cung cấp 2 tham số là Reducer và initialState cho createStore
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    )
    return store;
    // => khi ai đó gọi ConfigureStore này, nó sẽ cấu hình Redux Store 
    // hãy cập nhật app để sử dụng store này
}