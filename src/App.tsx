// learn that a component can only return one Html element
//learn that to have more then one html element we should nest inside containers such as divs
//we use pascal case convention when creating components(first character is uppercase)
//components are reusable
//use jsx elements which are html elements

function GoogleMeetHeader () {
return (
  <div>
    <p>Mark is learning</p>
    <button>Keep on learning</button>
  </div>
)
}

function Tile({ fullName }: { fullName: string} ) {
  return (
    <div>
      <h5>{fullName}</h5>
    </div>
  )
}

function Tiles() {
  return (
    <section>
      <Tile fullName= "Mark Gitau"/>
      <Tile fullName= "Learn"/>
      <Tile fullName= "Earn"/>
      <Tile fullName= "Return"/>
    </section>
  )
}

function App () {
  return (
    <div>
    <h1>I am blessed and highly favored</h1>
    <GoogleMeetHeader />
    <Tile />
    <Tiles />
    </div>
  )
}

export default App
