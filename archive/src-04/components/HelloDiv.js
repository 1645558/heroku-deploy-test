// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  return (
    <div className="container">
      <h1>Hello! My name is Connor.</h1>
      <ul className="parent">
        <h3>My interests:</h3>
        <li>Software Development</li>
        <li>Gaming</li>
        <li>Hiking</li>
        <li>Hockey</li>
      </ul>
    </div>
  )
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
