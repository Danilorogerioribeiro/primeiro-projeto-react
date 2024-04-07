import { v4 as uuid } from "uuid";
import { useState } from "react";

import {
  Container,
  Input,
  Button,
  TudoList,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  const [list, setList] = useState([
    
  ]);
  const [task, setTask] = useState("");

  function inputMudou(event) {
    setTask(event.target.value);
  }

  function cliqueiNoBotao() {
    if(task){
      setList([...list, { id: uuid(), task, finished: false }]);
    }
    
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id == id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }
  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <TudoList>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer ..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isfinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Nao há itens na lista</h3>
          )}
        </ul>
      </TudoList>
    </Container>
  );
}
export default App;
