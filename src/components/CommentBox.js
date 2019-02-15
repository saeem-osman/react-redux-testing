import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'

class CommentBox extends React.Component{
    state = {
        comment : ''
    }
    handleChange = (event) =>{
        this.setState({
            comment : event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()

        this.props.saveComment(this.state.comment)

        this.setState({
            comment : ''
        })
    }
    render(){
        return(
            <div>
            
            <form onSubmit={this.handleSubmit}>
            <h2>Add a comment</h2>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit</button>
                    </div>
            </form>

            
        </div>
        )
    }
}

export default connect(null, actions)(CommentBox)