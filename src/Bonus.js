import React from "react";

const products = [
  { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5 },
  { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0 },
  { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10 },
  { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2 },
];

function Bonus() {
  return (
    <div style={{ padding: "20px" }}>
      {/*  hiển thị danh sách sản phẩm kèm trang thái còn hàng hay hết hàng */}
      <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
      <table
        style={{
          borderCollapse: "collapse",
          padding: "10px",
          margin: "0 auto",
          width: "50%",
          textAlign: "center",
        }}
        border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.inputPrice}</td>
              <td>{p.outPrice}</td>
              <td>{p.stock > 0 ? "còn hàng" : "hết hàng"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*  tìm và hiển thị tên sản phẩm có giá bán lớn nhất và giá bán nhỏ nhất */}
      <h2 style={{ textAlign: "center" }}>
        Sản phẩm có giá bán lớn nhất và nhỏ nhất
      </h2>
      <div style={{ textAlign: "center" }}>
        <p>
          Sản phẩm có giá bán lớn nhất:
          {
            products.find(
              (p) =>
                p.outPrice === Math.max(...products.map((p) => p.outPrice)),
            )?.name
          }
        </p>
        <p>
          Sản phẩm có giá bán nhỏ nhất:
          {
            products.find(
              (p) =>
                p.outPrice === Math.min(...products.map((p) => p.outPrice)),
            )?.name
          }
        </p>
      </div>
      {/* Sắp xếp danh sách sản phẩm theo lợi nhuận giảm dần (hoặc tăng dần) */}
      <h2 style={{ textAlign: "center" }}>
        Danh sách sản phẩm theo lợi nhuận giảm dần
      </h2>
      <table
        style={{
          borderCollapse: "collapse",
          padding: "10px",
          margin: "0 auto",
          width: "50%",
          textAlign: "center",
        }}
        border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Trạng thái</th>
            <th>Lợi nhuận</th>
          </tr>
        </thead>
        <tbody>
          {[...products]
            .sort(
              (a, b) => b.outPrice - b.inputPrice - (a.outPrice - a.inputPrice),
            )
            .map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.inputPrice}</td>
                <td>{p.outPrice}</td>
                <td>{p.stock > 0 ? "còn hàng" : "hết hàng"}</td>
                <td>{p.outPrice - p.inputPrice}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Bonus;
