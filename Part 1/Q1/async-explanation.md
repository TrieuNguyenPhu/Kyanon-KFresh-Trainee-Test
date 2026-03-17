console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output:
```
Start
End
Promise
Timeout
```

---

### Tại sao lại theo thứ tự đó?

JavaScript chạy theo mô hình single-threaded với Event Loop. Có 3 hàng chờ theo thứ tự:

1. Call Stack (đồng bộ)
- Chạy ngay lập tức, không chờ ai
- `console.log("Start")` in "Start"
- `console.log("End")` in "End"

2. Microtask Queue (Promise)
- Sau khi Call Stack trống, Event Loop kiểm tra Microtask Queue trước tiên
- `Promise.resolve().then(...)` được đẩy vào đây
- in "Promise"

3. Macrotask Queue (setTimeout, setInterval)
- Chỉ chạy sau khi Microtask Queue đã trống hoàn toàn
- `setTimeout(..., 0)` dù delay = 0ms vẫn phải chờ
- in "Timeout"

---
```