import Proptypes from 'prop-types'

function List(props) {

    // SECOND METHOD -> the array is in the App.jsx, and we call a prop to acess that here (better if you need to make more lists)
    const category = props.category;
    const itemList = props.items;
    
    /* FIRST METHOD (use the fruit and fruits names to make the function work, and simply call the function in the App.jsx)
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105}];*/

    //fruits.sort((a, b) => a.name.localeCompare(b.name)) //ALPHABETICAL ORDER
    //fruits.sort((a, b) => a.calories - b.calories) //NUMERIC ORDER

        //.filter specifies a criteria, such as user preferences
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100)


        //.map is iterating over an array and apply a function to each item in the array, returning a new array
    const listItems = itemList.map(item => <li key={item.id}>{item.name} have <b>{item.calories}kCal</b></li>)


    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
        );
}

List.defaultProps = {
    category: "Category",
    items: [] //it is an empty array
}

// .shape is for an object what have multiple props like numbers etc., arrayOf method needed because of these objects located in an array
List.Proptypes = {
    category: Proptypes.string,
    items: Proptypes.arrayOf(Proptypes.shape({id: Proptypes.number, name: Proptypes.string, calories: Proptypes.number}))
}

export default List