let todoList = [
    {
      id: 1,
      title: "Lam bai tap ve nha JSI03",
      completed: false,
    },
    {
      id: 2,
      title: "Lam bai tap toan tren lop",
      completed: false,
    },
    {
      id: 3,
      title: "Rua bat",
      completed: false,
    },
    {
      id: 4,
      title: "Quet nha",
      completed: true,
    },
    {
      id: 5,
      title: "Lau nha",
      completed: false,
    },
  ];

  var todoListBox= document.querySelector("#todoList")
  const renderTodoList = ()=> {
    todoList.forEach(elem)
  }