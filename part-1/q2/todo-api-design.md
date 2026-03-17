# Q2 – Todo List REST API Design

## 1. Danh sách API Endpoints

| Method | URL | Mô tả |
|--------|-----|-------|
| `POST` | `/todos` | Tạo todo mới |
| `GET` | `/todos` | Lấy danh sách todo |
| `PUT` | `/todos/:id` | Cập nhật todo theo ID |
| `DELETE` | `/todos/:id` | Xóa todo theo ID |

---

## 2. Example Request Body – Create Todo

```
POST /todos
```

```json
{
  "title": "Read a book",
  "completed": false
}
```

---

## 3. Example Response JSON

### Create Todo → `201 Created`

```json
{
  "id": 2,
  "title": "Read a book",
  "completed": false,
  "createdAt": "2026-03-18T11:00:00.000Z"
}
```

### Get Todo List → `200 OK`

```json
[
  {
    "id": 1,
    "title": "Do homework",
    "completed": true,
    "createdAt": "2026-03-18T10:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Read a book",
    "completed": false,
    "createdAt": "2026-03-18T11:00:00.000Z"
  }
]
```