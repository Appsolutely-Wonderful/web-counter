import { Component } from "react";
import { CounterForm } from "./counter_form";
import { Counter } from "./counter";
import styles from "../../styles/counter.module.css"

export class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [],
            adding: false
        }

        this.showAddCounterForm = this.showAddCounterForm.bind(this);
        this.renderCounters = this.renderCounters.bind(this);
        this.createCounter = this.createCounter.bind(this);
        this.saveState = this.saveState.bind(this);
        this.serialize = this.serialize.bind(this);
        this.unserialize = this.unserialize.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.getCounter = this.getCounter.bind(this);
    }

    componentDidMount() {
        this.loadState();
    }

    loadState() {
        let json = localStorage.getItem("contents");
        if (json != null) {
            let loaded_state = JSON.parse(json);
            this.setState(loaded_state);
        }
    }

    saveState() {
        // TODO: save to local storage
        let data = this.serialize();
        localStorage.setItem("contents", data);
    }

    serialize() {
        let json = JSON.stringify(this.state);
        console.log(json);
        return json;
    }

    unserialize () {

    }

    getCounter(name) {
        return this.state.counters.find((counter) => counter.name == name);
    }

    createCounter(name) {
        let counter = this.getCounter(name);
        if (counter) {
            alert("A counter named " + name + " already exists");
            return;
        }
        this.setState((oldState) => ({
            counters: oldState.counters.concat([{name: name, value: 0}]),
            adding: false
        }), this.saveState);
    }

    updateValue(name, value) {
        let counter = this.getCounter(name);
        // console.log("Updating counter " + counter.name)
        counter.value = value;
        this.setState({});
        // console.log(this.state.counters);
        this.saveState();
    }

    renderCounters() {
        if (this.state.counters.length == 0) {
            return (<p className={styles.center}>You have no counters</p>)
        } else {
            return (<div>
                    {this.state.counters.map((counter) => { return (<Counter key={counter.name} name={counter.name} value={counter.value} onChange={this.updateValue}/>)})}
                    </div>
                );
        }
    }

    showAddCounterForm() {
        this.setState({
            adding: true
        });
    }

    renderAddButton() {
        return (<div className={styles.center}>
            <button onClick={this.showAddCounterForm} className={styles.counter_button}>Add Counter</button>
        </div>)
    }

    renderAdderForm() {
        return (<CounterForm onSubmit={this.createCounter} />)
    }

    render() {
        return (<div>
            <h2 className={styles.center}>Current Counters</h2>
            {this.renderCounters()}
            {this.state.adding && this.renderAdderForm()}
            {!this.state.adding && this.renderAddButton()}
        </div>)
    }
}