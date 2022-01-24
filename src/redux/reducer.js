
export const initialState = {
    dishes: DISHES,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    leaders : LEADERS
};

// Tạo hàm reducer đầu tiên 
// Exportreducer từ đây
// reducer function sẽ nhận dk state hiện tại.
// cần state , 1 action
// đây là 2 tham số sẽ nhận được
// như 1 function thuần túy
// k thể sửa đổi state trực tiếp tại đây trong reducer
// chỉ có thể thực hiện 1 thay đổi bất biến 
// trả về phiển bản cập nhật của state từ reducer này
// chỉ trả lại state mà k sửa đổi state theo bất kỳ cách nào
// chỉ trả lại trạng thái hiện tại từ chức năng reducer
// cần thiết lập reducer vì store cần biết phải làm gì khi một hành động dk thực hiện
// => đay là cách thiết lập hàm reducer của mình
export const Reducer = (state =  initialState, action) => {
    return state;
};
// khi bắt đầu ứng dụng, state của bạn k dk khởi tạo
// bây giờ, khi ứng dụng chạy, bạn muốn khởi tạo sate của bạn đến initialState
// Initialstate chứa 4 thuộc tính     dishes: DISHES, cmt, promo, leaders
// tại sao nó lại nằm trong ứng dụng này ?????
// nơi bạn có thể chỉ định giá trị mặc định cho  1 tham số
// khi store gọi reducer lần đầu tiên , store sẽ k có state => state k dk khởi tạo
// để tránh cách vấn đề xảy ra, nếu trạng thái là k xác định 
// giá trị mặc định sẽ là InitialState đã xđ trước đó
// => đó là những gì sẽ cung cấp cho hàm reducer ở đây
// hiện tại khi ở return , hàm reducer sẽ k làm bất cứ điều gì

