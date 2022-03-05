import { Component } from "react";
import styles from "../../styles/counter.module.css"

export class CounterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter_name: ""
        }

        this.updateCounterName = this.updateCounterName.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateCounterName(event) {
        this.setState({
            counter_name: event.target.value
        });
    }

    submit() {
        this.props.onSubmit(this.state.counter_name);
        this.setState({counter_name: ""})
    }

    render() {
        return (<div>
            <input onChange={this.updateCounterName} value={this.state.counter_name} className={styles.input} type="text" placeholder="Counter Name" />
            <button onClick={this.submit} className={styles.input_button}>Add</button>
        </div>)
    }
}