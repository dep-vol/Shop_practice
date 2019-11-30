import React from 'react';
import AppInput from './AppInput';
import PropTypes from 'prop-types';
import styles from './Counter.module.css'

class Counter extends React.Component{

    static defaultProps = {
        onChange: function(cnt){}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {inpValue:this.props.cnt};

    plus = () => {
        this.set(this.props.cnt + 1)
    }
    
    minus = () => {
        this.set(this.props.cnt - 1)
    }

    onChange = (e)=> {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.cnt : cnt);
    }


    set(newCnt) {
        let counter = Math.max(Math.min(newCnt, this.props.max), this.props.min);
        this.setState(
            { inpValue: counter });
        this.props.onChange(counter)
    }


    render() {
        return (
            
            <div className={styles.form} >
               
                <button className={styles.btnCounter} onClick={this.minus} disabled={this.props.disabled}>-</button>
                <AppInput 
                nativeProps={{type:'text', className:'form-control'}}
                value={this.props.cnt}
                onChange={this.onChange}
                />
                <button className={styles.btnCounter} onClick={this.plus} disabled={this.props.disabled}>+</button>
            </div>

            
        )
    }

}

export default Counter;