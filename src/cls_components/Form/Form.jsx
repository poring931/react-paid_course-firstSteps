import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email:'',
            message:'',
            select:'',
            subscribe: false,
            gender:''
        }
        this.firstNameRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.firstNameRef);
        this.firstNameRef.current.focus()
    }

    handleChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    validateName = (name) => {
        if (this.state.firstName.length < 5){
            console.log('your name is too short')
        }
    }
    handleCheckBox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    render() {

        const {firstName, email, message, select, subscribe, gender} = this.state;

        return (
            <div>
                <h3>SetState for from inputs</h3>
                <input onBlur={this.validateName} onChange={this.handleChangeInput} value={firstName} type="text" name="firstName" placeholder="First Name"/>
                <input ref={this.firstNameRef} onChange={this.handleChangeInput} value={email} type="mail" name="email" placeholder="Yours mail"/>
                <br />
                <textarea name="message" value={message} onChange={this.handleChangeInput}/>
                <br />
                <select name="select" id="" value={select} onChange={this.handleChangeInput}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br />
                <label htmlFor="agree">I agree with terms and conditions</label>
                  <input id="agree" type="checkbox" name="subscribe"  checked={subscribe} onChange={this.handleCheckBox}/>
                <br />
                <input type="radio" name="gender" value="male" checked={gender === 'male'}  onChange={this.handleChangeInput}/>Male
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={this.handleChangeInput}/>Female
                <br />
            </div>
        )
    }
}
