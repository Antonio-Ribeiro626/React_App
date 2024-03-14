import List from './List'
function Teste(){
const Flash = [
                {id: 1, name:"Cow", calories: 21},
                {id: 2, name:"Pig", calories: 40},
                {id: 2, name:"Horse", calories: 10},
              
          ]

    return(

        <List items={Flash} category="Carne"/>
    )


}

export default Teste