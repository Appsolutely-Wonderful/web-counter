import { Component } from "react";
import styles from "../../styles/counter.module.css"

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
    }

    subtract() {
        let next_val = this.props.value - 1;
        this.props.onChange(this.props.name, next_val);
    }

    add() {
        let next_val = this.props.value + 1;
        this.props.onChange(this.props.name, next_val);
    }

    render () {
        return (
            <div className={styles.counter_box}>
                <div className={styles.counter_name}>{this.props.name}</div>
                <div className={styles.counter_btn_box}>
                    <button onClick={this.subtract} className={`${styles.counter_button} ${styles.counter_plus_minus}`}>&#8722;</button>
                    <span className={styles.counter_value}>{this.props.value}</span>
                    <button onClick={this.add} className={`${styles.counter_button} ${styles.counter_plus_minus}`}>&#43;</button>
                </div>
            </div>
        );
    }
}