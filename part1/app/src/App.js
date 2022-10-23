const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}


const Total = ({parts}) => {
  return (
      console.log((parts.reduce((a,v) =>  a = a + v.exercises, 0 ))),
      <p>
        it is the total component, Number of exercises {parts.reduce((a,v) =>  a = a + v.exercises, 0 )}
      </p>  
      

      

  )
}

const Part = (props) => {
  return (
  <p> {props.name} {props.exercises}</p>
  )
}


const Content = ({parts}) => {

  return (parts.map(part => <Part name={part.name} exercises={part.exercises} />)

  )

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



export default App