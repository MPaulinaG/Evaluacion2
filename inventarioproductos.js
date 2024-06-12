
let inventario = {
    productos: []
  };
 
  function agregarProducto(nombre, precio, cantidad) {
    inventario.productos.push({ nombre, precio, cantidad });
  }

  function listarProductos() {
    alert("Productos en el inventario");
    inventario.productos.forEach(producto => {
      alert(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
    });
  }

  function totalInventario() {
    let total = 0;
    inventario.productos.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    
  }

  agregarProducto("Producto 1", 10, 5);
  agregarProducto("Producto 2", 20, 3);
  listarProductos();
  alert("Valor total del inventario:", totalInventario());
  