import React from 'react';
import './App.css'
import Card from './components/Card';

// const students = ['Omraj', 'Shyamraj', 'Nitin', 'Jatin', 'Riya', 'Sneha', 'Tushar'];

const dataTopG = [
  {
    img: "https://imgs.search.brave.com/NFLXmJxIY5GZmwIqxaCesNDQqc_81bc8fdnInSstMRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M1Lzc3/Lzg3L2M1Nzc4Nzg4/MWQxYWMwMmE4NDE2/MDk5ODA3YWRjNWZm/LmpwZw",
    title: "Cobra Tate Podcast",
    desc: "Andrew Tate speaking passionately on a podcast—capturing his intense charisma.",
    isFav: true
  },
  {
    img: "https://imgs.search.brave.com/RwgkXMjBWYlwk1a7GwT8XM8KTuVXLjZk5zsfkIaZqYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9lZGl0b3Jp/YWwvaW1hZ2UtZWRp/dG9yaWFsL001VGRN/NTUxTzBENWdlNDhO/RGd6TXprPS90cmlz/dGFuLXRhdGUtYy1o/aXMtYnJvdGhlci1h/bmRyZXctbC00NDBu/dy0xMzg2NDgzMWsu/anBn",
    title: "Arrival in the US",
    desc: "Tate arriving in the US with his brother, smiling after Romania lifted their travel ban.",
    isFav: true
  },
  {
    img: "https://imgs.search.brave.com/rigoBGjJ0uXOQqdf3EKETWCv1zfVH4i01ov_fjKB4bM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/OWxoaXZscG9zNmZY/OHZobmxlUFFwbzZK/aVBFPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNzQ5/eDA6NzUxeDIpL2Fu/ZHJldy1hbmQtdHJp/c3Rhbi10YXRlLTMt/MDMyMDI1LTRkN2Fj/OGUwZjFkNjRmMDVh/YTE1MDQxNzRiODQ1/MTY4LmpwZw",
    title: "Facing the Press",
    desc: "Andrew Tate and his brother Tristan facing cameras during a high-profile court appearance.",
    isFav: true

  },
  {
    img: "https://imgs.search.brave.com/kdDAD_gR7ZfyhxK68fuOJq2vDcBmZoNnmMiyAPBOJKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMy4z/NjVkbS5jb20vMjUv/MDIvNzY4eDQzMi9z/a3luZXdzLWFuZHJl/dy10YXRlLXRyaXN0/YW4tdGF0ZV82ODQx/MDc2LmpwZz8yMDI1/MDIyNzA3NTAzMg",
    title: "Expressive Gesture",
    desc: "Tate making a point emphatically during a media briefing in Florida.",
    isFav: false
  },
  {
    img: "https://imgs.search.brave.com/7o0ssgtf8ABeyHXLbURMDlKMt1z4NBF3Dg0QIrcvhDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbmRy/ZXctdHJpc3Rhbi10/YXRlLXRyaWFsLWJ1/Y2hhcmVzdC1yb21h/bmlhLXN0LWp1bmUt/aGlzLWJyb3RoZXIt/c3Vycm91bmRlZC1i/b2R5Z3VhcmRzLWxl/YXZlLWNvdXJ0LTI4/Njk5NTA3Mi5qcGc",
    title: "Shirtless on the Beach",
    desc: "Andrew Tate showing off his physique and tattoos in a laid‑back beach moment.",
    isFav: false
  },
    {
    img: "https://imgs.search.brave.com/RJ2fMcplWxqY3yg06ReH1IbZ657GPgjC5o1h1Nrh5j8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMy9UcmlzdGFu/LVRhdGUtaW1hZ2Uu/anBn",
    title: "Bugatti Hustle",
    desc: "The iconic Bugatti — a symbol of the rewards of hustle and smart work.",
    isFav: true
  }
];


function App() {
  return (
    <>
     <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-evenly', gap: '16px'}}>
        {/* 
        // rendering manually
        <p>{students[0]}</p>
        <p>{students[1]}</p>
        <p>{students[2]}</p>
        <p>{students[3]}</p>
        <p>{students[4]}</p>
        <p>{students[5]}</p>
        <p>{students[6]}</p> */}
        {
          // rendering through map
          // students.map((student, index) =>  <p key={index}>{student}</p>)
        }
        {
        // <Card />
        dataTopG.map((data, index) => {
          return (
            <Card key={index}
            img= {data.img}
            title = {data.title}
            description = {data.desc}
            isFav = {data.isFav}
            />
          )
        })
        }

     </div>
    </>
  )
}

export default App
