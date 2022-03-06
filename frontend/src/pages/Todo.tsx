import { Box, Fab, Grid } from '@mui/material';
import CardToDo from 'src/components/todo/CardToDo';
import useTodo from 'src/hooks/useTodo';
import AddIcon from '@mui/icons-material/Add';

const Todo: React.FC = () => {
  const { getAllTodos, registerTodo, mutateTodos } = useTodo();
  const { data: todos } = getAllTodos();

  const handleAdd = () => {
    registerTodo({
      title: '新しいToDo',
    }).then((data) => {
      mutateTodos(data);
    });
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {todos?.map((todo) => (
            <Grid key={todo.id} item xs={12}>
              <CardToDo todo={todo} />
            </Grid>
          ))}
        </Grid>

        <Fab
          variant="extended"
          size="medium"
          color="primary"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          onClick={handleAdd}
        >
          <AddIcon />
          追加
        </Fab>
      </Box>
    </>
  );
};

export default Todo;
