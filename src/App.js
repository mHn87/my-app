import { Button } from '@material-ui/core'
import { Person } from '@material-ui/icons';


function App() {
  return (
    <div>
      <Button variant="outlined" color="secondary" startIcon={<Person/>}>
        سلام
      </Button>
    </div>
    

  );
}

export default App;
