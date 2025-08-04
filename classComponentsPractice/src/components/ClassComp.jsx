import React from 'react'

// const ClassComp = () => {
//   return (
//     <div>ClassComp</div>
//   )
// }

// export default ClassComp

class ClassComp extends React.Component {
    constructor(props) {
        super()
        this.state = {
            count : props.start,
        }
        this.onAdd = this.onAdd.bind(this)
        this.onMinus = this.onMinus.bind(this)
    }

    onAdd() {
        const n = this.state.count+1;
        this.setState({count: n})
    }

    onMinus() {
        const n = this.state.count-1;
        this.setState({count: n})
    }


    render () {
        const {count} = this.state;
        return (
            <>
                <h3>
                    More reasons to Like functional component
                </h3>
                <button onClick={this.onAdd}> Add </button>
                {count}
                <button onClick={this.onMinus}> Minus </button>
            </>
        )
    }
}

export default ClassComp;