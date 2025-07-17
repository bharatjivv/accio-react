import './App.css'
import Card from './components/Card.jsx';

function App() {

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Card 
        img="https://imgs.search.brave.com/u2bflHAnk1JGAHWyUBvmXKE_-84Y_Ec3a4rmybH2qKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yNjkv/MTk2L0hELXdhbGxw/YXBlci1hbmRyZXct/dGF0ZS10aHVtYm5h/aWwuanBn"
        title="Top G"
        description="Top G in a buggati"
        />
        <Card 
        img="https://imgs.search.brave.com/kWBQVaxrOANLs3DwFWHxKx1XAZ9cpZUAGTejpMeKwnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci85OTQv/NDQzL0hELXdhbGxw/YXBlci1hbmRyZXct/dGF0ZS10aHVtYm5h/aWwuanBn"
        title="Andrew Tate"
        description="My unmatched perspicacity"
        />
        <Card 
        img="https://imgs.search.brave.com/vy4RQBN24ahGl7Xukyr8giivQDgMre02Vuj0l1wbvsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYW5kcmV3/dGF0ZXF1b3Rlcy5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDcvYW5kcmV3/LXRhdGUtY2FyLXdh/bGxwYXBlci03Lndl/YnA_cmVzaXplPTEw/MjQsNTc2JnNzbD0x"
        title="Cobra Tate"
        description="sheer indefatigability."
        />
      </div>      
    </>
  )
}

export default App
