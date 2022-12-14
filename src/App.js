import React, { Component } from 'react';
import Main from './components/Main';
import Table from 'react-bootstrap/Table';

const productsData = [
  {"id": 1,"name": "MacBook","price": 100.999,"left": 31,"image": "http://intocode.ru/d/react-project-1/images/1.jpg",
  },
  {"id": 2,"name": "Galaxy","price": 35.999,"left": 11,"image": "http://intocode.ru/d/react-project-1/images/2.jpg",
  },
  {"id": 3,"name": "Скутер","price": 65.599,"left": 0,"image": "http://intocode.ru/d/react-project-1/images/3.jpg",
  },
  {"id": 4,"name": "Монитор Samsung","price": 12.999,"left": 7,"image": "http://intocode.ru/d/react-project-1/images/4.jpg",
  },
  {"id": 5,"name": "Респераторная маска","price": 500,"left": 24,"image": "http://intocode.ru/d/react-project-1/images/5.jpg",
  },
  {"id": 6,"name": "Стиральная машина","price": 100.999,"left": 0,"image": "http://intocode.ru/d/react-project-1/images/6.jpg",
  },
  {"id": 7,"name": "Белый холодильник","price": 43.199,"left": 18,"image": "http://intocode.ru/d/react-project-1/images/7.jpg",
  },
  {"id": 8,"name": "Колонка","price": 3000,"left": 1,"image": "http://intocode.ru/d/react-project-1/images/8.jpg",
  },
  {"id": 9,"name": "Наушники","price": 1500,"left": 5,"image": "http://intocode.ru/d/react-project-1/images/9.jpg",
  },
];






class App extends Component {
  render() {
    return (
  <Table striped bordered hover variant="dark">
   <thead>
     <tr>
       <th>ID</th>
       <th>Название</th>
       <th>Цена</th>
       <th>Осталось</th>
       <th>Постер</th>
       <th>Кнопка</th>
     </tr>
   </thead>
   {productsData.map(item => <Main id={item.id} name={item.name} price={item.price} left={item.left} image={item.image} />)}
   </Table>
    );
  }
}

export default App;