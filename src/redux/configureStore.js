
// đây là cach thuận tiện để cấu hình, lưu trữ, sau đó export nó sang file reducer
// cần import reducer và initialState
import { createStore } from "redux";
import { Reducer , initialState } from "./reducer";


// tạo 1 function có tên ConfigureStore, function này là bắt buộc
// cung cấp 2 tham số là Reducer và initialState cho createStore
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    )

    return store;
    // => khi ai đó gọi ConfigureStore này, nó sẽ cấu hình Redux Store 
    // hãy cập nhật app để sử dụng store này
}