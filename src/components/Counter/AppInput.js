import React from 'react';
import PropTypes from 'prop-types';

class AppInput extends React.Component {

    static defaultProps = {
        onChange: function(e){},
        nativeProps: {}
    }
    
    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    input = React.createRef();

    componentDidUpdate(prevProps, prevState) {
        let inp = this.input.current;

        if (prevProps.value !== this.props.value ||
            this.props.value !== inp.value
        ) {
            inp.value = this.props.value;
        }
    }

    makeChange = (e) => {
        e.preventDefault();
        if (this.props.value !== e.target.value) {
            this.props.onChange(e);
        }
    }

    render() {
        return (
                <input ref={this.input} {...this.props.nativeProps} 
                       defaultValue={this.props.value}
                       onBlur={this.makeChange}
                       onKeyPress={(e)=>e.key==='Enter'? this.makeChange(e):null}
                ></input>

        )
    }
}

export default AppInput;